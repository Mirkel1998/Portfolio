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
import drone1 from '../components/images/drone1.jpg';
import drone2 from '../components/images/drone2.jpg';
import drone3 from '../components/images/drone3.png';
import drone4 from '../components/images/drone4.png';

const selectedImage = ref(null);
const images = ref([
    { src: darkPolaroid2, title: 'They are coming', category: 'Artistic' },
    { src: forrestPolaroid1, title: 'Turning a leaf', category: 'Nature' },
    { src: polaroid2, title: 'Rotting away', category: 'Photography' },
    { src: berryPolaroid1, title: 'Before', category: 'Nature' },
    { src: darkPolaroid3, title: 'Staring   ', category: 'Artistic' },
    { src: polaroid1, title: 'Transparent', category: 'Photography' },
    { src: kittyPolaroid1, title: 'Kitty', category: 'Animals' },
    { src: forrestPolaroid3, title: 'Tunnel Vision', category: 'Nature' },
    { src: berryPolaroid2, title: 'Stages of life', category: 'Nature' },
    { src: polaroid3, title: 'Embers', category: 'Photography' },
    { src: forrestPolaroid2, title: 'Shiny Greens', category: 'Nature' },
    { src: darkPolaroid1, title: 'Watching', category: 'Artistic' }
]);

const featuredImages = ref([
    { src: drone1, title: 'Twilight', category: 'Drone' },
    { src: drone2, title: 'Another Perspective', category: 'Drone' },
    { src: drone3, title: 'SunSet', category: 'Drone' },
    { src: drone4, title: 'DayTime', category: 'Drone' }
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
                Photos
            </h1>
            <p class="text-pinkyWhite text-lg mt-4 animate-fade-in">
                Polaroids and pixels - who would have thunk it? <br>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="featured-gallery">
            <div v-for="(image, index) in featuredImages" :key="`featured-${index}`" class="featured-card"
                @click="openLightbox(image)">
                <div class="featured-image-frame">
                    <img :src="image.src" :alt="image.title" class="featured-image">
                    <div class="featured-overlay">
                        <div class="featured-content">
                            <h3 class="featured-title">{{ image.title }}</h3>
                            <span class="featured-tag">{{ image.category }}</span>
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
    /* CRT TV/Console Frame */
    border: 12px solid #2a2a2a;
    border-radius: 0;
    box-shadow:
        inset 0 0 30px rgba(0, 0, 0, 0.8),
        inset 0 0 50px rgba(0, 0, 0, 0.6),
        0 0 25px rgba(0, 255, 255, 0.3),
        0 10px 0 #1a1a1a,
        0 15px 0 #0a0a0a,
        8px 8px 0px #000033;
    transition: transform 0.1s steps(2), box-shadow 0.1s steps(2);
    background: #000033;
}

.image-wrapper::before {
    content: '';
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 12px;
    background: linear-gradient(90deg,
            #ff0000 0%,
            #ff0000 16%,
            #00ff00 16%,
            #00ff00 32%,
            #0000ff 32%,
            #0000ff 48%,
            #ffff00 48%,
            #ffff00 64%,
            #ff00ff 64%,
            #ff00ff 80%,
            #00ffff 80%,
            #00ffff 100%);
    border: 2px solid #1a1a1a;
    border-radius: 2px;
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.image-wrapper::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    height: 20px;
    background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
    border: 3px solid #2a2a2a;
    border-radius: 0 0 10px 10px;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.9);
}

.image-wrapper:hover {
    transform: translate(-4px, -4px);
    box-shadow:
        inset 0 0 30px rgba(0, 0, 0, 0.8),
        inset 0 0 50px rgba(0, 0, 0, 0.6),
        0 0 40px rgba(0, 255, 255, 0.5),
        0 0 60px rgba(255, 0, 255, 0.3),
        0 10px 0 #1a1a1a,
        0 15px 0 #0a0a0a,
        12px 12px 0px #000033;
}

.gallery-image {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.1s steps(2);
    filter: contrast(1.2) saturate(1.3);
}

.image-wrapper:hover .gallery-image {
    transform: scale(1.05);
}

.gallery-image::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
        repeating-linear-gradient(0deg,
            transparent 0px,
            transparent 2px,
            rgba(0, 255, 255, 0.05) 2px,
            rgba(0, 255, 255, 0.05) 4px);
    pointer-events: none;
}

