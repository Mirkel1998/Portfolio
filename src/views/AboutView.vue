<script setup>
import { ref } from 'vue';

const skills = ref([
  'HTML',
  'CSS',
  'JS',
  'VUE',
  'FIGMA',
  'PHOTOSHOP',
  'ILLUSTRATOR',
  'PREMIER PRO',
  'INDESIGN',
  '3D',
  'FOTO',
  'VIDEO'
]);
</script>

<template>
  <div class="cv-container">
    <!-- CV Header -->
    <div class="cv-header">
      <div class="header-decoration"></div>
      <h1 class="cv-title">// CHARACTER SHEET //</h1>
      <div class="header-decoration"></div>
    </div>

    <!-- Main CV Content -->
    <div class="cv-content">
      <!-- Profile Card -->
      <div class="profile-section">
        <div class="profile-card">
          <div class="profile-image-wrapper">
            <img src="../components/images/mini_me.png" alt="Profile" class="profile-image">
            <div class="pixel-frame"></div>
          </div>
          <div class="profile-info">
            <h2 class="profile-name">MIKKEL PEDERSEN</h2>
            <p class="profile-title">MULTIMEDIA DESIGNER</p>
            <div class="profile-stats">
              <div class="stat-item">
                <span class="stat-label">LVL</span>
                <span class="stat-value">69</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">EXP</span>
                <span class="stat-value">IDK</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">HP</span>
                <div class="hp-bar">
                  <div class="hp-fill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Download Button -->
        <a href="/downloads/cv.pdf" download="Mikkel_CV.pdf" class="download-btn">
          <span class="btn-icon">▼</span> DOWNLOAD CV.PDF
        </a>
      </div>

      <!-- Right Column -->
      <div class="details-section">
        <!-- About Me Box -->
        <div class="cv-box">
          <h3 class="box-title">
            <span class="title-icon">►</span> ABOUT ME
          </h3>
          <p class="box-content">
            Creative multimedia designer with a passion for combining logic, creativity, and personality.
            Specializing in web development, photography, and digital illustration.
            Always eager to learn new technologies and push creative boundaries.
          </p>
        </div>

        <!-- Skills Box -->
        <div class="cv-box">
          <h3 class="box-title">
            <span class="title-icon">►</span> SKILLS
          </h3>
          <div class="skills-grid">
            <div v-for="skill in skills" :key="skill" class="skill-tag">
              <span class="skill-bullet">►</span>
              <span class="skill-name">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

.cv-container {
  min-height: 100vh;
  padding: 4rem 2rem;
  background:
    repeating-linear-gradient(0deg,
      transparent 0px,
      transparent 4px,
      rgba(0, 255, 255, 0.02) 4px,
      rgba(0, 255, 255, 0.02) 8px),
    linear-gradient(180deg, #000033 0%, #0a0a4a 100%);
}

/* Header */
.cv-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
}

.header-decoration {
  height: 4px;
  flex: 1;
  max-width: 200px;
  background: repeating-linear-gradient(90deg,
      #00FFFF 0px,
      #00FFFF 8px,
      transparent 8px,
      transparent 16px);
  animation: slideRight 1s steps(4) infinite;
}

.cv-title {
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: #00FFFF;
  text-shadow:
    3px 3px 0px #000033,
    0 0 10px #00FFFF,
    0 0 20px #00FFFF;
  white-space: nowrap;
  animation: neonFlicker 2s infinite alternate;
}

/* Main Content Grid */
.cv-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
}

@media (min-width: 1024px) {
  .cv-content {
    grid-template-columns: 400px 600px;
    justify-content: center;
  }
}

/* Profile Section */
.profile-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-card {
  background: #1a1a3e;
  border: 4px solid #00FFFF;
  padding: 2rem;
  box-shadow:
    8px 8px 0px #000033,
    0 0 30px rgba(0, 255, 255, 0.5);
  position: relative;
}

.profile-card::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 8px;
  right: -8px;
  bottom: -8px;
  border: 2px solid rgba(0, 255, 255, 0.3);
  pointer-events: none;
}

