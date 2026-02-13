<template>
    <footer class="footer-main">
        <div class="footerContent1 w-1/3 hidden sm:block">
            <h1 class="footer-name">Mikkel Bech</h1>
            <p class="footer-copyright">All rights reserved 2026</p>
        </div>

        <div class="footer-nav-container">
            <router-link to="/" class="footer-link">Home</router-link>
            <router-link to="/about" class="footer-link">About</router-link>
            <router-link to="/projects" class="footer-link">Projects</router-link>
            <router-link to="/paint" class="footer-link">Paint.67</router-link>
            <router-link to="/artworks" class="footer-link">Photos</router-link>
        </div>

        <div class="footer-social-container">
            <a href="https://www.linkedin.com/in/mikkel-bech-mmd/" target="_blank" rel="noopener noreferrer"
                class="social-avatar-link">
                <span class="social-avatar-frame">
                    <img src="../components/images/mini_me.png" width="64" height="64" alt="Mikkel avatar">
                </span>
                <span class="social-linkedin-icon" aria-hidden="true">
                    <img src="../components/images/linkdin.svg" width="28" height="28" alt="">
                </span>
                <span class="social-bubble">Check out my LinkedIn!</span>
            </a>
        </div>

        <a class="footer-corner-link" href="https://avj-exam-project-2025.web.app/" target="_blank"
            rel="noopener noreferrer">
            <span class="footer-corner-avatar">
                <img src="../components/images/mini_me.png" width="64" height="64" alt="Mini Me">
            </span>
            <span class="footer-corner-text">psssst i also made som shitty games</span>
        </a>
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

.social-avatar-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    transition: transform 0.1s steps(2);
}

.social-avatar-link:hover {
    transform: translateY(-2px);
}

.social-avatar-frame {
    display: inline-flex;
    padding: 6px;
    border: 2px solid #00FFFF;
    background: #000033;
    box-shadow:
        4px 4px 0px rgba(0, 0, 0, 0.8),
        0 0 12px rgba(0, 255, 255, 0.6);
}

.social-avatar-frame img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    object-position: center top;
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
    filter: drop-shadow(0 0 6px #00FFFF);
}

.social-linkedin-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: 2px solid #FF00FF;
    background: #000033;
    box-shadow:
        3px 3px 0px rgba(0, 0, 0, 0.8),
        0 0 10px rgba(255, 0, 255, 0.6);
}

.social-linkedin-icon img {
    width: 28px;
    height: 28px;
    display: block;
    filter: drop-shadow(0 0 6px rgba(255, 0, 255, 0.6));
}

.social-bubble {
    font-family: 'Press Start 2P', cursive;
    color: #FFFF00;
    font-size: 0.6rem;
    line-height: 1.8;
    background: #000033;
    border: 2px solid #FF00FF;
    padding: 0.6rem 0.8rem;
    position: relative;
    box-shadow:
        4px 4px 0px rgba(0, 0, 0, 0.8),
        0 0 12px rgba(255, 0, 255, 0.5);
}

.social-bubble::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 8px solid #FF00FF;
}

.social-bubble::after {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 6px solid #000033;
}

.footer-corner-link {
    position: absolute;
    left: 1.25rem;
    bottom: 0.25rem;
    transform: rotate(2deg);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
}

.footer-corner-avatar {
    display: inline-flex;
    padding: 4px;
    border: 2px solid #00FFFF;
    background: #000033;
    box-shadow:
        4px 4px 0px rgba(0, 0, 0, 0.8),
        0 0 10px rgba(0, 255, 255, 0.6);
}

.footer-corner-avatar img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    object-position: center top;
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
    filter: drop-shadow(0 0 6px #00FFFF);
}

.footer-corner-text {
    display: inline-block;
    font-family: 'Press Start 2P', cursive;
    font-size: 0.45rem;
    color: #00FFFF;
    background: #000033;
    border: 2px solid #00FFFF;
    padding: 0.4rem 0.6rem;
    box-shadow:
        4px 4px 0px rgba(0, 0, 0, 0.8),
        0 0 12px rgba(0, 255, 255, 0.6);
    line-height: 1.8;
}

@media (max-width: 640px) {
    .footer-corner-link {
        display: none;
    }

    .footer-corner-link {
        left: 1rem;
        transform: rotate(2deg);
    }

    .footer-corner-avatar img {
        width: 32px;
        height: 32px;
    }

    .footer-corner-text {
        font-size: 0.4rem;
        padding: 0.35rem 0.5rem;
    }
}
</style>