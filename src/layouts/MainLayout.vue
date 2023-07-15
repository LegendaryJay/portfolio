<template>
  <div
    class="page-container"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <q-layout view="hHh lpR fFf" ref="layout">
      <q-btn
        class="floating-button"
        size="md"
        round
        flat
        @click="showMode = !showMode"
      >
        <HamburgerMenu
          :is-open="showMode"
          :size="20"
          :transitionTime="0.2"
          :thickness="1"
        />
      </q-btn>
      <q-drawer
        v-model="showMode"
        overlay
        :width="200"
        :breakpoint="500"
        bordered
      >
        <div class="spacer"></div>
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>
            <q-item-section> About </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="work" />
            </q-item-section>

            <q-item-section> Portfolio </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

      <q-page-container class="window-height">
        <index-page />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue';
import HamburgerMenu from 'src/components/HamburgerMenu.vue';
import backgroundUrl from 'src/assets/abstract-background.png';

import { useQuasar } from 'quasar';
import IndexPage from 'src/pages/IndexPage.vue';

export default {
  components: {
    HamburgerMenu,
    IndexPage,
  },
  name: 'MyComponent',
  setup() {
    const $q = useQuasar();
    const showMode = ref(false);
    $q.dark.set(true);
    return {
      showMode,

      backgroundUrl,
    };
  },
};
</script>

<style lang="scss">
.q-item.q-router-link--active,
.q-item--active {
  color: white;
  background: rgba($accent, 0.2);
  background-clip: border-box;
}
.q-item {
  color: $primary;
}
.spacer {
  height: 5rem;
}
.page-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-position: 50% 50%;
}
.q-drawer {
  backdrop-filter: blur(10px);
  background-color: rgba($dark-page, 0.2);
}
.floating-button {
  position: absolute;
  backdrop-filter: blur(10px);
  top: 12px;
  left: 12px;
  z-index: 9999;
}
</style>
