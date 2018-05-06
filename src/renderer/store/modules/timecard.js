import Vue from 'vue'

const state = {
  // 出勤フラグ
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
  // 出勤
  atWork ({ commit }, payload) {
    // do something async
    Vue.http.get('/atWork')
      .then(res => {
        console.log(res)
        commit('atWork')
      })
  },
  // 退勤
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
