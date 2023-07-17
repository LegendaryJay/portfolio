<template>
  <q-scroll-area
    @scroll="scrollListener"
    class="scroll-container fit"
    ref="scroller"
  >
    <home-slide ref="home" class="scroll-page" />
    <about-me-slide ref="about" class="scroll-page" />
    <portfolio-slide ref="portfolio" class="scroll-page" />
    <!-- <contact-me-slide ref="contact" class="scroll-page" /> -->
  </q-scroll-area>
</template>
<script setup>
import { ref, onMounted, watch, defineProps, defineEmits } from 'vue';
import AboutMeSlide from 'src/components/AboutMeSlide.vue';
import HomeSlide from 'src/components/HomeSlide.vue';
//import ContactMeSlide from 'src/components/ContactMeSlide.vue';
import PortfolioSlide from 'src/components/PortfolioSlide.vue';

const scroller = ref(null);
const home = ref(null);
const about = ref(null);
//const contact = ref(null);
const portfolio = ref(null);

let tempActivePage = '';

let timer;

const scrollListener = function () {
  clearTimeout(timer);
  timer = setTimeout(function () {
    console.log('!');
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

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let value = pages
            .find((x) => x.ref().value.$el == entry.target)
            .name.toLowerCase();
          tempActivePage = value;
        }
      });
    },
    { threshold: [0.5] }
  ); // the component is considered "in view" when half of it is visible

  observer.observe(home.value.$el);
  observer.observe(about.value.$el);
  observer.observe(portfolio.value.$el);

  emit('updatePageNames', pages);
});

watch(
  () => props.modelValue,
  (newVal) => {
    let page = pages.find((x) => x.name.toLowerCase() == newVal);
    if (!!page) {
      page.ref().value.$el.scrollIntoView({ behavior: 'smooth' });
    }
  }
);
</script>
