<template>
  <div class="container">
    <div class="inner">
      <FilmItem 
        v-for="film in films" 
        :key="film.id" 
        :film="film"/>
    </div>
  </div>
</template>

<script>
import FilmItem from '@/components/film/FilmItem'

export default {
  components: {
    FilmItem
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