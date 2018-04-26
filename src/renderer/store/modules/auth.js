import Vue from 'vue'

const state = {
  auth: false,
  token: ''
}

const mutations = {
  login (state, token) {
    state.token = token
    state.auth = true
  },
  logout (state) {
    state.token = ''
    state.auth = false
  }
}

const actions = {
  login ({ commit }, payload) {
    // do something async
    Vue.http.get('/auth')
      .then(res => {
        console.log(res)
        commit('login', 'vubhvubvdvnsuvghviaruoe394')
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
