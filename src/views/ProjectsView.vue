<script setup>
import FooterView from '../components/FooterView.vue'

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import { ref } from 'vue'

// Import images for the first carousel
import web_plastic_1 from '../components/images/webPlastic1.jpg'
import web_plastic_2 from '../components/images/webPlastic2.jpg'
import web_plastic_3 from '../components/images/webPlastic3.jpg'

// Import images for the second carousel
import web_maison_1 from '../components/images/webMaison1.jpg'
import web_maison_2 from '../components/images/webMaison2.jpg'

const slides1 = ref([
  {
    image: web_plastic_1,
  },
  {
    image: web_plastic_2,
  },
  {
    image: web_plastic_3,
  },
])

const slides2 = ref([
  {
    image: web_maison_1,
  },
  {
    image: web_maison_2,
  },
])
</script>

<template>
  <section class="flex flex-col space-y-12">
    <!-- First Carousel Section -->
    <div class="flex flex-col w-full space-y-6 pb-10 pt-10">
      <div class="w-full">
        <vueper-slides>
          <vueper-slide v-for="(slide, i) in slides1" :key="i" :image="slide.image">
          </vueper-slide>
        </vueper-slides>
      </div>
      <div class="w-full bg-darkGray p-5 text-sm">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
          <div class="text-pinkyWhite">
            <p><span class="font-bold">Project:</span> Semester exam</p>
            <p><span class="font-bold">Duration:</span> 5 weeks</p>
            <p><span class="font-bold">Period:</span> November - December 2024</p>
            <p><span class="font-bold">Team:</span> 4 members</p>
            <p><span class="font-bold">My contribution:</span> Concept design, brand design, graphic design, UX
              research, website front-end development</p>
          </div>
          <div class="text-pinkyWhite">
            <p><span class="font-bold">Methods:</span> Desk research, survey, interviews, user personas,
              empathy/affinity/journey maps</p>
            <p><span class="font-bold">Tools:</span> Photoshop, Illustrator, InDesign, Figma, HTML, CSS, Github</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Second Carousel Section -->
    <div class="flex flex-col w-full space-y-6 pb-10">
      <div class="w-full">
        <vueper-slides>
          <vueper-slide v-for="(slide, i) in slides2" :key="i" :image="slide.image">
          </vueper-slide>
        </vueper-slides>
      </div>
      <div class="w-full bg-darkGray p-5 text-sm">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
          <div class="text-pinkyWhite">
            <p><span class="font-bold">Project:</span> Design and time managment</p>
            <p><span class="font-bold">Duration:</span> 1 week</p>
            <p><span class="font-bold">Period:</span> September 2024</p>
            <p><span class="font-bold">Team:</span> 3 members</p>
            <p><span class="font-bold">My contribution:</span> UI/UX design, logo design,</p>
          </div>
          <div class="text-pinkyWhite">
            <p><span class="font-bold">Methods:</span> Research Wireframing, prototyping, usability testing, WBS,</p>
            <p><span class="font-bold">Tools:</span> Figma, illustrator, photoshop, notion</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style></style>
