const state = {
  headerTitle: ''
}

const mutations = {
  changeTitle (state, headerTitle) {
    state.headerTitle = headerTitle
  }
}

export default {
  state,
  mutations
}
