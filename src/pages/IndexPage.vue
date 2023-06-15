<template>
  <q-page class="row items-center justify-evenly">
    <home-slide></home-slide>
  </q-page>
</template>

<script lang="ts">
import HomeSlide from 'src/components/HomeSlide.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { HomeSlide },
  setup() {
    console.log('test');
  },
});
</script>
