<template>
  <div class="container">
    <div class="inner">
      <div class="message">
        {{ message }}
      </div>
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

    message() {
      return this.$store.state.film.message
    }
  },

  methods: {
    infiniteHandler($state) {
      const TMDB_API_KEY = '017a4e07abc72d3e870413f8a939cc5c'
      const title = this.$route.query.q
      // const page = this.page
      const url =`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${title}&`
      
      axios.get(url, {
        params: {
          page: this.page,
        },
      }).then((res) => {
        if (res.data.results.length) {
          console.log(res.data.results.length) // 20
          this.page += 1;
          this.films.push(...res.data.results);
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