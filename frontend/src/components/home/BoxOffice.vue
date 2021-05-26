<template>
  <div class="container">
    <h2><b>현재 상영작</b></h2>
    <div class="inner">
    <swiper
        class="swiper"
        :options="swiperOption"
      >
     
        <swiper-slide   
          v-for="film in films" 
          :key="film.id" >
          <div class="card mb-3">
            <img class = "card-img-top" v-bind:src="'http://image.tmdb.org/t/p/w300/' + film.poster_path" width='100px'>
            <div class="card-body" style="width: 18rem;">
              <!-- <p class="card-text"> {{  }} </p> -->
              <h5 class="card-title"> {{ film.title }} </h5>
              <p class="card-text"> {{ film.release_date}} </p>
              <p class="card-text"> {{ film.popularity}} </p>
              <p class="card-text"> {{ film.vote_count}} </p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding-top: 40px;
  }
</style>

<script>
import axios from 'axios'
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import "swiper/swiper-bundle.css"
import "swiper/css/swiper.css"
// import { mapGetters } from 'vuex'
export default {
  components : {
    Swiper,
    SwiperSlide
  },

  directives: {
    swiper: directive
  },

  computed: {
    // ...mapGetters(['nowPlaying'])
  },

  data() {
    return {
      films: [],
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 10,
        // loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
        // breakpoints: {
        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 40
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 30
        //   },
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20
        //   },
        //   320: {
        //     slidesPerView: 1,
        //     spaceBetween: 10
        //   }
        // }
      }
    }
  },

  async created() {
    const TMDB_API_KEY = '017a4e07abc72d3e870413f8a939cc5c'
    const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}`)
    console.log(res)
    this.films = res.data.results
    console.log(this.films)
  },
}
</script>

<style scoped>
  /* @import "@/scss/custom"; */
  div {
    color : black
  }

  .inner {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: white;
    border-radius: 50%;
    /* color: white; */
    --swiper-navigation-color: #000;
    --swiper-navigation-size: 25px;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background-color: #f26f6f;
  }
</style>