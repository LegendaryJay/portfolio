<template>
  <q-table
    flat
    hide-header
    hide-bottom
    dense
    separator="none"
    :rows="rows"
    :rows-per-page-options="[rows.length]"
    :grid-header="false"
    class="skill-table"
  >
    <template v-slot:body-cell-1="props">
      <q-td :props="props">
        <q-tooltip
          anchor="center right"
          self="center start"
          transition-show="fade"
          transition-hide="fade"
        >
          {{ ratingToString(props.row[1]) }}
        </q-tooltip>
        <q-rating
          v-model="props.row[1]"
          max="5"
          size="xs"
          icon="fa-regular fa-circle"
          icon-selected="fa-solid fa-circle"
          icon-half="fa-regular fa-circle-dot"
          color="primary"
          readonly
        >
        </q-rating>
      </q-td>
    </template>
  </q-table>
</template>

<script setup>
import { skillLegend } from 'src/scripts/SkillLevels';
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

const ratingToString = (number) => {
  const target = Math.floor(number);
  const overTarget = number > target;

  const legendVal = skillLegend?.[target];

  if (legendVal) {
    return legendVal.name + (overTarget ? ' + ' : '');
  }
  return '';
};
const rows = Object.entries(tempData);
</script>

<style lang="scss" scoped>
.skill-table {
  border-radius: 10px;
}
</style>
