<template>
  <q-card flat class="medium-spacer-parent column">
    <div class="row medium-spacer-child col-auto justify-between text-primary">
      <div class="q-my-auto column text-primary">
        <b class="text-large"> {{ item?.title }}</b>
        <i class="text-medium" v-if="!!item?.subtitle">
          {{ item.subtitle }}
        </i>
      </div>

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
    </div>

    <div class="column medium-spacer-child col">
      <div class="text-medium">“{{ item.description }}”</div>
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
        <div v-if="!isBig" class="text-medium">“{{ item.description }}”</div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue';
import Expando from '/src/scripts/ExpandoObject.js';

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
  width: min(100%, 700px);
}
.hide-while-animating--false {
  visibility: visible;
  .q-dialog__backdrop {
    background: black;
  }
}
</style>
