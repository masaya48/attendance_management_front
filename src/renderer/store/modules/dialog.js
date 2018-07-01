const state = {
  show: false,
  dialogName: '',
  data: {}
}

const mutations = {
  show (state, name, data) {
    state.show = true
    state.dialogName = name
    state.data = data
  },
  close (state) {
    state.show = false
    state.dialogName = ''
    state.data = {}
  }
}

const actions = {
  show ({ commit }, payload) {
    commit('show', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
