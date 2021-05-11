<template>
  <div class="container">
    <div class="inner">

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
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['nowPlaying'])
  },

  data() {
    return {
      movies: []
    }
  },

  async created() {
    const TMDB_API_KEY = '017a4e07abc72d3e870413f8a939cc5c'
    const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}`)
    console.log(res) 
  },
}
</script>