<script setup>
import FooterView from '../components/FooterView.vue'

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import { ref } from 'vue'

import mini_me_neon from '../components/images/miniMe.jpg'

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
  <!-- Hero Header -->
  <section class="header-section">
    <div class="header-wrapper">
      <h1 class="header-title">
        // PROJECTS //
      </h1>
      <p class="header-description">
        A collection of my work and experiments.
      </p>
    </div>
  </section>

  <section class="projects-section">
    <!-- First Carousel Section -->
    <div class="project-container">
      <div class="gameboy-frame">
        <div class="gameboy-top">
          <div class="brand-text">Not A GameBoy</div>
          <div class="power-led"></div>
        </div>
        <div class="screen-bezel">
          <div class="screen-glass">
            <vueper-slides class="retro-slider">
              <vueper-slide v-for="(slide, i) in slides1" :key="i" :image="slide.image">
              </vueper-slide>
            </vueper-slides>
          </div>
        </div>
        <div class="gameboy-controls">
          <div class="dpad">
            <div class="dpad-center"></div>
          </div>
          <div class="buttons">
            <div class="button-a">A</div>
            <div class="button-b">B</div>
          </div>
        </div>
      </div>
      <div class="project-info">
        <div class="info-grid">
          <div class="info-column">
            <p><span class="info-label">PROJECT:</span> Semester exam</p>
            <p><span class="info-label">DURATION:</span> 5 weeks</p>
            <p><span class="info-label">PERIOD:</span> November - December 2024</p>
            <p><span class="info-label">TEAM:</span> 4 members</p>
            <p><span class="info-label">MY ROLE:</span> Concept design, brand design, graphic design, UX
              research, website front-end development</p>
          </div>
          <div class="info-column">
            <p><span class="info-label">METHODS:</span> Desk research, survey, interviews, user personas,
              empathy/affinity/journey maps</p>
            <p><span class="info-label">TOOLS:</span> Photoshop, Illustrator, InDesign, Figma, HTML, CSS, Github</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Second Carousel Section -->
    <div class="project-container">
      <div class="gameboy-frame">
        <div class="gameboy-top">
          <div class="brand-text">Not A GameBoy</div>
          <div class="power-led"></div>
        </div>
        <div class="screen-bezel">
          <div class="screen-glass">
            <vueper-slides class="retro-slider">
              <vueper-slide v-for="(slide, i) in slides2" :key="i" :image="slide.image">
              </vueper-slide>
            </vueper-slides>
          </div>
        </div>
        <div class="gameboy-controls">
          <div class="dpad">
            <div class="dpad-center"></div>
          </div>
          <div class="buttons">
            <div class="button-a">A</div>
            <div class="button-b">B</div>
          </div>
        </div>
      </div>
      <div class="project-info">
        <div class="info-grid">
          <div class="info-column">
            <p><span class="info-label">PROJECT:</span> Design and time managment</p>
            <p><span class="info-label">DURATION:</span> 1 week</p>
            <p><span class="info-label">PERIOD:</span> September 2024</p>
            <p><span class="info-label">TEAM:</span> 3 members</p>
            <p><span class="info-label">MY ROLE:</span> UI/UX design, logo design</p>
          </div>
          <div class="info-column">
            <p><span class="info-label">METHODS:</span> Research Wireframing, prototyping, usability testing, WBS</p>
            <p><span class="info-label">TOOLS:</span> Figma, illustrator, photoshop, notion</p>
          </div>
        </div>
      </div>
    </div>

    <div class="neon-corner">
      <a class="neon-corner-link" href="https://avj-exam-project-2025.web.app/" target="_blank"
        rel="noopener noreferrer">
        <span class="neon-avatar-frame">
          <img :src="mini_me_neon" alt="Mini Me" class="neon-avatar" />
        </span>
        <span class="neon-text">psssst i also made som shitty games</span>
      </a>
    </div>
  </section>
</template>



<style scoped>
/* Header Section */
.header-section {
  padding: 3rem 1rem;
  text-align: center;
}

.header-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

.header-title {
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: #00FFFF;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.8;
  text-shadow:
    3px 3px 0px #000033,
    0 0 10px #00FFFF,
    0 0 20px #00FFFF;
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
  }

  20%,
  24%,
  55% {
    opacity: 0.8;
  }
}

.header-description {
  font-family: 'VT323', monospace;
  color: #F8F8FF;
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.6;
}

.projects-section {
  min-height: 100vh;
  padding: 4rem 2rem 20rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  align-items: center;
  position: relative;
}

