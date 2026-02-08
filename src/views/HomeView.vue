<script setup>
import { ref, onMounted } from 'vue';
import FooterView from '../components/FooterView.vue';

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <!-- Hero Section with Parallax Effect -->
  <section class="hero-wrapper">
    <div class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-text-wrapper">
          <div class="hero-image-container animate-fade-in-up" style="animation-delay: 0s">
            <img src="../components/images/mini_me.png" alt="Mikkel" class="hero-image">
            <div class="neon-outline outline-1"></div>
            <div class="neon-outline outline-2"></div>
            <div class="neon-outline outline-3"></div>
          </div>
          <h1 class="hero-title-main animate-slide-up" style="animation-delay: 0.3s">Hiya!</h1>
        </div>
      </div>
      <div class="scroll-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>

  <!-- About Card Section -->
  <section class="about-section">
    <div class="container">
      <div class="about-card animate-fade-in-up">
        <div class="card-glow"></div>
        <h4 class="about-title">Hello, I'm Mikkel!</h4>
        <p class="about-text">
          I'm a multimedia design student at EASV. I have a passion for anything creative. I love taking photos,
          painting, illustrating, and creating websites. I enjoy the process of bringing ideas to life and exploring new
          ways to express myself. I strive to somehow combine my love for creativity with technology, and I am always
          looking for new ways to learn and grow.
        </p>
        <div class="button-wrapper">
          <router-link to="/about" class="cta-button group">
            About me
            <svg class="button-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Photography Feature -->
  <section class="feature-section">
    <div class="container">
      <div class="feature-card photo-card">
        <div class="feature-image-wrapper">
          <img src="../components/images/portfolioFront1.jpg" alt="Photography" class="feature-image">
          <div class="image-overlay"></div>
        </div>
        <div class="feature-content">
          <h5 class="feature-title">Photography</h5>
          <p class="feature-text">
            I love taking photos because it allows me to capture moments that might otherwise be forgotten. Through
            photography, I can freeze time, document emotions, and tell stories without words. I enjoy the way light,
            composition, and perspective come together to create something unique.
          </p>
          <p class="feature-subtext">
            Photos reminds us that moments are fleeting and precious, and that there's beauty to be found in the world
            around us if we just take the time to look for it.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Illustration Feature -->
  <section class="feature-section alt">
    <div class="container">
      <div class="feature-card illustration-card">
        <div class="feature-content order-1">
          <h5 class="feature-title">Illustrating</h5>
          <p class="feature-text">
            I love art and illustrating because it allows me to express emotions and ideas that words can't capture.
            Through drawing and painting, I can bring my imagination to life, create new worlds, and also it's just
            good old fun!
          </p>
          <p class="feature-subtext">
            Currently working on a 2D platformer feauturing this guy. The game will be made in Unity. Stay tuned for
            more info on that!
          </p>
        </div>
        <div class="feature-image-wrapper order-2">
          <img src="../components/images/UwUManden.png" alt="Illustration" class="feature-image">
          <div class="image-overlay"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section">
    <div class="cta-wrapper">
      <div class="cta-content">
        <h4 class="cta-title">Wanna see my projects?</h4>
        <p class="cta-subtitle">Explore my creative work and technical projects</p>
        <router-link to="/projects" class="cta-button-large group">
          View Projects
          <svg class="button-arrow-large" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
      <div class="cta-decoration"></div>
    </div>
  </section>
</template>

