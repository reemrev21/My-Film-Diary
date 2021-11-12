<template>
  <div class="container">
    <div class="inner">
      <div class="films">
        <div class="errMessage" v-if="title==''">
          검색어를 입력하세요
        </div>
        <FilmItem v-else
          v-for="film in films" 
          :key="film.id" 
          :film="film"/>
      </div>
      <div class="infinite-wrapper">
        <infinite-loading force-use-infinite-wrapper @infinite="infiniteHandler" spinner="waveDots"></infinite-loading>
      </div>
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

  data() {
    return {
      title: ''
    }
  },

  
  computed: {
    films() {
      return this.$store.state.film.films
    },
<<<<<<< HEAD
=======
  },

  mounted() {

>>>>>>> c6daa62f021d040b12f962366707e88e98aacd1f
  },
  

  methods: {
<<<<<<< HEAD
    infiniteHandler($state) {
      const title = this.$route.query.q
      this.$store.dispatch('film/searchFilms', { title: title })
=======
    async infiniteHandler($state) {
      this.title = this.$route.query.q
      this.$store.dispatch('film/searchFilms', {title: this.title})
     .then((loadState) => {
        if (loadState) {
          $state.loaded();
        } else {
          $state.complete();
        }
      });
>>>>>>> c6daa62f021d040b12f962366707e88e98aacd1f
    },
  },
}
</script>

<style lang="scss">
@import "@/scss/custom";
  .container {
    // margin-top: 30px;
    .inner {
      // background-color: $gray-200;
      padding: 10px;
    }
    .films {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
    }
  }
</style>