<template>
  <div class="column">
    <div class="rounded-borders q-pa-sm q-my-xs text-primary" v-for="(skillSet, index) in skillSets" :key="index">
      {{ skillSet[0] }}
      <div class="q-ml-md">
          <q-chip outline color="accent" v-for="(skill, index2) in skillSet[1]" :key="index2">
            <div class="text-white">
              {{ skill }}
            </div>
            
            </q-chip>
        
      </div>

    </div>
  </div>
</template>

<script setup>
const skillSets = 
[
  ['Front-End',['HTML/CSS/JS', 'SASS', 'Angular', 'Vue3', 'React',]],
  ['Back-End', ['Java', 'C#', 'Python', 'Spring/Spring Boot', 'Entity Framework']],
  ['Database',['Database Normalization', 'Microsoft SQL server', 'Firebase',]],
  ['Mobile', ['Flutter','Xamarin']],
  ['Tools', ['Balsamiq Wireframing','Linux CLIs', 'Git',]],
  ['Methodologies & Principles', ['UI/UX', 'SOLID', 'AGILE/SCRUM', 'OOP Design Patterns']],

]

const props = defineProps({
  size: {
    type: Number,
    default: 16,
  },
});
</script>