<style scoped>
/* Retro Pixel Art Styles */
* {
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

/* Hero Section */
.hero-wrapper {
  position: relative;
  overflow: hidden;
  border: 8px solid #00FFFF;
  border-style: double;
  box-shadow:
    inset 0 0 20px rgba(0, 255, 255, 0.3),
    0 0 30px rgba(0, 255, 255, 0.5);
}

.hero-section {
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-image: url("../components/images/2302166_7971.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: contrast(1.2) saturate(1.3);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(90deg,
      transparent 0px,
      transparent 4px,
      rgba(0, 255, 255, 0.03) 4px,
      rgba(0, 255, 255, 0.03) 8px),
    repeating-linear-gradient(0deg,
      transparent 0px,
      transparent 4px,
      rgba(255, 0, 255, 0.03) 4px,
      rgba(255, 0, 255, 0.03) 8px),
    radial-gradient(circle,
      rgba(139, 79, 189, 0.3) 0%,
      rgba(0, 0, 51, 0.8) 50%,
      rgba(0, 0, 0, 0.9) 100%);
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(0, 0, 51, 0.7);
  border: 4px solid #00FFFF;
  box-shadow:
    0 0 20px rgba(0, 255, 255, 0.8),
    inset 0 0 20px rgba(0, 255, 255, 0.3);
  animation: pixelPulse 2s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes pixelPulse {

  0%,
  100% {
    border-color: #00FFFF;
  }

  50% {
    border-color: #FF00FF;
  }
}

.hero-text-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
}

/* Hero Image with Neon Outline */
.hero-image-container {
  position: relative;
  width: clamp(200px, 30vw, 350px);
  height: clamp(250px, 35vw, 400px);
  /* Increase height to show more of the image */
  margin: 0 auto;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* Change from 'cover' to 'contain' to show full image */
  object-position: center bottom;
  /* Position image at bottom to show hair */
  position: relative;
  z-index: 2;
  filter:
    contrast(1.2) saturate(1.1) drop-shadow(0 0 10px rgba(0, 255, 255, 0.8));
}

.neon-outline {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border: 4px solid;
  animation: neonPulseOutline 2s infinite;
}

.outline-1 {
  border-color: #00FFFF;
  inset: -8px;
  animation-delay: 0s;
  box-shadow:
    0 0 20px rgba(0, 255, 255, 0.8),
    inset 0 0 20px rgba(0, 255, 255, 0.3);
}

.outline-2 {
  border-color: #FF00FF;
  inset: -16px;
  animation-delay: 0.3s;
  box-shadow:
    0 0 30px rgba(255, 0, 255, 0.6),
    inset 0 0 30px rgba(255, 0, 255, 0.2);
}

.outline-3 {
  border-color: #FFFF00;
  inset: -24px;
  animation-delay: 0.6s;
  box-shadow:
    0 0 40px rgba(255, 255, 0, 0.4),
    inset 0 0 40px rgba(255, 255, 0, 0.1);
}

@keyframes neonPulseOutline {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.6;
    transform: scale(1.02);
  }
}

/* Hero Title - HELLO */
.hero-title-main {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: bold;
  font-family: 'Press Start 2P', cursive;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  line-height: 1.8;
  color: #FFFF00;
  text-shadow:
    4px 4px 0px #000033,
    -3px -3px 0px rgba(255, 255, 0, 0.3),
    0 0 20px #FFFF00,
    0 0 40px #FFFF00,
    0 0 60px #FFFF00;
  animation: neonFlicker 1.5s infinite alternate, textFloat 3s ease-in-out infinite;
  position: relative;
  width: 100%;
  text-align: center;
  margin: 0;
}

@keyframes textFloat {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
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

.hero-title {
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: bold;
  font-family: 'Press Start 2P', cursive;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1.8;
  transition: all 0.1s steps(3);
  text-shadow:
    3px 3px 0px rgba(0, 0, 0, 0.8),
    -2px -2px 0px rgba(0, 0, 0, 0.8);
}

.hero-title:nth-child(odd) {
  color: #00FFFF;
  text-shadow:
    3px 3px 0px #000033,
    -2px -2px 0px rgba(0, 255, 255, 0.5),
    0 0 10px #00FFFF,
    0 0 20px #00FFFF;
  animation: neonFlicker 1.5s infinite alternate;
}

.hero-title:nth-child(even) {
  color: #FFFF00;
  text-shadow:
    3px 3px 0px #000033,
    -2px -2px 0px rgba(255, 255, 0, 0.5),
    0 0 10px #FFFF00,
    0 0 20px #FFFF00;
  animation: neonFlicker 2s infinite alternate;
}

@keyframes neonFlicker {

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    opacity: 1;
    filter: brightness(1);
  }

  20%,
  24%,
  55% {
    opacity: 0.8;
    filter: brightness(0.8);
  }
}