.profile-image-wrapper {
  position: relative;
  margin: 0 auto 1.5rem;
  width: 200px;
  height: 200px;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 10%;
  border: 4px solid #FF00FF;
  box-shadow:
    0 0 20px rgba(255, 0, 255, 0.6),
    inset 0 0 20px rgba(0, 0, 0, 0.5);
}

.pixel-frame {
  position: absolute;
  inset: -8px;
  border: 2px solid #00FFFF;
  pointer-events: none;
}

.pixel-frame::before,
.pixel-frame::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  background: #00FFFF;
  box-shadow: 0 0 10px #00FFFF;
}

.pixel-frame::before {
  top: -6px;
  left: -6px;
}

.pixel-frame::after {
  bottom: -6px;
  right: -6px;
}

.profile-info {
  text-align: center;
}

.profile-name {
  font-family: 'Press Start 2P', cursive;
  font-size: 1.2rem;
  color: #FFFF00;
  margin-bottom: 0.5rem;
  line-height: 1.8;
  text-shadow:
    3px 3px 0px #000033,
    0 0 10px #FFFF00;
}

.profile-title {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  color: #F8F8FF;
  margin-bottom: 1.5rem;
}

.profile-stats {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid #00FFFF;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.stat-label {
  font-family: 'Press Start 2P', cursive;
  font-size: 0.6rem;
  color: #00FFFF;
}

.stat-value {
  font-family: 'Press Start 2P', cursive;
  font-size: 0.9rem;
  color: #FFFF00;
  text-shadow: 0 0 5px #FFFF00;
}

.hp-bar {
  width: 80px;
  height: 12px;
  background: #000033;
  border: 2px solid #00FF00;
  position: relative;
  overflow: hidden;
}

.hp-fill {
  height: 100%;
  width: 100%;
  background: repeating-linear-gradient(90deg,
      #00FF00 0px,
      #00FF00 4px,
      #00DD00 4px,
      #00DD00 8px);
  animation: hpPulse 1s steps(2) infinite;
}

@keyframes hpPulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.8;
  }
}

/* Download Button */
.download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #000033;
  color: #00FF00;
  padding: 1rem 2rem;
  border: 4px solid #00FF00;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.75rem;
  text-decoration: none;
  box-shadow:
    8px 8px 0px #000033,
    0 0 20px rgba(0, 255, 0, 0.5);
  transition: all 0.1s steps(2);
  line-height: 1.8;
}

.download-btn:hover {
  background: #00FF00;
  color: #000033;
  transform: translate(-4px, -4px);
  box-shadow:
    12px 12px 0px #000033,
    0 0 30px rgba(0, 255, 0, 0.8);
}

.btn-icon {
  animation: blink 1s steps(2) infinite;
}

/* CV Boxes */
.cv-box {
  background: #1a1a3e;
  border: 4px solid #FF00FF;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow:
    8px 8px 0px #000033,
    0 0 20px rgba(255, 0, 255, 0.3);
  position: relative;
}

.cv-box:nth-child(even) {
  border-color: #FFFF00;
  box-shadow:
    8px 8px 0px #000033,
    0 0 20px rgba(255, 255, 0, 0.3);
}

.box-title {
  font-family: 'Press Start 2P', cursive;
  font-size: 0.85rem;
  color: #00FFFF;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.title-icon {
  color: #FF00FF;
  animation: blink 1.5s steps(2) infinite;
}

.box-content {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  color: #F8F8FF;
  line-height: 1.8;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;
}

.skill-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid #00FFFF;
  transition: all 0.1s steps(2);
}

.skill-tag:hover {
  background: rgba(0, 255, 255, 0.1);
  transform: translateX(4px);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
}

.skill-bullet {
  font-size: 0.8rem;
  color: #FFFF00;
}

.skill-name {
  font-family: 'Press Start 2P', cursive;
  font-size: 0.65rem;
  color: #F8F8FF;
  line-height: 1.8;
}

/* Animations */
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

@keyframes slideRight {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 16px 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .cv-title {
    font-size: 0.7rem;
  }

  .box-title {
    font-size: 0.7rem;
  }

  .profile-name {
    font-size: 0.9rem;
  }

  .download-btn {
    font-size: 0.6rem;
    padding: 0.75rem 1.5rem;
  }
}
</style>