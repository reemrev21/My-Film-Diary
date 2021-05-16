import axios from 'axios'
import router from '../router'
import _uniqBy from 'lodash/uniqBy'

export default {
  namespaced: true,
  state: () => ({
    films: [],
    message: '',
    loading: false,
    q: '',
    number: ''
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
  },

  actions: {
    async searchFilms({ state, commit }, payload) {
      const { title } = payload
      router.push(`/Film?q=${title}`).catch(()=>{});
      const TMDB_API_KEY = '017a4e07abc72d3e870413f8a939cc5c'

      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${title}&page=1`)
      const { results, total_results } = res.data
      commit('updateState', {
        films: _uniqBy(results, 'id'),
      })

      console.log(total_results)
      console.log(typeof total_results) // number
      const pageLength = Math.ceil(total_results / 10)
      console.log(pageLength)

      // 추가 요청 전송
      if (pageLength > 1) {
        for (let page = 2; page <= pageLength; page += 1) {
          if( page > ( pageLength / 10 )) { break }
          const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${title}&page=${page}`)
          const { results } = res.data
          commit('updateState'), {
            films: [...state.films, ..._uniqBy(results, 'id')]
          }
        }
      }
    }
  },
}