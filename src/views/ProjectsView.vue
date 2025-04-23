
<script setup>
import FooterView from '../components/FooterView.vue'

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import { ref } from 'vue'

const slides = ref([
  {
    title: 'Slide #1',
    content: 'Slide 1 content.'
    
  },
  {
    title: 'Slide #2',
    content: 'Slide 2 content.',
    
  }
])
</script>

<template>

  
  <vueper-slides>
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"

      
      :title="slide.title"
      :content="slide.content">
      
    </vueper-slide>
  </vueper-slides>
</template>

<style>
/* your styles */
</style>
