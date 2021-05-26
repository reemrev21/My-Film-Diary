<template>
  <div class="container">
    <div class="inner">
      <FilmItem 
        v-for="film in films" 
        :key="film.id" 
        :film="film"/>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
  </div>
</template>

<script>
import FilmItem from '@/components/film/FilmItem'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  components: {
    FilmItem,
    InfiniteLoading
    
  },

  computed: {
    films() {
      return this.$store.state.film.films
    }
  }
}
</script>

<style lang="scss">

</style>