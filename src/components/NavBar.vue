<template>
  <nav>
    <RouterLink to="/">
      <p class="hover:text-hooverPink">Home</p>
    </RouterLink>
    <RouterLink to="/about">
      <p class="hover:text-hooverPink">About</p>
    </RouterLink>
    <RouterLink to="/projects">
      <p class="hover:text-hooverPink">Projects</p>
    </RouterLink>
    <RouterLink to="/paint">
      <p class="hover:text-hooverPink">Paint.67</p>
    </RouterLink>
    <RouterLink to="/artworks">
      <p class="hover:text-hooverPink">Artworks</p>
    </RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped></style>