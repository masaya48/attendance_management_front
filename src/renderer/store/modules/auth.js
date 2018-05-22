import Vue from 'vue'

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
    // do something async
    Vue.http.post('/auth', payload)
      .then(res => {
        console.log(res)
        commit('login', res)
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
