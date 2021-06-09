<template>
  <div class="inner">
    {{ theFilm.title }} <br />
    {{ theFilm.overview }}

  </div>
</template>

<script>

export default {
  computed: {
    theFilm() {
      return this.$store.state.film.theFilm
    }
  },

  created () {
    this.$store.dispatch('film/detailFilm', this.$route.params.id)
  }
}
</script>

<style lang="scss">

</style>