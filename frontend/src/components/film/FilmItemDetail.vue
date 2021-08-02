<template>
  <div class="container">
    <div
      class="movie-details">
      <div
        :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${theFilm.poster_path})`}"
        class="poster">
      </div>
      <div class="specs">
        <div class="title">
          {{ theFilm.title }}
        </div>
        <div class="labels">
          <span> {{ theFilm.release_date }} </span>
          <span> {{ theFilm.runtime }}mins </span>
          <span v-for="country in theFilm.production_countries" :key="country.id">
            {{ country.name }}
          </span>
        </div>
        <div class="plot">
          {{ theFilm.overview }}
        </div>
        <!-- <div class="ratings">
          <h3> Ratings </h3>
          <div class="rating-wrap">
            <div
              v-for="{ Source: name, Value: score } in theFilm.ratings"
              :key="name"
              :title="name"
              class="rating">
              <img
                :src="`https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/${name}.png`"
                :alt="name" />
              <span>{{ score }}</span>
            </div>
          </div>
        </div> -->
        <div>
          <h3 >Director</h3>
          <span v-for="director in theActor.crew" :key="director.credit_id"> 
            <span v-if="director.job=='Director'"> {{ director.name }} </span>
          </span>
        </div>
        <div>
          <h3>Production</h3>
            <span v-for="production in theFilm.production_companies" :key="production.id">
              {{ production.name }}
            </span>
            <!-- {{ theFilm.production_companies[0].name }} -->
        </div>
        <div>
          <h3> Genre </h3>
          <span v-for="genre in theFilm.genres" :key="genre.id"> 
            {{ genre.name }} 
          </span>
        </div>
        <div>
          <h3>Actors</h3>
          <span v-for="actor in theActor.cast" :key="actor.cast_id"> 
            {{ actor.name }} : {{ actor.character }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageLoading: true
    }
  },

  computed: {
    theFilm() {
      return this.$store.state.film.theFilm
    },

    theActor() {
      return this.$store.state.film.theActor
    },
  },

  created () {
    this.$store.dispatch('film/detailFilm', this.$route.params.id)
    this.$store.dispatch('film/detailFilmActor', this.$route.params.id)

  },

  methods: {

    
  },

}
</script>

<style lang="scss" scoped>
@import "@/scss/custom";
.container {
  padding-top: 40px;
  padding-bottom: 40px;
  /* background-color: $gray-200;
  background-size: cover;
  background-position: center;
  position: relative; */

}

.movie-details {
  display: flex;
  color: $gray-600;
  .poster {
    width: 500px;
    height: 500px * 3/2;
    margin-right: 70px;
    border-radius: 10px;
    background-color: $gray-200;
    background-size: cover;
    background-position: center;
    position: relative;
    flex-shrink: 0;
  }
  .specs {
    flex-grow: 1;
    .title {
      color: $black;
      font-family: "Oswald", sans-serif;
      font-size: 70px;
      line-height: 1;
      margin-bottom: 30px;
    }
    .labels {
      color: $primary;
      span {
        &::after {
          content: "\00b7";
          margin: 0 6px;
        }
        &:last-child::after {
          display: none;
        }
      }
    }
    .plot {
      margin-top: 20px;
    }
    .ratings {
      .rating-wrap {
        display: flex;
        .rating {
          display: flex;
          align-items: center;
          margin-right: 32px;
          img {
            height: 30px;
            flex-shrink: 0;
            margin-right: 6px;
          }
        }
      }
    }
    h3 {
      margin: 24px 0 6px;
      color: $black;
      font-family: "Oswald", sans-serif;
      font-size: 20px;
    }
  }
  @include media-breakpoint-down(xl) {
    .poster {
      width: 300px;
      height: 300px * 3/2;
      margin-right: 40px;
    }
  }
  @include media-breakpoint-down(lg) {
    display: block;
    .poster {
      margin-bottom: 40px;
    }
  }
  @include media-breakpoint-down(md) {
    .specs {
      .title {
        font-size: 50px;
      }
      .ratings {
        .rating-wrap {
          display: block;
          .rating {
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>