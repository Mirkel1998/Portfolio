<template>
    <footer class="footer-main">
        <div class="footerContent1 w-1/3 hidden sm:block">
            <h1 class="footer-name">Mikkel Bech</h1>
            <p class="footer-copyright">All rights reserved 2025</p>
        </div>

        <div class="footer-nav-container">
            <router-link to="/" class="footer-link">Home</router-link>
            <router-link to="/about" class="footer-link">About</router-link>
            <router-link to="/projects" class="footer-link">Projects</router-link>
            <router-link to="/artworks" class="footer-link">Photos</router-link>
        </div>

        <div class="footer-social-container">
            <p class="social-label">Check out my LinkedIn!</p>
            <a href="https://www.linkedin.com/in/mikkel-bech-mmd/" target="_blank" rel="noopener noreferrer"
                class="social-icon-link">
                <img src="../components/images/linkdin.svg" width="50" height="50" alt="LinkedIn Logo">
            </a>
        </div>
    </footer>
</template>

<style scoped>
.footer-main {
    background: #000033;
    border-top: 4px solid #00FFFF;
    box-shadow: 0 -4px 20px rgba(0, 255, 255, 0.5);
    position: relative;
    min-height: 10rem;
    width: 100%;
    display: flex;
    padding: 2rem 0;
}

.footer-main::before {
    content: '';
    position: absolute;
    top: 0;
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

.footer-name {
    font-family: 'Press Start 2P', cursive;
    color: #F8F8FF;
    font-weight: bold;
    padding-left: 1.25rem;
    font-size: 1.2rem;
    padding-top: 1.25rem;
    line-height: 1.8;
    text-shadow: 0 0 10px #00FFFF;
}

.footer-copyright {
    font-family: 'VT323', monospace;
    color: #00FFFF;
    padding-left: 1.25rem;
    font-size: 1rem;
    padding-top: 0.75rem;
}

.footer-nav-container {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media (min-width: 640px) {
    .footer-nav-container {
        width: 33.333333%;
    }
}

.footer-link {
    color: #F8F8FF;
    display: block;
    padding-top: 0.5rem;
    text-decoration: none;
    font-family: 'Press Start 2P', cursive;
    font-size: 0.75rem;
    text-transform: uppercase;
    transition: all 0.1s steps(2);
    position: relative;
    padding-left: 1rem;
    line-height: 1.8;
}

.footer-link::before {
    content: '▶';
    position: absolute;
    left: 0;
    opacity: 0;
    transition: opacity 0.1s steps(2);
}

.footer-link:hover::before {
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

.footer-link:hover {
    background: rgba(255, 0, 255, 0.2);
    color: #FF00FF;
    text-shadow: 0 0 10px #FF00FF;
    transform: translateX(2px);
    padding-left: 1.5rem;
}

.footer-link.router-link-exact-active {
    color: #00FFFF;
    background: rgba(0, 255, 255, 0.1);
    text-shadow: 0 0 10px #00FFFF;
}

.footer-social-container {
    width: 33.333333%;
    padding-top: 3.5rem;
    padding-left: 4rem;
    display: none;
}

@media (min-width: 640px) {
    .footer-social-container {
        display: block;
    }
}

.social-label {
    font-family: 'VT323', monospace;
    color: #00FFFF;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.social-icon-link {
    display: inline-block;
    padding-left: 1.875rem;
    transition: transform 0.1s steps(2);
}

.social-icon-link:hover {
    transform: scale(1.1);
}

.social-icon-link img {
    filter: drop-shadow(0 0 10px #00FFFF);
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
}
</style>