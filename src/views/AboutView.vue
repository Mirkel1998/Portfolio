<script setup>
import FooterView from '../components/FooterView.vue';
</script>

<template>
<div class=" min-h-screen text-white font-sans py-20 px-6">
  <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 bg-black rounded-3xl shadow-2xl overflow-hidden relative">
    
    <!-- Left Section -->
    <div class="bg-purple-800 p-16 space-y-20">
      <div>
        <h1 class="text-5xl font-bold text-pink-500 mb-6 pb-10">Mikkel Bech</h1>
        <p class="italic text-white text-lg leading-loose pb-10">
          "Design is where creativity meets function, and development brings ideas to life - I strive to master both."
        </p>
      </div>

      <div class="space-y-6">
        <h2 class="text-3xl font-semibold mb-4">Personal summary</h2>
        <p class="text-base leading-loose pb-10">
          My name is Mikkel Bech, and I am currently studying Multimedia Design at EASV. I have a passion for both
          design and development, aiming to bridge creativity with functionality. With a strong interest in user
          experience, web development, and visual storytelling, I aspire to craft engaging digital experiences that
          are both aesthetically appealing and highly functional. I am continuously expanding my skills in design,
          coding, and digital media, with the goal of becoming a versatile designer and developer.
        </p>
      </div>

      <div class="space-y-4">
        <h2 class="text-3xl font-semibold mb-4 pb-5">Education</h2>
        <ul class="text-base space-y-4 leading-relaxed">
          <li>Blåbjerggårdskolen, 9 klasse</li>
          <li>HF, Varde gymnasium</li>
        </ul>
      </div>

      <div class="space-y-4">
        <h2 class="text-3xl font-semibold mb-4 pb-5 pt-5">Work experience</h2>
        <ul class="list-disc ml-6 text-base space-y-4 leading-relaxed">
          <li>Baker apprenticeship, Brødboxen, Esbjerg</li>
          <li>Customerservice, Bilka, Esbjerg</li>
          <li>Keyholder/closer, Fakta, Nørre Nebel</li>
        </ul>
      </div>

      <div class="space-y-4">
        <h2 class="text-3xl font-semibold mb-4 pb-5 pt-5">Contact info</h2>
        <ul class="text-base space-y-4 leading-relaxed">
          <li>📞 93800239</li>
          <li>📧 Mikped01@easv365.dk</li>
          <li>🔗 LinkedIn: Laver en senere hehe</li>
          <li>📍 Tømmerpladsen 1D ST TH</li>
        </ul>
      </div>
    </div>

    <!-- Right Section -->
    <div class="relative bg-black flex flex-col justify-start">
      <!-- Decorative purple top bar -->
      <div class="w-full h-32 bg-purple-800 rounded-bl-[5rem]"></div>

      <div class="p-16 space-y-20 z-10">
        <!-- Avatar under purple bar -->
        <div class="flex justify-center mt-[-4rem] mb-12">
          <svg class="w-28 h-28 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        <div class="space-y-16">
          <div>
            <h2 class="text-3xl font-bold text-pink-400 mb-6">Hard skills</h2>
            <ul class="list-disc ml-6 text-base space-y-4 leading-loose">
              <li>Coding (HTML, CSS, Javascript)</li>
              <li>SEO</li>
              <li>Adobe programs (Ps, Ai, Id, Pr, Ae)</li>
              <li>UX (Research, prototyping, wireframing, visual design, FIGMA)</li>
            </ul>
          </div>

          <div>
            <h2 class="text-3xl font-bold text-pink-400 mb-6 pt-50">Soft skills</h2>
            <ul class="list-disc ml-6 text-base space-y-4 leading-loose">
              <li>Communication</li>
              <li>Creativity</li>
              <li>Teamwork</li>
              <li>Problem-solving</li>
              <li>Adaptability</li>
              <li>Open-minded</li>
              <li>Critical thinking</li>
              <li>Empathy</li>
              <li>Willingness to learn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<div class="cvBigPicture"></div>

<section class="idCardSection flex items-center justify-center h-screen">
<div class="flex items-center justify-center">
  <div class="idCard1 bg-darkGray h-100 w-350">
  </div>

</div>
 

  <div class="1dCard2">

  </div>

</section>

<FooterView />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.cvBigPicture {
  width: auto;
  height: 100vh;
  background-image: url("../components/images/cv take 3.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>