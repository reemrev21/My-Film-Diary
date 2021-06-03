import axios from 'axios'
import router from '../router'
import _uniqBy from 'lodash/uniqBy'
import { reject } from 'lodash'

export default {
  namespaced: true,
  state: () => ({
    films: [],
    loading: false,
    number: '',
    page: 1,
    theMoive: {},
    message: ''
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
    async searchFilms({ commit, state }, payload) {
      const { title } = payload
      try {
        return new Promise((resolve, reject) => {
          let loaded = undefined
          if (title == '') {
            // router.push() 에러 감지 페이지
          }
          else {
            router.push(`/Film?q=${title}`).catch(() => { })
          }
          const TMDB_API_KEY = '017a4e07abc72d3e870413f8a939cc5c'
          const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${title}`

          axios.get(url, {
            params: {
              page: state.page,
            },
          }).then((res) => {
            if (res.data.results.length) {
              console.log(res.data.results.length) // 20 
              state.page += 1
              state.films.push(...res.data.results)
              commit('updateState', {
                films: _uniqBy(state.films, 'id'),
              })
              loaded = true
            } else {
              loaded = false
            }
            resolve(loaded)
          }).catch(() => {})
        })
      } catch (err) {
        reject(err)
      }

    }
  }
}