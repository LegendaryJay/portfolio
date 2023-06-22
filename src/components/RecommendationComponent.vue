<template>
  <q-card flat class="medium-spacer-parent medium-spacer-child">
    <div :class="['subsection-title-', size, ' text-primary'].join('')">
      <div class="row justify-between">
        <div class="column">
          <b> {{ recommendation.name }}</b>
          <i> {{ recommendation.relation }} </i>
        </div>

        <div>
          <q-btn
            rounded
            outline
            label="Read Full"
            icon-right="read_more"
            padding="xs md"
            size="sm"
            @click="openRecomendationModal"
            v-if="recommendation?.fullText ?? false"
          />
        </div>
      </div>
    </div>
    <div :class="['subsection-text-', size].join('')">
      “{{ recommendation.snippet }}”
    </div>
  </q-card>

  <q-dialog v-model="dialog" full-width>
    <q-card flat class="q-pb-md fit column">
      <div class="row justify-between q-ma-md col-auto">
        <div class="column">
          <b class="text-primary text-h4"> {{ recommendation.name }} </b>
          <i class="text-accent text-subtitle">
            {{ recommendation.relation }}
          </i>
        </div>
        <div class="q-my-auto">
          <q-btn
            class="q-my-auto"
            icon="close"
            flat
            round
            dense
            @click="dialog = false"
          />
        </div>
      </div>
      <q-scroll-area class="col q-pa-md">
        <div
          class="q-px-md dialog-content"
          v-html="recommendation.fullText"
        ></div>
      </q-scroll-area>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    recommendation: Object,
    size: {
      type: String,
      default: 'lg',
    },
  },
  setup() {
    const dialog = ref(false);

    function openRecomendationModal() {
      dialog.value = true;
    }

    return {
      dialog,
      openRecomendationModal,
    };
  },
};
</script>

<style lang="scss" scoped>
.medium-spacer-parent {
  padding-top: 16px;
  padding-right: 16px;
}
.medium-spacer-child > div {
  padding-bottom: 16px;
  padding-left: 16px;
}

.dialog-content {
  /* word-wrap: break-word; */
  /* or you can use overflow-wrap for more modern browser support */
  overflow-wrap: break-word;
  overflow: hidden;
  background: rgba($dark-page, 0.8);
}
</style>
