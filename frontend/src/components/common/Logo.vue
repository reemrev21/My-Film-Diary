<template>
  <router-link to="/" class="logo">
    <span>My Film</span> Diary
  </router-link>
</template>

<style lang="scss" scoped>
  @import "@/scss/custom";

  .logo {
    font-family: "Anton", sans-serif;
    font-size: 30px;
    color: $black;
    text-decoration: none;
    &:hover {
      color: $black;
    }
    
    span {
        color: $primary;
    }
  }
</style>
