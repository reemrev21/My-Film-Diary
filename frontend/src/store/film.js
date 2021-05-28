import axios from 'axios'
import router from '../router'
import _uniqBy from 'lodash/uniqBy'
import { reject } from 'lodash'

export default {
  namespaced: true,
  state: () => ({
    films: [],
    message: '',
    loading: false,
    number: '',
    page: 1,
    theMoive: {}
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
      try {
        const res = await _fetchFilm({
          ...payload,
          page: 1
        })
        router.push(`/Film?q=${payload.title}`).catch(()=>{});
        const { results } = res.data
        commit('updateState', {
          films: _uniqBy(results, 'id'),
        })
        history.go(0)
      } catch (error) {
        commit('updataeState', {
          films: [],
          message
        })
      }
    },

    async searchFilmWithID(context, payload) {
      const { id } = payload
      commit('updateState', {
        theMoive: {}
      })
      try {
        const res = await _fetchFilm({
          id
        })
        commit('updateState', {
          theMoive: res.data
        })
      }catch(err){
        commit('updateState', {
          theMoive: {}
        }) 
      }
    }
  },
}

function _fetchFilm(payload) {
  const { title, id } = payload
  const TMDB_API_KEY = '017a4e07abc72d3e870413f8a939cc5c'
  const url = id 
  ? `https://api.themoviedb.org/3/moive/${id}?api_key=${TMDB_API_KEY}`
  : `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${title}`
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((res) => {
        console.log(res)
        if(res.data.Error) {
          reject(res.data.Error)
        }
        resolve(res)
      })
      .catch(err => {
        reject(err.message)
      })
  })
}