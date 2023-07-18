<template>
  <q-scroll-area
    @scroll="scrollListener"
    class="scroll-container fit"
    ref="scroller"
  >
    <home-slide v-intersection="options" ref="home" class="scroll-page" />
    <about-me-slide v-intersection="options" ref="about" class="scroll-page" />
    <portfolio-slide
      v-intersection="options"
      ref="portfolio"
      class="scroll-page"
    />
  </q-scroll-area>
</template>
<script setup>
import { ref, onMounted, watch, defineProps, defineEmits, reactive } from 'vue';
import AboutMeSlide from 'src/components/AboutMeSlide.vue';
import HomeSlide from 'src/components/HomeSlide.vue';
import PortfolioSlide from 'src/components/PortfolioSlide.vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const scroller = ref(null);
const home = ref(null);
const about = ref(null);
const portfolio = ref(null);

let tempActivePage = '';

let timer;

const scrollListener = function () {
  clearTimeout(timer);
  timer = setTimeout(function () {
    emit('update:modelValue', tempActivePage);
  }, 100);
};

const pages = [
  { icon: 'home', name: 'Home', ref: () => home },
  { icon: 'info', name: 'About', ref: () => about },
  { icon: 'work', name: 'Portfolio', ref: () => portfolio },
  //{ icon: 'home', name: 'Contact', ref: () => contact },
];

const props = defineProps(['modelValue']);

const emit = defineEmits(['update:modelValue', 'updatePageNames']);

const thresholds = [];

for (let i = 0; i <= 1.0; i += 0.1) {
  thresholds.push(i);
}

const options = {
  handler(entry) {
    let name = pages
      .find((x) => x.ref().value.$el == entry.target)
      .name.toLowerCase();
    if (name == tempActivePage) return;
    if (entry.isIntersecting === true) {
      let onScreenPercent =
        (entry.intersectionRatio * entry.target.offsetHeight) /
        $q.screen.height;
      if (onScreenPercent > 0.51) {
        tempActivePage = name;
      }
    }
  },
  cfg: {
    threshold: thresholds,
  },
};
onMounted(() => {
  emit('updatePageNames', pages);
});

watch(
  () => props.modelValue,
  (newVal) => {
    let page = pages.find((x) => x.name.toLowerCase() == newVal);
    if (!!page) {
      page.ref().value.$el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
);
</script>
