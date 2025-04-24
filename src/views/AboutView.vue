<script setup>
import FooterView from '../components/FooterView.vue';
</script>

<template>
  <div class="flex w-full justify-center pt-5">
    <iframe class="sm:h-[720px] h-50" width="1280" height="720"
      src="https://www.youtube.com/embed/lt262dAc7ZI?si=O7vVbG9WfmV9TsGD" title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>

  <div class="flex w-full flex-wrap justify-center pt-5">
    <img class="object-cover w-full h-full md:h-auto md:w-1/3" src="../components/images/buisnessCard1.png" alt="">
    <img class="object-cover w-full h-full md:h-auto md:w-1/3" src="../components/images/buisnessCard2.png" alt="">
  </div>

  <div class="flex w-full justify-center pb-5">
    <a href="../components/images/cv.pdf" download="cv.pdf"
      class="bg-darkGray hover:bg-hooverPink text-pinkyWhite font-bold py-2 px-4 rounded self-end inline-block text-center titleFont">
      Download my CV
    </a>
  </div>







</template>

<style></style>