.hero-title:hover {
  transform: scale(1.02);
  filter: brightness(1.3);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  color: #00FFFF;
  animation: pixelBounce 1s steps(4) infinite;
  cursor: pointer;
  filter: drop-shadow(0 0 10px #00FFFF);
}

@keyframes pixelBounce {

  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(-16px);
  }
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* About Section */
.about-section {
  padding: 8rem 2rem;
  position: relative;
  background:
    repeating-linear-gradient(45deg,
      transparent,
      transparent 10px,
      rgba(0, 255, 255, 0.02) 10px,
      rgba(0, 255, 255, 0.02) 20px);
}

.about-card {
  background: #1a1a3e;
  border: 4px solid #00FFFF;
  border-radius: 0;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  box-shadow:
    8px 8px 0px #000033,
    0 0 30px rgba(0, 255, 255, 0.5),
    inset 0 0 30px rgba(0, 255, 255, 0.1);
  transition: transform 0.1s steps(2);
}

.about-card:hover {
  transform: translate(-4px, -4px);
  box-shadow:
    12px 12px 0px #000033,
    0 0 40px rgba(0, 255, 255, 0.8),
    inset 0 0 30px rgba(0, 255, 255, 0.2);
}

.card-glow {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background:
    repeating-linear-gradient(90deg,
      transparent 0px,
      transparent 2px,
      rgba(0, 255, 255, 0.1) 2px,
      rgba(0, 255, 255, 0.1) 4px);
  animation: pixelScroll 2s linear infinite;
}

@keyframes pixelScroll {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 4px 0;
  }
}

.about-title {
  font-size: 2rem;
  font-weight: bold;
  color: #FF00FF;
  font-family: 'Press Start 2P', cursive;
  margin-bottom: 2rem;
  position: relative;
  line-height: 1.8;
  text-shadow:
    3px 3px 0px #000033,
    0 0 10px #FF00FF;
}

.about-text {
  color: #F8F8FF;
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  position: relative;
  font-family: 'VT323', monospace;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);
}

.button-wrapper {
  display: flex;
  justify-content: flex-end;
}

/* Feature Sections */
.feature-section {
  padding: 4rem 2rem;
}

.feature-section.alt {
  background: rgba(26, 26, 62, 0.5);
  border-top: 4px solid #00FFFF;
  border-bottom: 4px solid #FF00FF;
}

.feature-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  background: #1a1a3e;
  border: 4px solid #FFFF00;
  border-radius: 0;
  overflow: hidden;
  box-shadow:
    8px 8px 0px #000033,
    0 0 30px rgba(255, 255, 0, 0.4);
  transition: all 0.1s steps(2);
}

.feature-card:hover {
  transform: translate(-4px, -4px);
  box-shadow:
    12px 12px 0px #000033,
    0 0 40px rgba(255, 255, 0, 0.6);
}

@media (min-width: 768px) {
  .feature-card {
    grid-template-columns: 1fr 1fr;
  }
}

.feature-image-wrapper {
  position: relative;
  overflow: hidden;
  height: 400px;
  background: #000033;
  border-right: 4px solid #00FFFF;
}

.feature-image {
  width: 130%;
  height: 130%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.1s steps(2);
  margin-left: -15%;
  margin-top: -15%;
  filter: contrast(1.3) saturate(1.5);
}

/* Target specifically the second image (illustration) */
.illustration-card .feature-image {
  object-position: right top;
  margin-top: -50px;
  margin-left: 0%;
}

.illustration-card .feature-image-wrapper {
  border-right: none;
  border-left: 4px solid #FF00FF;
}

.feature-card:hover .feature-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(0deg,
      transparent 0px,
      transparent 2px,
      rgba(0, 255, 255, 0.1) 2px,
      rgba(0, 255, 255, 0.1) 4px);
  opacity: 0;
  transition: opacity 0.1s steps(2);
  pointer-events: none;
}

.feature-card:hover .image-overlay {
  opacity: 1;
  animation: scanlineMove 0.5s linear infinite;
}

@keyframes scanlineMove {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 0 4px;
  }
}

