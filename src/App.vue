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
          <q-item
            clickable
            v-ripple
            :active="activePage == item.name.toLowerCase()"
            @click="activePage = item.name.toLowerCase()"
            v-for="item in drawerPageNames"
            :key="item.name"
          >
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section> {{ item.name }} </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

      <q-page-container class="window-height">
        <index-page
          v-model="activePage"
          @update-page-names="handlePageNamesUpdate"
        />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import HamburgerMenu from 'src/components/HamburgerMenu.vue';
import backgroundUrl from 'src/assets/abstract-background.jpg';

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
    let drawerPageNames = reactive([]);
    const activePage = ref('home');
    return {
      showMode,
      activePage,
      backgroundUrl,
      drawerPageNames,
      handlePageNamesUpdate(pageNames) {
        drawerPageNames.length = 0;
        drawerPageNames.push(...pageNames);
      },
    };
  },
};
</script>

<style lang="scss">

@font-face {
  font-family: ubuntu;
  src: url(./Themes/Ubuntu/Ubuntu-Regular.ttf);
}
* {
  font-family: ubuntu;
}

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