/* Featured Strip */
.featured-gallery {
    max-width: 1400px;
    margin: 3rem auto 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
    padding: 0 1rem;
}

.featured-card {
    cursor: pointer;
    opacity: 0;
    animation: fadeInUp 0.7s ease-out 0.2s forwards;
}

.featured-image-frame {
    position: relative;
    overflow: hidden;
    border: 10px solid #1a1a1a;
    background: #000033;
    box-shadow:
        inset 0 0 20px rgba(0, 0, 0, 0.7),
        0 0 18px rgba(0, 255, 255, 0.25),
        6px 6px 0px #000033;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.featured-image-frame:hover {
    transform: translate(-3px, -3px);
    box-shadow:
        inset 0 0 26px rgba(0, 0, 0, 0.75),
        0 0 26px rgba(0, 255, 255, 0.4),
        8px 8px 0px #000033;
}

.featured-image {
    width: 100%;
    display: block;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    filter: contrast(1.15) saturate(1.2);
    transition: transform 0.3s ease;
}

.featured-image-frame:hover .featured-image {
    transform: scale(1.03);
}

.featured-overlay {
    position: absolute;
    inset: 0;
    background:
        linear-gradient(180deg, rgba(0, 0, 51, 0.15) 0%, rgba(0, 0, 51, 0.9) 100%),
        repeating-linear-gradient(0deg,
            transparent 0px,
            transparent 3px,
            rgba(0, 255, 255, 0.07) 3px,
            rgba(0, 255, 255, 0.07) 6px);
    display: flex;
    align-items: flex-end;
    padding: 1.25rem;
    opacity: 0.9;
    transition: opacity 0.2s ease;
}

.featured-image-frame:hover .featured-overlay {
    opacity: 1;
}

.featured-content {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.featured-title {
    font-family: 'Press Start 2P', cursive;
    color: #00FFFF;
    font-size: 1rem;
    text-shadow:
        2px 2px 0px #000033,
        0 0 8px rgba(0, 255, 255, 0.8);
    line-height: 1.6;
}

.featured-tag {
    display: inline-block;
    font-family: 'Press Start 2P', cursive;
    font-size: 0.65rem;
    color: #FFFF00;
    border: 2px solid #FFFF00;
    padding: 0.3rem 0.6rem;
    background: rgba(0, 0, 51, 0.9);
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.4);
    width: fit-content;
    text-transform: uppercase;
}

/* Image Overlay */
.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
        repeating-linear-gradient(0deg,
            transparent 0px,
            transparent 2px,
            rgba(0, 255, 255, 0.1) 2px,
            rgba(0, 255, 255, 0.1) 4px),
        linear-gradient(to top,
            rgba(0, 0, 51, 0.95) 0%,
            rgba(0, 0, 51, 0.6) 50%,
            transparent 100%);
    opacity: 0;
    transition: opacity 0.1s steps(2);
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
    font-family: 'Press Start 2P', cursive;
    color: #00FFFF;
    text-shadow:
        2px 2px 0px #000033,
        0 0 10px #00FFFF;
    line-height: 1.8;
}

.image-category {
    display: inline-block;
    background-color: #000033;
    color: #FFFF00;
    padding: 0.4rem 0.8rem;
    border: 2px solid #FFFF00;
    border-radius: 0;
    font-size: 0.75rem;
    font-family: 'Press Start 2P', cursive;
    text-transform: uppercase;
    box-shadow:
        3px 3px 0px rgba(0, 0, 0, 0.5),
        0 0 10px rgba(255, 255, 0, 0.5);
    line-height: 1.8;
}

