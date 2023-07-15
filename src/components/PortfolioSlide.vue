<script setup>
import { getImageUrl } from 'src/scripts/ImageFromUrl';
import { reactive } from 'vue';
import Expando from 'src/scripts/ExpandoObject';
import ExpandoCard from './ExpandoCard.vue';
const projects = reactive([
  new Expando(
    'Portfolio',
    'Quasar(Vue3), HTML/CSS/JS, SCSS, [Design]',
    'The page you are on now!'
  ),
  new Expando(
    'Yellowstone Job Application',
    'Quasar(Vue3), HTML/CSS/JS, SCSS, [Design]',
    'This was a school project where I needed to redesign from scratch an old Yellowstone job application'
  ),
  new Expando(
    'Wireframes',
    'Balsamiq Wireframes, [Design]',
    'I made these for my Web and Software capstone project'
  ),
  new Expando(
    'Olympic Medals',
    'React, HTML/CSS/JS',
    'I made this to test my react capabilities and work with '
  ),
  new Expando(
    'Media Library',
    'C#',
    'I learned C# and entity framework with this one.'
  ),
]);
</script>

<template>
  <div class="portfolio-background medium-spacer-parent">
    <div class="slide-title text-weight-bolder medium-spacer-child">
      Portfolio
    </div>
    <div
      class="col medium-spacer-child"
      v-for="project in projects"
      :key="project.name"
    >
      <ExpandoCard :item="project"></ExpandoCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-background {
  background-color: rgba(black, 0.5);
  backdrop-filter: blur(20px);
  min-height: 100vh;
}
.slide-title {
  color: white;
  font-size: $text-xlarge;
}

.item-title {
  font-size: $text-large;
  font-weight: bolder;
  color: $secondary;
}
.portfolio-card {
  background-color: rgba($dark, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
}
.portfolio-title {
  font-size: $text-large;
  color: $primary;
}
.about-text {
  font-size: $text-medium;
}

.background-card {
  background-color: rgba(black, 0.5);
  backdrop-filter: blur(20px);
  //min-height: 100vh)
}
</style>
