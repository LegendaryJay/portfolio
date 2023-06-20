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
        <router-view />
      </q-page-container>

      <!-- <q-footer  elevated class=" bg-grey-8 text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img
                src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              />
            </q-avatar>
            <div>Title</div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer> -->
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue';
import HamburgerMenu from 'src/components/HamburgerMenu.vue';
import backgroundUrl from 'src/assets/abstract-background.png';

import { useQuasar } from 'quasar';

export default {
  components: {
    HamburgerMenu,
  },
  name: 'MyComponent',
  setup() {
    const $q = useQuasar();

    //let isMobile = ref(false);
    // const miniHideValue = ref(true);

    // const showMode = computed({
    //   get: () => {
    //     console.log(isMobile.value);
    //     return !isMobile.value || !miniHideValue.value;
    //   },
    //   set: (val) => {
    //     miniHideValue.value = !val;
    //   },
    // });
    const showMode = ref(false);
    $q.dark.set(true);

    // function checkMobile(el) {
    //   //isMobile.value = !!el.$el.querySelector('.q-drawer--mobile');
    // }

    return {
      showMode,
      //miniHideValue,
      //checkMobile,
      //isMobile,
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
