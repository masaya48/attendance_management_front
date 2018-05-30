import Vue from 'vue'
import * as API from '@/constants/api'
import KEY from '@/constants/key'

const state = {
  auth: false,
  token: ''
}

const mutations = {
  login (state, res) {
    state.token = res.token
    state.auth = true
  },
  logout (state) {
    state.token = ''
    state.auth = false
  }
}

const actions = {
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      Vue.http.post(API.LOGIN, payload).then((res) => {
        const token = res.results.token
        commit('login', token)
        localStorage.setItem(KEY.TOKEN, token)
        resolve()
      }).catch((error) => {
        reject(error)
      })
    })
  },
  logout ({ commit }) {
    commit('logout')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
