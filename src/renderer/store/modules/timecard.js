import Vue from 'vue'

const state = {
  isAtWork: false
}

const mutations = {
  atWork (state) {
    state.isAtWork = true
  },
  leaveWork (state) {
    state.isAtWork = false
  }
}

const actions = {
  atWork ({ commit }, payload) {
    // do something async
    Vue.http.get('/atWork')
      .then(res => {
        console.log(res)
        commit('atWork')
      })
  },
  leaveWork ({ commit }) {
    Vue.http.get('/leaveWork')
      .then(res => {
        console.log(res)
        commit('leaveWork')
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
