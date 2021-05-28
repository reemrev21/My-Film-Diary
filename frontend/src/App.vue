<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>
    <router-view/>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");
@import "@/scss/custom.scss";
 .header {
   background-color: rgba(206, 199, 199, 0.774);
 }
</style>