/* Game Boy Frame */
.project-container {
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.gameboy-frame {
  background: linear-gradient(180deg, #e8e8e8 0%, #c0c0c0 100%);
  border: 4px solid #2a2a2a;
  border-radius: 12px 12px 30px 30px;
  padding: 2rem 1.5rem;
  box-shadow:
    inset 0 2px 10px rgba(255, 255, 255, 0.5),
    inset 0 -2px 10px rgba(0, 0, 0, 0.3),
    8px 8px 0px #000033,
    0 0 30px rgba(0, 0, 0, 0.5);
  position: relative;
}

.gameboy-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0 0.5rem;
}

.brand-text {
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  color: #4a4a4a;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
}

.power-led {
  width: 12px;
  height: 12px;
  background: #ff0000;
  border-radius: 50%;
  box-shadow:
    inset 0 2px 4px rgba(0, 0, 0, 0.5),
    0 0 10px rgba(255, 0, 0, 0.8);
  animation: powerBlink 2s ease-in-out infinite;
}

@keyframes powerBlink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }
}

/* Screen Bezel */
.screen-bezel {
  background: linear-gradient(135deg, #3a3a3a 0%, #1a1a1a 100%);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow:
    inset 0 4px 8px rgba(0, 0, 0, 0.8),
    inset 0 -2px 4px rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
}

.screen-glass {
  background: #0f380f;
  border: 3px solid #2a2a2a;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-shadow:
    inset 0 0 20px rgba(0, 0, 0, 0.5),
    0 2px 4px rgba(0, 0, 0, 0.3);
}

.screen-glass::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    repeating-linear-gradient(0deg,
      transparent 0px,
      transparent 2px,
      rgba(0, 0, 0, 0.1) 2px,
      rgba(0, 0, 0, 0.1) 4px);
  pointer-events: none;
  z-index: 10;
}

/* Controls */
.gameboy-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-top: 1rem;
}

.dpad {
  width: 80px;
  height: 80px;
  position: relative;
  background: #2a2a2a;
  clip-path: polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%,
      60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%);
  box-shadow:
    inset 0 -3px 6px rgba(0, 0, 0, 0.5),
    0 3px 6px rgba(0, 0, 0, 0.3);
}

.dpad-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: #1a1a1a;
  border-radius: 50%;
}

