<template>
  <div class="input-group">
    <input v-model="title" type="text"
      class="form-control"
      placeholder="Search for Films and People"
      @keyup.enter="Search" />
      <button class="btn btn-primary" @click="Search">
        <i class="bi bi-search" style="color: white"></i> 
      </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '',
      q: ''
    }
  },

  // mounted() {
  //   this.q = this.$route.query.q
  //   if(this.q === undefined) {

  //   } else {
  //     this.$store.dispatch('film/searchFilms', { title: this.q })

  //   }
  // },


  methods: {
    async Search() {
      this.$store.dispatch('film/searchFilms', { title: this.title })
      history.go(0)
    },
  },
  



}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    // > * {
    //   margin-right: 10px;
    //   &:last-child {
    //     margin-right: 0;
    //   }
    // }

  }

</style>