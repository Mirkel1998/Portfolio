<script setup>
import FooterView from '../components/FooterView.vue';
</script>

<template>

<div class="cvBigPicture"></div>

<section class="idCardSection flex items-center justify-center h-screen">
<div class="flex items-center justify-center">
  <div class="idCard1 bg-darkGray h-100 w-350">
  </div>

</div>
 

  <div class="1dCard2">

  </div>

</section>

<FooterView />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.cvBigPicture {
  width: auto;
  height: 100vh;
  background-image: url("../components/images/cv take 3.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
