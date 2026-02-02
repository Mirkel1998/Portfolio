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
          <h1 class="hero-title animate-slide-right" style="animation-delay: 0s">LOGIC</h1>
          <h2 class="hero-title animate-slide-left" style="animation-delay: 0.2s">CREATIVITY</h2>
          <h3 class="hero-title animate-slide-right" style="animation-delay: 0.4s">AND PERSONALITY</h3>
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
          <div class="feature-badge">Winner - EASV Contest</div>
          <h5 class="feature-title">Photography</h5>
          <p class="feature-text">
            I love taking photos because it allows me to capture moments that might otherwise be forgotten. Through
            photography, I can freeze time, document emotions, and tell stories without words. I enjoy the way light,
            composition, and perspective come together to create something unique.
          </p>
          <p class="feature-subtext">
            This photograph was the winner for a contest we had 1st semester at EASV. Each student had free reign
            over the theme and feeling for the photograph. The only restriction was that we could only use simple
            editing tools like cropping and brightness.
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
          <div class="feature-badge">South Park Style</div>
          <h5 class="feature-title">Illustrating</h5>
          <p class="feature-text">
            I love art and illustrating because it allows me to express emotions and ideas that words can't capture.
            Through drawing and painting, I can bring my imagination to life, create new worlds, and also it's just
            good old fun!
          </p>
          <p class="feature-subtext">
            This illustration was made for an assignment where we had to create ourselves as some type of character.
            I chose to make myself in South Park style. The assignment was meant for us to learn simple tools in
            Illustrator.
          </p>
        </div>
        <div class="feature-image-wrapper order-2">
          <img src="../components/images/portfolioFront2.jpg" alt="Illustration" class="feature-image">
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
/* Hero Section */
.hero-wrapper {
  position: relative;
  overflow: hidden;
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
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
      rgba(168, 85, 247, 0.1) 0%,
      rgba(0, 0, 0, 0.7) 50%,
      rgba(168, 85, 247, 0.1) 100%);
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 2rem;
}

.hero-text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: bold;
  font-family: var(--font-title);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.hero-title:nth-child(odd) {
  color: var(--color-purpleRain);
  text-shadow: 0 0 30px rgba(168, 85, 247, 0.5);
}

.hero-title:nth-child(even) {
  color: var(--color-pinkyWhite);
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}

.hero-title:hover {
  transform: scale(1.05);
  filter: brightness(1.2);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  color: var(--color-purpleRain);
  animation: bounce 2s infinite;
  cursor: pointer;
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
}

.about-card {
  background: var(--color-darkGray);
  border-radius: 24px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.about-card:hover {
  transform: translateY(-10px);
}

.card-glow {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
}

.about-title {
  font-size: 3rem;
  font-weight: bold;
  color: var(--color-pinkyWhite);
  font-family: var(--font-title);
  margin-bottom: 1.5rem;
  position: relative;
}

.about-text {
  color: var(--color-pinkyWhite);
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  position: relative;
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
  background: rgba(42, 42, 42, 0.3);
}

.feature-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  background: var(--color-darkGray);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 70px rgba(168, 85, 247, 0.2);
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
  background: var(--color-darkGray);
}

.feature-image {
  width: 130%;
  height: 130%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
  margin-left: -15%;
  margin-top: -15%;
}

/* Target specifically the second image (illustration) */
.illustration-card .feature-image {
  object-position: right top;
  /* Move to right and top */
  margin-top: -50px;
  /* Remove negative top margin */
  margin-left: 0%;
  /* Move more to the right */
}

.feature-card:hover .feature-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover .image-overlay {
  opacity: 1;
}

.feature-content {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.feature-badge {
  display: inline-block;
  background: rgba(168, 85, 247, 0.2);
  color: var(--color-pinkyWhite);
  /* Changed from var(--color-purpleRain) to white */
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
  width: fit-content;
  border: 1px solid var(--color-purpleRain);
}

.feature-title {
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-purpleRain);
  font-family: var(--font-title);
  margin-bottom: 1rem;
}

.feature-text {
  color: var(--color-pinkyWhite);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.feature-subtext {
  color: rgba(245, 245, 245, 0.7);
  font-size: 0.95rem;
  line-height: 1.6;
  font-style: italic;
  padding-left: 1rem;
  border-left: 3px solid var(--color-purpleRain);
}

/* CTA Section */
.cta-section {
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
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
}

.cta-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--color-purpleRain);
  font-weight: bold;
  font-family: var(--font-title);
  margin-bottom: 1rem;
  animation: pulse 3s ease-in-out infinite;
}

.cta-subtitle {
  color: var(--color-pinkyWhite);
  font-size: 1.25rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.cta-decoration {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse-decoration 4s ease-in-out infinite;
}

/* Buttons */
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-darkGray);
  color: var(--color-pinkyWhite);
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: bold;
  font-family: var(--font-title);
  border: 2px solid var(--color-purpleRain);
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);
}

.cta-button:hover {
  background: var(--color-hooverPink);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(168, 85, 247, 0.5);
}

.button-arrow {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.group:hover .button-arrow {
  transform: translateX(5px);
}

.cta-button-large {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, var(--color-purpleRain), var(--color-hooverPink));
  color: white;
  padding: 1.25rem 3rem;
  border-radius: 50px;
  font-weight: bold;
  font-family: var(--font-title);
  font-size: 1.25rem;
  border: none;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(168, 85, 247, 0.4);
  position: relative;
  overflow: hidden;
}

.cta-button-large::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.cta-button-large:hover::before {
  left: 100%;
}

.cta-button-large:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 40px rgba(168, 85, 247, 0.6);
}

.button-arrow-large {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.group:hover .button-arrow-large {
  transform: translateX(8px);
}

/* Animations */
@keyframes bounce {

  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(-20px);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.8;
  }
}

@keyframes pulse-decoration {

  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.3;
  }

  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.5;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.animate-slide-right {
  animation: slideRight 0.8s ease-out;
}

.animate-slide-left {
  animation: slideLeft 0.8s ease-out;
}

/* Responsive */
@media (max-width: 768px) {
  .feature-image-wrapper {
    height: 300px;
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
}
</style>
