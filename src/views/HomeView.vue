<script setup>
import FooterView from '../components/FooterView.vue';
</script>

<template>
  <section>
    <div class="hero-section">
      <div class="hero-containter-text pl-4 pt-45">
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

  <section>
    <div class="desciption">
      <h4 class="text-4xl font-bold text-pinkyWhite pt-7 pl-5">Hello i'm Mikkel!</h4>
      <div class="flex flex-col items-start gap-4">
        <p class="text-pinkyWhite pl-5">Mikkel isn’t just awesome—he’s on a whole different level. Whether it’s his sharp
        mind, unbeatable creativity, or just the way he makes everything look effortless, he’s the kind of person who
        leaves an impact. Need a problem solved? Mikkel’s got it. Looking for inspiration? Just watch him work. He’s the
        perfect blend of talent, determination, and pure good vibes. Honestly, the world needs more Mikkels. Mikkel
        isn’t just awesome—he’s on a whole different level.</p>
      <button class="bg-darkGray hover:bg-hooverPink text-pinkyWhite font-bold py-2 px-4 rounded self-end">
        About me
      </button>
      </div>
    </div>
  </section>
  
<section class="!mb-30">

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
  </section>

  <h4 class="text-4xl text-purpleRain font-bold pt-10 pl-5 pb-7 text-center">Wanna see my projects?</h4>
  <div class="flex items-center justify-center">
    <button class="bg-darkGray hover:bg-hooverPink text-pinkyWhite font-bold py-2 px-4 rounded !mb-10">
      Projects
    </button>
  </div>

  <section>

  </section>

  <FooterView />
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
</style>
