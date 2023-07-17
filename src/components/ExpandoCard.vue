<template>
  <q-card flat class="column">
    <q-item>
      <q-item-section>
        <q-item-label>{{ item.title }}</q-item-label>
        <q-item-label caption>{{ item.subtitle }}</q-item-label>
      </q-item-section>
      <q-item-section avatar>
        <q-btn
          rounded
          outline
          :label="item.iconLabel"
          :icon-right="item.longDescriptionIcon"
          padding="xs md"
          class="q-my-auto"
          size="sm"
          @click="openModal"
          v-if="item?.longDescription ?? false"
        />
      </q-item-section>
    </q-item>
    <q-separator></q-separator>

    <q-img
      v-if="!!item.img"
      fit="contain"
      style="width: 92%"
      class="q-mt-sm q-mx-auto"
      :src="getImageUrl(item.img)"
    />

    <div class="column q-px-md q-py-sm col">
      <div class="text- small">{{ item.description }}</div>
    </div>
  </q-card>
  <q-dialog v-model="isOpen" full-height @click="closeModal">
    <q-card flat class="big-rec-card medium-spacer-parent column">
      <div class="row medium-spacer-child col-auto justify-between">
        <div class="q-my-auto column text-primary">
          <b class="text-large"> {{ item?.title }}</b>
          <i class="text-medium" v-if="!!item?.subtitle">
            {{ item.subtitle }}
          </i>
        </div>

        <q-btn
          icon="close"
          class="q-my-auto"
          flat
          round
          dense
          @click="closeModal"
        />
      </div>

      <div class="column medium-spacer-child col">
        <q-scroll-area class="fit">
          <div
            class="dialog-content q-pa-md"
            v-html="item.longDescription"
          ></div>
        </q-scroll-area>
        <div v-if="!isBig" class="text-medium">{{ item.description }}</div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue';
import Expando from '/src/scripts/ExpandoObject.js';
import { getImageUrl } from 'src/scripts/ImageFromUrl';

export default {
  props: {
    item: {
      type: Expando,
    },
    size: {
      type: String,
      default: 'lg',
    },
  },
  setup() {
    const dialog = ref(false);

    function openModal() {
      isOpen.value = true;
      isBig.value = true;
    }
    function closeModal() {
      isBig.value = false;
      isOpen.value = false;
    }

    const isBig = ref(false);
    const isOpen = ref(false);

    return {
      dialog,
      openModal,
      closeModal,
      isBig,
      isOpen,
      getImageUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
.dialog-content {
  /* word-wrap: break-word; */
  /* or you can use overflow-wrap for more modern browser support */
  overflow-wrap: break-word;
  overflow: hidden;
  background: rgba($dark-page, 0.8);
  font-size: $text-small;

  @media (min-width: $breakpoint-sm-max) {
    font-size: $text-medium;
  }
}
.big-rec-card {
  width: min(100%, 750px);
}
.hide-while-animating--false {
  visibility: visible;
  .q-dialog__backdrop {
    background: black;
  }
}
</style>
