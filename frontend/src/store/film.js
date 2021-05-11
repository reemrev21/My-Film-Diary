import axios from 'axios'
import router from '../router'

export default {
  namespaced: true,
  state: () => ({
    films: [],
    message: '',
    loading: false,
    q: ''
  }),

  getters: {
    
  },

  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },

    resetFilms(state) {
      state.films = []
    },

    getQueryTitle() {
      
    }
  },

  actions: {
    async searchFilms({ commit }, payload) {
      const { title } = payload
      router.push(`/Film?q=${title}`).catch(()=>{});
      const TMDB_API_KEY = '017a4e07abc72d3e870413f8a939cc5c'
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${title}`)
      const { results, total_results } = res.data
      commit('updateState', {
        films: results,
      })

      console.log(results)

    }

  },
}