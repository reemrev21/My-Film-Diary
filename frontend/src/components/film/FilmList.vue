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
import axios from 'axios'
import router from '../../router'


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
  },

  mounted() {

  },
  

  methods: {
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