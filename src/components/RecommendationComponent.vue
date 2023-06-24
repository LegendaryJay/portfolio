<template>
  <q-card flat id="small-rec" class="medium-spacer-parent fit">
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

  <q-dialog
    v-model="dialog"
    full-height
    full-width
    @click="closeRecomendationModal"
  >
    <div class="fit">
      <div class="big-rec-card q-mx-auto">
        <q-card flat id="big-rec" class="q-pb-md p-px-md column fit">
          <div class="row justify-between col-auto q-pa-md">
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
                @click="closeRecomendationModal"
              />
            </div>
          </div>
          <div class="col q-px-md q-pb-md">
            <q-scroll-area class="fit">
              <div
                class="dialog-content q-pa-md"
                v-html="recommendation.fullText"
              ></div>
            </q-scroll-area>
          </div>
        </q-card>
      </div>
    </div>
  </q-dialog>
</template>

<script>
import { ref } from 'vue';
import { morph } from 'quasar';

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
    function closeRecomendationModal() {
      dialog.value = false;
    }

    return {
      dialog,
      openRecomendationModal,
      closeRecomendationModal,
    };
  },
};
</script>

<style lang="scss" scoped>
.big-rec-card {
  width: min(100%, 700px);
  height: 100%;
}
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
  font-size: $text-small;
  @media (min-width: $breakpoint-sm-max) {
    font-size: $text-medium;
  }
}
</style>
