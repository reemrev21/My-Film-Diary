import axios from 'axios'
import router from '../router'
import _uniqBy from 'lodash/uniqBy'
import { reject } from 'lodash'

export default {
  namespaced: true,
  state: () => ({
    films: [],
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
    async searchFilms(state, payload) {
      router.push(`/Film?q=${payload.title}`).catch(()=>{});
      const TMDB_API_KEY = '017a4e07abc72d3e870413f8a939cc5c'
      // const page = this.page
      const url =`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${payload.title}&`
      
      axios.get(url, {
        params: {
          page: this.page,
        },
      }).then((res) => {
        if (res.data.results.length) {
          console.log(res.data.results.length) // 20
          this.page += 1;
          this.films.push(...res.data.results);
          $state.loaded();
        } else {
          $state.complete();

        }
      });
      // history.go(0)
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