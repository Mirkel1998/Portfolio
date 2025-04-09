<script setup>
import FooterView from '../components/FooterView.vue';
</script>

<template>
<div class="cvBigPicture"></div>

<section>
  <div class="idCard1">

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
  width: 100%;
  height: 3508px;
  background-image: url("../components/images/cv take 3.png");
  background-size:contain;
  background-repeat: no-repeat;
}
</style>
