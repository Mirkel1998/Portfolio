<script setup>
import { ref } from 'vue';
import FooterView from '../components/FooterView.vue';

// Import images
import polaroid1 from '../components/images/polaroid1.jpg';
import polaroid2 from '../components/images/polaroid2.jpg';
import polaroid3 from '../components/images/polaroid3.jpg';
import forrestPolaroid1 from '../components/images/forrestPolaroid1.jpg';
import forrestPolaroid2 from '../components/images/forrestPolaroid2.jpg';
import forrestPolaroid3 from '../components/images/forrestPolaroid3.jpg';
import berryPolaroid1 from '../components/images/berryPolaroid1.jpg';
import berryPolaroid2 from '../components/images/berryPolaroid2.jpg';
import kittyPolaroid1 from '../components/images/kittyPolaroid1.jpg';
import darkPolaroid1 from '../components/images/darkPolaroid1.jpg';
import darkPolaroid2 from '../components/images/darkPolaroid2.jpg';
import darkPolaroid3 from '../components/images/darkPolaroid3.jpg';

const selectedImage = ref(null);
const images = ref([
    { src: polaroid1, title: 'Polaroid 1', category: 'Photography' },
    { src: polaroid2, title: 'Polaroid 2', category: 'Photography' },
    { src: polaroid3, title: 'Polaroid 3', category: 'Photography' },
    { src: forrestPolaroid1, title: 'Forest 1', category: 'Nature' },
    { src: forrestPolaroid3, title: 'Forest 3', category: 'Nature' },
    { src: forrestPolaroid2, title: 'Forest 2', category: 'Nature' },
    { src: berryPolaroid1, title: 'Berry 1', category: 'Nature' },
    { src: kittyPolaroid1, title: 'Kitty', category: 'Animals' },
    { src: berryPolaroid2, title: 'Berry 2', category: 'Nature' },
    { src: darkPolaroid1, title: 'Dark 1', category: 'Artistic' },
    { src: darkPolaroid2, title: 'Dark 2', category: 'Artistic' },
    { src: darkPolaroid3, title: 'Dark 3', category: 'Artistic' }
]);

const openLightbox = (image) => {
    selectedImage.value = image;
};

const closeLightbox = () => {
    selectedImage.value = null;
};
</script>

<template>
    <section class="artworks-section">
        <!-- Hero Header -->
        <div class="header-wrapper">
            <h1 class="text-purpleRain text-6xl md:text-7xl font-bold titleFont animate-fade-in-down">
                My Artworks
            </h1>
            <p class="text-pinkyWhite text-lg mt-4 animate-fade-in">
                A collection of my photography and artistic creations
            </p>
        </div>

        <!-- Masonry Grid Layout -->
        <div class="gallery-container">
            <div v-for="(image, index) in images" :key="index" class="gallery-item"
                :style="{ animationDelay: `${index * 0.1}s` }" @click="openLightbox(image)">
                <div class="image-wrapper">
                    <img :src="image.src" :alt="image.title" class="gallery-image">
                    <div class="image-overlay">
                        <div class="overlay-content">
                            <h3 class="image-title">{{ image.title }}</h3>
                            <span class="image-category">{{ image.category }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Lightbox Modal -->
        <transition name="fade">
            <div v-if="selectedImage" class="lightbox" @click="closeLightbox">
                <button class="close-button" @click.stop="closeLightbox">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div class="lightbox-content" @click.stop>
                    <img :src="selectedImage.src" :alt="selectedImage.title" class="lightbox-image">
                    <div class="lightbox-info">
                        <h2 class="text-pinkyWhite text-2xl font-bold">{{ selectedImage.title }}</h2>
                        <p class="text-purpleRain">{{ selectedImage.category }}</p>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<style scoped>
.artworks-section {
    min-height: 100vh;
    padding: 3rem 1rem;
}

.header-wrapper {
    text-align: center;
    margin-bottom: 4rem;
    padding: 2rem 0;
}

/* Gallery Grid - Masonry Style */
.gallery-container {
    max-width: 1400px;
    margin: 0 auto;
    column-count: 1;
    column-gap: 1.5rem;
    padding: 0 1rem;
}

@media (min-width: 640px) {
    .gallery-container {
        column-count: 2;
    }
}

@media (min-width: 1024px) {
    .gallery-container {
        column-count: 3;
    }
}

.gallery-item {
    break-inside: avoid;
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
    cursor: pointer;
}

.image-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-wrapper:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 24px rgba(168, 85, 247, 0.3);
}

.gallery-image {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
}

.image-wrapper:hover .gallery-image {
    transform: scale(1.1);
}

/* Image Overlay */
.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: flex-end;
    padding: 1.5rem;
}

.image-wrapper:hover .image-overlay {
    opacity: 1;
}

.overlay-content {
    color: white;
    transform: translateY(20px);
    transition: transform 0.3s ease;
}

.image-wrapper:hover .overlay-content {
    transform: translateY(0);
}

.image-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
}

.image-category {
    display: inline-block;
    background-color: rgba(168, 85, 247, 0.8);
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.875rem;
}

/* Lightbox */
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.95);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 2rem;
}

.close-button {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: rgba(168, 85, 247, 0.8);
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1001;
}

.close-button:hover {
    background: rgba(236, 72, 153, 0.9);
    transform: rotate(90deg);
}

.close-button svg {
    width: 24px;
    height: 24px;
    color: white;
}

.lightbox-content {
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.lightbox-image {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(168, 85, 247, 0.3);
}

.lightbox-info {
    text-align: center;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-down {
    animation: fadeInDown 0.8s ease-out;
}

.animate-fade-in {
    animation: fadeInUp 1s ease-out 0.3s both;
}

/* Fade transition for lightbox */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>