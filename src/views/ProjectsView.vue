<template>
  <section>
  
  




    <div class="movieCardsRow flex flex-wrap justify-center gap-4 z-1 relatinom ">
        <!--Movie card for repeating start-->
        <div class="movieCard relative w-1/4 h-128 flex flex-col justify-end text-white" v-for="(movie, index) in movies" :key="movie">
          <div @mouseenter="toggleMovieData(index)" @mouseleave="toggleMovieData(index)" class=" bg-gray-800/70 p-5">
            <h2 class="text-2xl !font-bold">{{ movie.title }}</h2>
            <!-- <p>descripton {{ movie.descripton }}</p> -->
            <img class="absolute inset-0 -z-1 bg-center bg-cover w-full h-full object-cover" :src="movie.movieCover" alt="Movie cover">

            <div class="fade-effect" v-show="isMovieDataVisible[index]">
              <p>{{ movie.duration }}</p>
              <p>{{ movie.genre }}</p>
              <p>Rating {{ movie.rating }}</p>
          </div>
          </div>
            <!-- <p>publisher {{ movie.publisher }}</p> -->
            <!-- <p>ageRecomendation {{ movie.ageRecomendation}}</p> -->
            <!-- <p>director {{ movie.director }}</p> -->
            <!-- <p>releaseDate {{ movie.releaseDate }}</p> -->
            <!-- <p>Top Casts: {{ movie.actors }}</p> -->
            </div>
         <!--Movie card for repeating end-->
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'  


//destructuring the useMovieDataBase function
import { useProjectDatabase } from '../modules/useProjectDatabase'

const { movies } = useProjectDatabase()

let isMovieDataVisible = ref([])

let toggleMovieData = (index) => {
  isMovieDataVisible.value[index] = !isMovieDataVisible.value[index]
  
}

</script>

<style>
.hero-section {
width: 100%;
height: 500px;
background-image: url("../components/images/2302166_7971.png");
background-size: cover;
background-repeat: no-repeat;
}

.fade-effect
{
  translate: all 0.5s;
}
</style>