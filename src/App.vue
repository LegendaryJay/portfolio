<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
@font-face {
  font-family: ubuntu;
  src: url(./Themes/Ubuntu/Ubuntu-Regular.ttf);
}
* {
  font-family: ubuntu;
}
</style>
