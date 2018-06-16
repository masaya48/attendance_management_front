const state = {
  show: false,
  dialogName: ''
}

const mutations = {
  show (state, name) {
    state.show = true
    state.dialogName = name
  },
  close (state) {
    state.show = false
    state.dialogName = ''
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
