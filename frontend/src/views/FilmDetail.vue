<template>
  <div class="container">
    <FilmItemDetail />
  </div>
</template>

<script>
import FilmItemDetail from '@/components/film/FilmItemDetail'

export default {
  components: {
    FilmItemDetail
  },
}
</script>

<style lang="scss" scoped>
@import "@/scss/custom";

  .container {
    padding-top: 40px
  } 
  .skeletons {
    display: flex;
    .poster{
      flex-shrink: 0;
      width: 500px;
      height: 500px * 3 / 2;
      margin-right: 70px;
    }
    .specs {
      flex-grow: 1;
    }
    .skeleton {
      background-color: $gray-200;
      &.title{
        width: 80%;
        height: 70px;
      }
      &.spec{
        width: 60%;
        height: 30px;
        margin-top: 20px;
      }
      &.plot{
        width: 100%;
        height: 250px;
        margin-top: 20px;
      }
      &.etc{
        width: 50%;
        height: 50px;
        margin-top: 20px;
      }
    }
  }
</style>