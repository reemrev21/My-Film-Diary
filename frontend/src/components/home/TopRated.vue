<template>
  <div class="container">
    <h2><b>탑랭크 영화</b></h2>
    <div class="inner">
      <div class="card mb-3"
        v-for="film in films" 
        :key="film.id" >
        <img class = "card-img-top" v-bind:src="'http://image.tmdb.org/t/p/w300/' + film.poster_path" width='100px'>
        <div class="card-body" style="width: 18rem;">
          <h5 class="card-title"> {{ film.title }} </h5>
          <p class="card-text"> {{ film.release_date}} </p>
          <p class="card-text"> {{ film.popularity}} </p>
          <p class="card-text"> {{ film.vote_count}} </p>
        </div>
      </div>
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
// import { mapGetters } from 'vuex'
export default {
  computed: {
    // ...mapGetters(['nowPlaying'])
  },

  data() {
    return {
      films: []
    }
  },

  async created() {
    const TMDB_API_KEY = '017a4e07abc72d3e870413f8a939cc5c'
    const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}`)
    console.log(res)
    this.films = res.data.results
    console.log(this.films)
  },
}
</script>

<style scoped>
  div {
    color : black
  }

  .inner {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>