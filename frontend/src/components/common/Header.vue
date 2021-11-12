<template>
<div class="container">
  <div class="row py-3">
    <div class="col-md-2">
      <Logo />
    </div>
    <div class="col-md-4">
      <div class= "nav nav-pills">
        <div 
          v-for="nav in navigations"
          :key="nav.name" 
          class="nav-item">
          <router-link
            :to="nav.href"
            active-class="active"
            class="nav-link">
            {{ nav.name }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="col-6 col-md-6">
      <Search />
    </div>
  </div>
</div>
</template>

<script>
import Logo from "@/components/common/Logo"
import Search from "@/components/common/Search"

export default {
  components: {
    Logo,
    Search,
  },

  data() {
    return {
      navigations: [
        {
          name: 'Home',
          href: '/'
        },
        // {
        //   name: 'Film',
        //   href: '/Film'
        // },
      //  {
      //     name: 'FilmDetail',
      //     href: '/FilmDetail'
      //   },
       {
          name: 'Login',
          href: '/Login'
        },
        {
          name: 'Diary',
          href: '/Diary'
        },
        {
          name: 'About',
          href: '/About'
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
  // header {
  //   // position: fixed;
  //   height: 70px;
  //   padding: 0 40px;
  //   display: flex;
  //   align-items: center;
  //   .logo {
  //     margin-right: 40px;
  //   }
  // }

  // .search {
  //   margin-left: 10px;
  //   width: 60%;
  // }


</style>