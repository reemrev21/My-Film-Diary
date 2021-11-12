<template>
  <div class="container">
    <div class="inner">
      <div class="films">
        <FilmItem 
          v-for="film in films" 
          :key="film.id" 
          :film="film"/>
      </div>
      <div class="infinite-wrapper">
        <infinite-loading force-use-infinite-wrapper @infinite="infiniteHandler" spinner="waveDots">
          <div slot="no-more" 
              style="color: rgb(102, 102, 102); font-size: 14px; padding: 10px 0px;">
            목록의 끝입니다 :)</div>
        </infinite-loading>
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
      page: 1,
      film: []
    }
  },

  
  computed: {
    films() {
      return this.$store.state.film.films
    },
  },

  methods: {
    infiniteHandler($state) {
      const title = this.$route.query.q
      this.$store.dispatch('film/searchFilms', { title: title })
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