.feature-content {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:
    repeating-linear-gradient(90deg,
      transparent 0px,
      transparent 2px,
      rgba(0, 0, 0, 0.1) 2px,
      rgba(0, 0, 0, 0.1) 4px);
}

.feature-badge {
  display: inline-block;
  background: #000033;
  color: #00FF00;
  padding: 0.5rem 1rem;
  border: 2px solid #00FF00;
  border-radius: 0;
  font-size: 0.75rem;
  font-weight: bold;
  font-family: 'Press Start 2P', cursive;
  margin-bottom: 1.5rem;
  width: fit-content;
  box-shadow:
    4px 4px 0px rgba(0, 0, 0, 0.5),
    0 0 10px rgba(0, 255, 0, 0.5);
  text-transform: uppercase;
  line-height: 1.8;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #FF1493;
  font-family: 'Press Start 2P', cursive;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  text-shadow:
    3px 3px 0px #000033,
    0 0 10px #FF1493;
}

.feature-text {
  color: #F8F8FF;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
}

.feature-subtext {
  color: #00FFFF;
  font-size: 1rem;
  line-height: 1.8;
  font-style: italic;
  padding-left: 1rem;
  border-left: 4px solid #00FFFF;
  font-family: 'VT323', monospace;
  background: rgba(0, 255, 255, 0.05);
  padding: 0.5rem 1rem;
}

/* CTA Section */
.cta-section {
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
  background:
    repeating-linear-gradient(45deg,
      #000033 0px,
      #000033 10px,
      #0a0a4a 10px,
      #0a0a4a 20px);
  border-top: 4px solid #00FFFF;
  border-bottom: 4px solid #FF00FF;
}

.cta-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.cta-content {
  text-align: center;
  position: relative;
  z-index: 10;
  background: rgba(26, 26, 62, 0.8);
  padding: 3rem;
  border: 4px solid #FFFF00;
  box-shadow:
    8px 8px 0px #000033,
    0 0 40px rgba(255, 255, 0, 0.6);
}

.cta-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: #FF00FF;
  font-weight: bold;
  font-family: 'Press Start 2P', cursive;
  margin-bottom: 2rem;
  line-height: 1.8;
  text-shadow:
    3px 3px 0px #000033,
    0 0 10px #FF00FF;
  animation: neonPulse 2s ease-in-out infinite;
}

@keyframes neonPulse {

  0%,
  100% {
    text-shadow:
      3px 3px 0px #000033,
      0 0 10px #FF00FF,
      0 0 20px #FF00FF;
  }

  50% {
    text-shadow:
      3px 3px 0px #000033,
      0 0 20px #FF00FF,
      0 0 40px #FF00FF,
      0 0 60px #FF00FF;
  }
}

.cta-subtitle {
  color: #F8F8FF;
  font-size: 1.125rem;
  margin-bottom: 3rem;
  font-family: 'VT323', monospace;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);
}

.cta-decoration {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background:
    repeating-linear-gradient(0deg,
      transparent 0px,
      transparent 8px,
      rgba(255, 0, 255, 0.05) 8px,
      rgba(255, 0, 255, 0.05) 16px);
  border-radius: 0;
  animation: pixelRotate 4s steps(8) infinite;
}

@keyframes pixelRotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Buttons */
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #000033;
  color: #00FFFF;
  padding: 0.875rem 2rem;
  border-radius: 0;
  font-weight: bold;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.75rem;
  border: 3px solid #00FFFF;
  transition: all 0.1s steps(2);
  text-decoration: none;
  box-shadow:
    4px 4px 0px rgba(0, 0, 0, 0.8),
    0 0 10px rgba(0, 255, 255, 0.5);
  line-height: 1.8;
  text-transform: uppercase;
}

.cta-button:hover {
  background: #00FFFF;
  color: #000033;
  transform: translate(-2px, -2px);
  box-shadow:
    6px 6px 0px rgba(0, 0, 0, 0.8),
    0 0 20px rgba(0, 255, 255, 0.8);
}

.button-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.1s steps(2);
}

.group:hover .button-arrow {
  transform: translateX(4px);
  animation: arrowBlink 0.5s steps(2) infinite;
}

