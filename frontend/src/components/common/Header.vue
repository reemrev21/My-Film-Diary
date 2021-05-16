<template>
  <header>
    <Logo />
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
    <div class="search">
      <Search />
    </div>
  </header>
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    // position: fixed;
    height: 70px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    .logo {
      margin-right: 40px;
    }
  }

  .search {
    margin-left: 10px;
    width: 60%;
  }


</style>