import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Film from '../views/Film.vue'
import FilmDetail from '../views/FilmDetail.vue'
import About from '../views/About.vue'
import Diary from '../views/Diary.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  
  {
    path: '/Film/',
    name: 'Film',
    component: Film,
    props: (route) => ({ query: route.query.q })
  }, 
  {
    path: '/FilmDetail/:id',
    name: 'FilmDetail',
    component: FilmDetail,
  },  
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Diary',
    name: 'Diary',
    component: Diary
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
