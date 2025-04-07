<script setup>
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg',
  'image8.jpg',
  'image9.jpg',
  'image10.jpg',
  'image11.jpg',
  'image12.jpg',
];
</script>

<template>
  <main>
    <div class="gallery">
      <div v-for="(image, index) in images" :key="index" class="gallery-item">
        <img :src="image" alt="Artwork" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}
</style>