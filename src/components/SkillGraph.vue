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
          'font-size': props.size + 'px',
        }"
      >
        {{ row[0] }}
      </div>
      <div class="col dot"></div>
      <q-rating
        v-model="tempData[row[0]]"
        max="5"
        :size="props.size + 'px'"
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
import { skillLegend } from 'src/scripts/SkillLevels';
import { defineProps } from 'vue';

const tempData = {
  'HTML/CSS/JS': 4,
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
const rows = Object.entries(tempData)
  .sort((a, b) => a[1] - b[1])
  .reverse();

const skillToString = (number) => {
  const num = Math.floor(number);

  return skillLegend[num]?.name + (number > num ? '+' : '');
};

const props = defineProps({
  size: {
    type: Number,
    default: 16,
  },
});
</script>