/* Lightbox */
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
        repeating-linear-gradient(0deg,
            rgba(0, 255, 255, 0.05) 0px,
            rgba(0, 255, 255, 0.05) 2px,
            rgba(0, 0, 0, 0.95) 2px,
            rgba(0, 0, 0, 0.95) 4px),
        radial-gradient(circle at top,
            rgba(255, 0, 255, 0.15) 0%,
            rgba(0, 0, 51, 0.95) 45%,
            rgba(0, 0, 0, 0.98) 100%);
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
    background: #000033;
    border: 3px solid #00FFFF;
    border-radius: 0;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.1s steps(2);
    z-index: 1001;
    box-shadow:
        4px 4px 0px rgba(0, 0, 0, 0.8),
        0 0 12px rgba(0, 255, 255, 0.6);
}

.close-button:hover {
    background: #00FFFF;
    color: #000033;
    transform: translate(-2px, -2px);
    box-shadow:
        6px 6px 0px rgba(0, 0, 0, 0.8),
        0 0 18px rgba(0, 255, 255, 0.9);
}

.close-button svg {
    width: 24px;
    height: 24px;
    color: #00FFFF;
}

.close-button:hover svg {
    color: #000033;
}

.lightbox-content {
    max-width: min(900px, 92vw);
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    background: #0a0a4a;
    border: 4px solid #FF00FF;
    padding: 1.5rem;
    position: relative;
    box-shadow:
        8px 8px 0px #000033,
        0 0 30px rgba(255, 0, 255, 0.4),
        inset 0 0 20px rgba(0, 255, 255, 0.1);
}

.lightbox-content::before {
    content: '';
    position: absolute;
    inset: 10px;
    border: 2px dashed rgba(0, 255, 255, 0.5);
    pointer-events: none;
}

.lightbox-content::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
        repeating-linear-gradient(90deg,
            transparent 0px,
            transparent 3px,
            rgba(0, 255, 255, 0.08) 3px,
            rgba(0, 255, 255, 0.08) 6px);
    pointer-events: none;
}

.lightbox-image {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border: 4px solid #00FFFF;
    border-radius: 0;
    box-shadow:
        6px 6px 0px #000033,
        0 0 25px rgba(0, 255, 255, 0.6);
    filter: contrast(1.2) saturate(1.2);
}

.lightbox-info {
    text-align: center;
    padding: 0.5rem 1rem;
    background: #000033;
    border: 2px solid #FFFF00;
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.6);
}

.lightbox-info h2 {
    font-family: 'Press Start 2P', cursive;
    font-size: 1rem;
    color: #00FFFF;
    text-shadow:
        2px 2px 0px #000033,
        0 0 10px #00FFFF;
    line-height: 1.8;
    margin-bottom: 0.5rem;
}

.lightbox-info p {
    font-family: 'Press Start 2P', cursive;
    font-size: 0.7rem;
    color: #FFFF00;
    line-height: 1.8;
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

@media (max-width: 768px) {
    .artworks-section {
        padding: 2.5rem 0.75rem;
    }

    .header-wrapper {
        margin-bottom: 2rem;
        padding: 1rem 0;
    }

    .header-wrapper h1 {
        font-size: 2.2rem;
        line-height: 1.2;
    }

    .header-wrapper p {
        font-size: 1rem;
    }

    .gallery-container {
        padding: 0 0.5rem;
        column-gap: 1rem;
    }

    .featured-gallery {
        grid-template-columns: 1fr;
        gap: 1rem;
        margin-top: 2rem;
        padding: 0 0.5rem;
    }

    .featured-image-frame {
        border-width: 8px;
    }

    .image-wrapper {
        border-width: 8px;
        box-shadow:
            inset 0 0 25px rgba(0, 0, 0, 0.8),
            inset 0 0 40px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(0, 255, 255, 0.3),
            0 8px 0 #1a1a1a,
            0 12px 0 #0a0a0a,
            6px 6px 0px #000033;
    }

    .image-wrapper::before {
        width: 60px;
        height: 10px;
        top: -12px;
    }

    .image-wrapper::after {
        bottom: -16px;
        height: 16px;
    }

    .image-overlay {
        opacity: 1;
    }

    .overlay-content {
        transform: translateY(0);
    }

    .lightbox {
        padding: 1rem;
    }

    .close-button {
        top: 1rem;
        right: 1rem;
        width: 40px;
        height: 40px;
    }

    .lightbox-image {
        max-height: 70vh;
    }
}
</style>