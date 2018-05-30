import { Notification } from 'element-ui'

const state = {

}

const mutations = {
}

const actions = {
  show (state, { title, message, type }) {
    Notification[type]({
      title: title,
      message: message
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
