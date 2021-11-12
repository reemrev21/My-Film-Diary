<template>
  <div>
    <div class="filmBox" @click="singleFilm(film.id)">
      <div class="film"
          :style="{ backgroundImage: `url(http://image.tmdb.org/t/p/w300/${film.poster_path})`}"
      ></div>
      <div class="info">
        <div class="title">
          {{ film.title }}
        </div>
        <div class="year">
          {{ film.release_date }}
        </div>

      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    film: {
      type: Object,
      defalut: () => ({ })
    }
  },

  methods: {
    singleFilm(id) {
      this.$store.commit('film/singleFilm', id)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/scss/custom";
  .filmBox {    
    position: relative;
    $width: 200px;
    width: $width;
    height: 350px;
    margin: 10px;
    // &:hover {
    //   content: "";
    //   outline: 6px solid $primary;
    // }
    .film {
      // $width: 168px;
      width: $width;
      height: $width * 3 / 2;
      background-size: cover;
      overflow: hidden;
      position: absolute;
    }
    .info {
      position: absolute;
      bottom: 0;
      // background-color: rgba($black, .3);
      width: 100%;
      height: 50px;
      padding: 5px 0 0 0;
      // font-size: 14px;
      text-align: left;
      color: white;

      .year {
        color: $black;
        font-size: 13px;
      }

      .title {
        color: $black;
        font-size: 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }


</style>