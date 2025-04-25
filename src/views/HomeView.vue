<script setup>
import FooterView from '../components/FooterView.vue';
</script>

<template>
  <section>
    <div class="hero-section flex justify-center center-items pb-10">
      <div class="hero-containter-text pl-4 pt-45 md:!-ml-115">
        <h1 class="text-5xl text-purpleRain font-bold titleFont">
          LOGIC
        </h1>
        <h2 class="text-5xl text-pinkyWhite font-bold titleFont">
          CREATIVITY
        </h2>
        <h3 class="text-5xl text-purpleRain font-bold titleFont">
          AND PERSONALITY
        </h3>
      </div>
    </div>
  </section>


  <section class="flex justify-center center-items pb-10">
    <div class="description">
      <h4 class="text-4xl font-bold text-pinkyWhite pt-7 pl-5 titleFont">Hello i'm Mikkel!</h4>
      <div class="flex flex-col items-start gap-4">
        <p class="text-pinkyWhite pl-5 pt-5">I'm a multimediadesign student at EASV. I have a passion for anything
          creative. I love taking photos,
          painting, illustrating, and creating websites. I enjoy the process of bringing ideas to life and exploring new
          ways to express myself. I strive to somehow combine my love for creativity with technology, and I am always
          looking for new ways to learn and grow. I believe that creativity is a powerful tool for problem-solving and
          innovation, and I am excited to see where my journey will take me.</p>
        <div class="flex justify-end w-full">
          <router-link to="/about"
            class="bg-darkGray hover:bg-hooverPink text-pinkyWhite font-bold py-2 px-4 rounded inline-block text-center titleFont">
            About me
          </router-link>
        </div>
      </div>
    </div>
  </section>


  <section class="flex justify-center center-items pb-5 pt-5">
    <div class="flex flex-col items-center bg-darkGray shadow-sm md:flex-row w-full max-w-5xl mx-auto">
      <img class="object-cover w-full h-fit md:h-96 md:h-auto md:w-1/3 md:rounded-none md:rounded-s-lg"
        src="../components/images/polaroid1.jpg" alt="">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-pinkyWhite dark:text-white titleFont">Photography</h5>
        <p class="mb-3 font-normal text-pinkyWhite pt-5">I love taking photos because it allows me to capture moments
          that might
          otherwise be forgotten. Through photography, I can freeze time, document emotions, and tell stories without
          words. I enjoy the way light, composition, and perspective come together to create something unique.</p>
        <p class="mb-3 font-normal text-pinkyWhite pt-5">This photograph was the winner for a contest we had 1st
          semester at EASV. Each student had free reign over the theme and feeling for the photograph.
          The only sort of restriction was that we coould only use simple editing tools like cropping and brightness.
        </p>
      </div>
    </div>
  </section>


  <section class="flex justify-center center-itmes pb-5 pt-5">
    <a href="#" class="flex flex-col items-center bg-darkGray shadow-sm md:flex-row w-full max-w-5xl mx-auto">
      <div class="flex flex-col justify-between p-4 leading-normal order-2 md:order-1">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-pinkyWhite titleFont">Illustrating</h5>
        <p class="mb-3 font-normal text-pinkyWhite pt-5">
          I love art and illustrating because it allows me to express emotions and ideas that words can’t capture.
          Through drawing and painting, I can bring my imagination to life, create new worlds,
          also it's just good old fun!
        </p>
        <p class="mb-3 font-normal text-pinkyWhite pt-5">
          This illustrating was made for an assignment were we had to create ourself as some type of character. I
          chose to make myself in SouthPark-style.
          The assignment was meant for us to learn simple tools in illustrator.
        </p>
      </div>
      <img
        class="object-cover w-full h-fit md:h-96 md:h-auto md:w-1/3 md:rounded-none order-1 md:order-2"
        src="../components/images/miniMe.jpg" alt="">
    </a>
  </section>





  <h4 class="text-4xl text-purpleRain font-bold pt-10 pl-5 pb-7 text-center titleFont">Wanna see my projects?</h4>
  <div class="flex items-center justify-center">
    <router-link to="/projects"
      class="bg-darkGray hover:bg-hooverPink text-pinkyWhite font-bold py-2 px-4 rounded !mb-10 inline-block text-center titleFont">
      Projects
    </router-link>
  </div>

  <section>
    <!-- <section class="!mb-30">
<h4 class="text-4xl text-purpleRain font-bold pt-10 pb-7">I love to create</h4>
<div class="polaroidSection flex gap-4">
<img class="size-40" src="../components/images/polaroid1.jpg" alt="">
<img class="size-40" src="../components/images/polaroid2.jpg" alt="">
<img class="size-40" src="../components/images/polaroid3.jpg" alt="">
</div>
<div class="bg-darkGray w-2/3 flex flex-col justify-between pb-5">
  <h5 class="text-pinkyWhite font-bold pl-5 text-2xl pt-5 flex flex-col justify-between">Photography</h5>
  <p class="text-pinkyWhite pl-5 pt-5">I love taking photos because it allows me to capture moments that might
    otherwise be forgotten. Through photography, I can freeze time, document emotions, and tell stories without
    words. I enjoy the way light, composition, and perspective come together to create something unique. Whether
    it’s a breathtaking landscape, a fleeting expression, or the beauty in everyday life, photography helps me see
    the world differently. It’s not just about taking pictures—it’s about preserving feelings, memories, and the way
    I experience the world around me.</p>
</div>
</section>


<section class="relative flex">
<div class="bg-darkGray w-2/3 pb-5 flex flex-col justify-between relative">
  <h5 class="text-pinkyWhite font-bold pl-5 text-2xl pt-5">Illustrations</h5>
  <p class="text-pinkyWhite pl-5 pt-5">I love art and illustrating because it allows me to express emotions and
    ideas that words can’t capture. Through drawing and painting, I can bring my imagination to life, create new
    worlds, and share my perspective with others. I enjoy experimenting with colors, shapes, and textures to evoke
    feelings and tell visual stories. Whether it’s a quick sketch or a detailed piece, art helps me see beauty in
    the smallest details. It’s not just about making images—it’s about exploring creativity, emotions, and the way I
    interpret the world around me.</p>
    <div class="miniMeSection absolute  w-1/4">
      <img class="size-75 -z-1 transform rotate-45" src="../components/images/mini_me.png" alt="">
    </div>
</div>
</section>-->

  </section>


</template>

<style>
.hero-section {
  width: 100%;
  height: 500px;
  background-image: url("../components/images/2302166_7971.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.fade-effect {
  translate: all 0.5s;
}

.miniMeSection {
  position: absolute;
  top: -20%;
  right: -10%;
  display: flex;
  justify-content: flex-end;
}


.miniMeSection img {}

.description {
  max-width: 900px;

}
</style>
