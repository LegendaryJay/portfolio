<template>
  <div v-for="row in rows" :key="row">
    <q-tooltip
      anchor="center left"
      self="center end"
      transition-show="fade"
      transition-hide="fade"
    >
      {{ skillToString(row[1]) }}
    </q-tooltip>
    <div class="row">
      <div
        :style="{
          'font-size': textSize + 'px',
        }"
      >
        {{ row[0] }}
      </div>
      <div class="col dot"></div>
      <q-rating
        v-model="tempData[row[0]]"
        max="5"
        :size="textSize + 'px'"
        icon="fa-regular fa-circle"
        icon-selected="fa-solid fa-circle"
        icon-half="fa-regular fa-circle-dot"
        color="primary"
        readonly
      />
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { skillLegend } from 'src/scripts/SkillLevels';
import { computed } from 'vue';
const $q = useQuasar();
const tempData = {
  'HTML/CSS/JS': 4.5,
  Java: 4.5,
  'C#': 4.5,
  'Balsamiq Wireframing': 4,
  'Vue.js': 3.5,
  typescript: 3.5,
  Python: 3.5,
  Git: 3,
  Angular: 3,
  'React.js': 3,
  'Microsoft SQL server': 3,
  'Flutter (Dart)': 2.5,
  'WPF (XAML, C#)': 2,
  Firebase: 2,
};
const rows = Object.entries(tempData).reverse((a, b) => a[1] - b[1]);

const skillToString = (number) => {
  const num = Math.floor(number);

  return skillLegend[num]?.name + (number > num ? '+' : '');
};

const textSize = computed(() => {
  let calculation = 5 + $q.screen.width * 0.01;
  const minPixels = 12;
  const maxPixels = 16;
  return Math.max(Math.min(maxPixels, calculation), minPixels);
});
</script>

<style lang="scss" scoped>
.dot {
  border-bottom: dotted 3px rgba($primary, 0.3);
  width: 100px;
  float: left;
  position: relative;
  display: block;
  height: 12px;
  margin: 0 5px 0 5px;
}
</style>
