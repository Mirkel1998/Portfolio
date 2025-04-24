<template>


        <footer class="bg-black h-40 w-full flex">
        <div class="footerContent1 w-1/3 hidden sm:block">
            <h1 class="text-pinkyWhite font-bold pl-5 text-2xl pt-5">Mikkel Bech</h1>
            <p class="text-purpleRain pl-5 text-xs pt-3">All rights reserved 2025</p>
        </div>
    
        <div class="w-full text-center flex flex-col justify-center items-center sm:w-1/3 sm:block">
            <router-link to="/" class="text-pinkyWhite block pt-2">Home</router-link>
            <router-link to="/about" class="text-pinkyWhite block pt-2">About</router-link>
            <router-link to="/projects" class="text-pinkyWhite block pt-2">Projects</router-link>
            <router-link to="/artworks" class="text-pinkyWhite block pt-2">Artworks</router-link>
        </div>
    
        <div class="w-1/3 pt-10 pl-50 hidden sm:block">
            <p class="text-purpleRain">Check out my github!</p>
            <a href="https://github.com/Mirkel1998" target="_blank" rel="noopener noreferrer">
                <img class="" src="../components/images/githubLogo.svg" width="50" height="50" alt="GitHub Logo">
            </a>
        </div>
    </footer>

    

    

    

    
    
</template>