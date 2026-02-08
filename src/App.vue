<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterView from './components/FooterView.vue';

</script>


<script setup>

</script>

<template>
  <header>
    <router-link to="/">
      <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="50" height="50" />
    </router-link>

    <div class="wrapper">

      <nav class="text-pinkyWhite">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/artworks">Artworks</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <FooterView />
</template>

<style scoped>
header {
  line-height: 1.8;
  max-height: 100vh;
  background: #000033;
  border-bottom: 4px solid #00FFFF;
  box-shadow: 0 4px 20px rgba(0, 255, 255, 0.5);
  position: relative;
}

header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: repeating-linear-gradient(90deg,
      #00FFFF 0px,
      #00FFFF 8px,
      #FF00FF 8px,
      #FF00FF 16px);
  animation: borderScroll 1s linear infinite;
}

@keyframes borderScroll {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 16px 0;
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  filter: drop-shadow(0 0 10px #00FFFF);
}

nav {
  font-size: 14px;
  text-align: center;
  margin-top: 2rem;
  font-family: 'Press Start 2P', cursive;
  text-transform: uppercase;
}

nav a.router-link-exact-active {
  color: #00FFFF;
  background: rgba(0, 255, 255, 0.1);
  text-shadow: 0 0 10px #00FFFF;
}

nav a.router-link-exact-active:hover {
  background: rgba(0, 255, 255, 0.2);
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-left: 2px solid #00FFFF;
  color: #F8F8FF;
  transition: all 0.1s steps(2);
  text-decoration: none;
  position: relative;
}

nav a::before {
  content: '▶';
  position: absolute;
  left: 0.3rem;
  opacity: 0;
  transition: opacity 0.1s steps(2);
}

nav a:hover::before {
  opacity: 1;
  animation: blink 0.8s steps(2) infinite;
}

@keyframes blink {

  0%,
  49% {
    opacity: 1;
  }

  50%,
  100% {
    opacity: 0;
  }
}

nav a:hover {
  background: rgba(255, 0, 255, 0.2);
  color: #FF00FF;
  text-shadow: 0 0 10px #FF00FF;
  transform: translateX(2px);
  padding-left: 1.5rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 0.875rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
