
<script setup>
import FooterView from '../components/FooterView.vue'


import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import { ref } from 'vue'

// import hver billede
import mini_me from '../components/images/mini_me.png'


const slides = ref([
  {
    title: 'Slide #1',
    image: mini_me,
    
  },
  {
    title: 'Slide #2',
    image: mini_me,
  
    
  },
  {
    title: 'Slide #1',
    image: mini_me,
    
  },
])
</script>

<template>

  
  <vueper-slides>
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"

    
      :title="slide.title"

         :image="slide.image"
      >
      <!-- <img :src="slide.image" alt="Slide image" style="width: 100%; height: auto;" />  -->
      
    </vueper-slide>
  </vueper-slides>
</template>

<style>
/* your styles */
</style>
