<template>
  <q-scroll-area class="fit">
    <home-slide />
    <about-me-slide />
    <contact-me-slide />
  </q-scroll-area>
</template>

<script setup>
import AboutMeSlide from 'src/components/AboutMeSlide.vue';
import HomeSlide from 'src/components/HomeSlide.vue';
import ContactMeSlide from 'src/components/ContactMeSlide.vue';
</script>
