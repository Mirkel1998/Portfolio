<script setup>
import FooterView from '../components/FooterView.vue';
</script>

<template>
  <section>
    <div class="hero-section flex justify-center center-items pb-10">
    <div class="hero-containter-text pl-4 pt-45 md:!-ml-115">
        <h1 class="text-5xl text-purpleRain font-bold">
          LOGIC
        </h1>
        <h2 class="text-5xl text-pinkyWhite font-bold">
          CREATIVITY
        </h2>
        <h3 class="text-5xl text-purpleRain font-bold">
          AND PERSONALITY
        </h3>
      </div>
    </div>
  </section>


    <section class="flex justify-center center-items pb-10">
      <div class="description">
        <h4 class="text-4xl font-bold text-pinkyWhite pt-7 pl-5">Hello i'm Mikkel!</h4>
        <div class="flex flex-col items-start gap-4">
          <p class="text-pinkyWhite pl-5">Mikkel isn’t just awesome—he’s on a whole different level. Whether it’s his sharp
          mind, unbeatable creativity, or just the way he makes everything look effortless, he’s the kind of person who
          leaves an impact. Need a problem solved? Mikkel’s got it. Looking for inspiration? Just watch him work. He’s the
          perfect blend of talent, determination, and pure good vibes. Honestly, the world needs more Mikkels. Mikkel
          isn’t just awesome—he’s on a whole different level.</p>
          <div class="flex justify-end w-full">
            <button class="bg-darkGray hover:bg-hooverPink text-pinkyWhite font-bold py-2 px-4 rounded">
              About me
            </button>
          </div>
        </div>
      </div>
  </section>

  
  <section class="flex justify-center center-items pb-5 pt-5">
<a href="#" class="flex flex-col items-center bg-darkGray shadow-sm md:flex-row w-full max-w-5xl mx-auto">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-1/3 md:rounded-none md:rounded-s-lg" src="../components/images/polaroid1.jpg" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-pinkyWhite dark:text-white">Photography</h5>
        <p class="mb-3 font-normal text-pinkyWhite">I love taking photos because it allows me to capture moments that might
    otherwise be forgotten. Through photography, I can freeze time, document emotions, and tell stories without
    words. I enjoy the way light, composition, and perspective come together to create something unique.</p>
    </div>
</a>
</section>


<section class="flex justify-center center-itmes pb-5 pt-5">
  <a href="#" class="flex flex-col items-center bg-darkGray shadow-sm md:flex-row w-full max-w-5xl mx-auto">
    <div class="flex flex-col justify-between p-4 leading-normal order-2 md:order-1">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-pinkyWhite">Photography</h5>
      <p class="mb-3 font-normal text-pinkyWhite">
        I love taking photos because it allows me to capture moments that might otherwise be forgotten. Through
        photography, I can freeze time, document emotions, and tell stories without words. I enjoy the way light,
        composition, and perspective come together to create something unique.
      </p>
    </div>
    <img
      class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-1/3 md:rounded-none md:rounded-s-lg order-1 md:order-2"
      src="../components/images/polaroid1.jpg"
      alt="">
  </a>
</section>



  

  <h4 class="text-4xl text-purpleRain font-bold pt-10 pl-5 pb-7 text-center">Wanna see my projects?</h4>
  <div class="flex items-center justify-center">
    <button class="bg-darkGray hover:bg-hooverPink text-pinkyWhite font-bold py-2 px-4 rounded !mb-10">
      Projects
    </button>
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
  right:-10%;
  display: flex;
  justify-content: flex-end;
}


.miniMeSection img {
  

}

.description {
max-width: 900px;
  
}
</style>
