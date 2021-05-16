import Vue from 'vue'
import Vuex from 'vuex'
import film from './film'
import about from './about'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    film,
    about,
    // home
  }
})
