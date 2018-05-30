
const state = {
  success: [],
  info: [],
  warning: [],
  error: []
}

const mutations = {
  show (state, { title, description, type }) {
    state[type].push({
      title: title,
      description: description
    })
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