.buttons {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.button-a,
.button-b {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #8b0000;
  border: 3px solid #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
  box-shadow:
    inset 0 -3px 6px rgba(0, 0, 0, 0.5),
    inset 0 3px 4px rgba(255, 255, 255, 0.2),
    0 3px 6px rgba(0, 0, 0, 0.3);
}

/* Project Info */
.project-info {
  background: #1a1a3e;
  border: 4px solid #00FFFF;
  padding: 2rem;
  box-shadow:
    8px 8px 0px #000033,
    0 0 30px rgba(0, 255, 255, 0.3);
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.info-column {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  color: #F8F8FF;
  line-height: 1.6;
}

.info-label {
  font-family: 'Press Start 2P', cursive;
  font-size: 0.65rem;
  color: #00FFFF;
  margin-right: 0.5rem;
  text-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
}

/* Slider Customization */
.retro-slider :deep(.vueperslides__arrow) {
  background: #000033;
  border: 3px solid #00FFFF;
  color: #00FFFF;
  box-shadow:
    4px 4px 0px rgba(0, 0, 0, 0.5),
    0 0 10px rgba(0, 255, 255, 0.5);
  transition: all 0.1s steps(2);
}

.retro-slider :deep(.vueperslides__arrow:hover) {
  background: #00FFFF;
  color: #000033;
  transform: scale(1.1);
}

.retro-slider :deep(.vueperslides__bullets) {
  display: flex;
  gap: 0.5rem;
}

.retro-slider :deep(.vueperslides__bullet) {
  background: #2a2a2a;
  border: 2px solid #00FFFF;
  box-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
}

.retro-slider :deep(.vueperslides__bullet--active) {
  background: #00FFFF;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
}

.retro-slider :deep(.vueperslides__slide) {
  filter: contrast(1.1) saturate(0.9);
}

/* Neon Corner Link */
.neon-corner {
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 5;
}

.neon-corner-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.neon-avatar-frame {
  padding: 6px;
  border: 2px solid #00FFFF;
  border-radius: 12px;
  box-shadow:
    0 0 10px rgba(0, 255, 255, 0.6),
    0 0 18px rgba(255, 0, 255, 0.4);
  background: rgba(0, 0, 51, 0.6);
}

.neon-avatar {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  filter:
    brightness(1.15) contrast(1.2) drop-shadow(0 0 8px #00FFFF) drop-shadow(0 0 14px #FF00FF);
}

.neon-text {
  font-family: 'Press Start 2P', cursive;
  font-size: 0.55rem;
  color: #00FFFF;
  background: #000033;
  border: 2px solid #00FFFF;
  padding: 0.6rem 0.8rem;
  text-align: center;
  box-shadow:
    0 0 10px rgba(0, 255, 255, 0.5),
    0 0 20px rgba(255, 0, 255, 0.3);
}

.neon-corner-link:hover .neon-avatar-frame,
.neon-corner-link:hover .neon-text {
  box-shadow:
    0 0 15px rgba(0, 255, 255, 0.8),
    0 0 30px rgba(255, 0, 255, 0.6);
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .neon-corner {
    right: 1rem;
    bottom: 1rem;
  }

  .neon-avatar {
    width: 96px;
    height: 96px;
  }

  .neon-text {
    font-size: 0.5rem;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .header-section {
    padding: 2rem 0.75rem;
  }

  .header-wrapper {
    padding: 1rem 0;
  }

  .header-title {
    font-size: 0.8rem;
  }

  .header-description {
    font-size: 1rem;
  }

  .projects-section {
    padding: 3rem 1rem 12rem;
    gap: 4rem;
  }

  .project-container {
    gap: 1.5rem;
  }

  .gameboy-frame {
    padding: 1rem 0.75rem;
    border-radius: 8px 8px 20px 20px;
  }

  .gameboy-top {
    margin-bottom: 1rem;
  }

  .brand-text {
    font-size: 0.55rem;
  }

  .power-led {
    width: 10px;
    height: 10px;
  }

  .screen-bezel {
    padding: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .gameboy-controls {
    padding: 0 0.75rem;
  }

  .dpad {
    width: 60px;
    height: 60px;
  }

  .dpad-center {
    width: 16px;
    height: 16px;
  }

  .button-a,
  .button-b {
    width: 40px;
    height: 40px;
    font-size: 0.6rem;
  }

  .brand-text {
    font-size: 0.6rem;
  }

  .project-info {
    padding: 1rem;
  }

  .info-grid {
    gap: 1rem;
  }

  .info-column {
    font-size: 1rem;
  }

  .info-column p {
    word-break: break-word;
  }

  .info-label {
    font-size: 0.55rem;
    display: block;
    margin-bottom: 0.3rem;
  }

  .neon-corner {
    position: static;
    margin-top: 2rem;
  }

  .neon-corner-link {
    align-items: center;
  }

  .retro-slider :deep(.vueperslides__arrow) {
    width: 36px;
    height: 36px;
    border-width: 2px;
  }

  .retro-slider :deep(.vueperslides__arrow svg) {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 640px) {
  .projects-section {
    padding: 2rem 0.5rem 10rem;
  }

  .project-container {
    gap: 1rem;
  }

  .gameboy-frame {
    padding: 0.75rem 0.5rem;
    border-radius: 6px 6px 16px 16px;
  }

  .gameboy-top {
    margin-bottom: 0.75rem;
    padding: 0 0.25rem;
  }

  .brand-text {
    font-size: 0.45rem;
  }

  .power-led {
    width: 8px;
    height: 8px;
  }

  .screen-bezel {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 6px;
  }

  .screen-glass {
    border-width: 2px;
    border-radius: 3px;
  }

  .gameboy-controls {
    padding: 0;
    gap: 0.75rem;
  }

  .dpad {
    width: 54px;
    height: 54px;
  }

  .button-a,
  .button-b {
    width: 36px;
    height: 36px;
    font-size: 0.55rem;
    border-width: 2px;
  }

  .project-info {
    padding: 0.75rem;
  }

  .info-grid {
    gap: 0.75rem;
  }

  .info-column {
    font-size: 0.95rem;
    gap: 0.6rem;
  }

  .info-label {
    font-size: 0.5rem;
  }

  .retro-slider :deep(.vueperslides__arrow) {
    width: 32px;
    height: 32px;
    border-width: 2px;
  }

  .retro-slider :deep(.vueperslides__arrow svg) {
    width: 16px;
    height: 16px;
  }

  .retro-slider :deep(.vueperslides__bullets) {
    gap: 0.3rem;
  }

  .retro-slider :deep(.vueperslides__bullet) {
    width: 8px;
    height: 8px;
  }
}
</style>
