<template>
  <q-scroll-area class="scroll-container fit" ref="scroller">
    <home-slide ref="home" class="scroll-page" id="home" />
    <about-me-slide ref="about" class="scroll-page" id="about" />
    <contact-me-slide ref="contact" class="scroll-page" id="contact" />
  </q-scroll-area>
</template>
<script setup>
import { ref, onMounted, watch, defineProps, defineEmits } from 'vue';
import AboutMeSlide from 'src/components/AboutMeSlide.vue';
import HomeSlide from 'src/components/HomeSlide.vue';
import ContactMeSlide from 'src/components/ContactMeSlide.vue';

const scroller = ref(null);
const home = ref(null);
const about = ref(null);
const contact = ref(null);
const activeComponent = ref(''); // stores the name of the component that is most in view

const pageNames = ['home', 'about', 'contact'];

const props = defineProps({
  scrollToPage: String,
});

const emit = defineEmits(['update:activeComponent', 'update:pageNames']);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeComponent.value = entry.target.id;
          emit('update:activeComponent', activeComponent.value);
        }
      });
    },
    { threshold: 0.5 }
  ); // the component is considered "in view" when half of it is visible

  observer.observe(home.value.$el);
  observer.observe(about.value.$el);
  observer.observe(contact.value.$el);

  emit('update:pageNames', pageNames);
});

watch(
  () => props.scrollToPage,
  (newVal) => {
    if (pageNames.includes(newVal)) {
      scroller.value.$el
        .querySelector(`#${newVal}`)
        .scrollIntoView({ behavior: 'smooth' });
    }
  }
);
</script>