@keyframes arrowBlink {

  0%,
  49% {
    opacity: 1;
  }

  50%,
  100% {
    opacity: 0.5;
  }
}

.cta-button-large {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: #000033;
  color: #FFFF00;
  padding: 1.25rem 2.5rem;
  border-radius: 0;
  font-weight: bold;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.875rem;
  border: 4px solid #FFFF00;
  transition: all 0.1s steps(2);
  text-decoration: none;
  box-shadow:
    8px 8px 0px rgba(0, 0, 0, 0.8),
    0 0 20px rgba(255, 255, 0, 0.6);
  position: relative;
  overflow: hidden;
  line-height: 1.8;
  text-transform: uppercase;
}

.cta-button-large::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background:
    repeating-linear-gradient(90deg,
      transparent 0px,
      transparent 4px,
      rgba(255, 255, 255, 0.2) 4px,
      rgba(255, 255, 255, 0.2) 8px);
  transition: left 0.3s steps(8);
}

.cta-button-large:hover::before {
  left: 100%;
}

.cta-button-large:hover {
  background: #FFFF00;
  color: #000033;
  transform: translate(-4px, -4px);
  box-shadow:
    12px 12px 0px rgba(0, 0, 0, 0.8),
    0 0 30px rgba(255, 255, 0, 0.8);
}

.button-arrow-large {
  width: 20px;
  height: 20px;
  transition: transform 0.1s steps(2);
}

.group:hover .button-arrow-large {
  transform: translateX(8px);
  animation: arrowBlink 0.5s steps(2) infinite;
}

/* Animations - Removed smooth animations, using step animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(32px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(-64px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(64px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(64px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.4s steps(4);
}

.animate-slide-right {
  animation: slideRight 0.4s steps(4);
}

.animate-slide-left {
  animation: slideLeft 0.4s steps(4);
}

.animate-slide-up {
  animation: slideUp 0.5s steps(4);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    min-height: 520px;
  }

  .hero-content {
    padding: 2rem 1rem;
  }

  .hero-text-wrapper {
    gap: 1.5rem;
  }

  .scroll-indicator {
    bottom: 1rem;
    width: 32px;
    height: 32px;
  }

  .container {
    padding: 0 1rem;
  }

  .about-section {
    padding: 4rem 1rem;
  }

  .button-wrapper {
    justify-content: center;
  }

  .feature-section {
    padding: 3rem 1rem;
  }

  .feature-image-wrapper {
    height: 300px;
    border-right: none;
    border-bottom: 4px solid #00FFFF;
  }

  .illustration-card .feature-image-wrapper {
    border-left: none;
    border-bottom: 4px solid #FF00FF;
  }

  .feature-image {
    width: 120%;
    height: 120%;
    margin-left: -10%;
    margin-top: -10%;
  }

  .feature-content {
    padding: 2rem;
  }

  .about-card {
    padding: 2rem;
  }

  .illustration-card .feature-content {
    order: 2;
  }

  .illustration-card .feature-image-wrapper {
    order: 1;
  }

  .hero-title {
    font-size: 1rem;
  }

  .hero-title-main {
    font-size: 2rem;
    letter-spacing: 0.1em;
  }

  .hero-title-main::before,
  .hero-title-main::after {
    display: none;
  }

  .hero-image-container {
    width: clamp(150px, 50vw, 250px);
    height: clamp(150px, 50vw, 250px);
  }

  .outline-1 {
    inset: -4px;
  }

  .outline-2 {
    inset: -8px;
  }

  .outline-3 {
    inset: -12px;
  }

  .feature-title {
    font-size: 1rem;
  }

  .feature-text {
    font-size: 1rem;
  }

  .feature-subtext {
    font-size: 0.95rem;
  }

  .about-title {
    font-size: 1.2rem;
  }

  .cta-title {
    font-size: 1.2rem;
  }

  .cta-section {
    padding: 5rem 1rem;
  }

  .cta-content {
    padding: 2rem 1.5rem;
  }

  .cta-subtitle {
    font-size: 1rem;
  }

  .cta-button-large {
    font-size: 0.7rem;
    padding: 1rem 1.5rem;
  }
}

/* Add retro loading effect */
@keyframes pixelLoad {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
