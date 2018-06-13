import { Notification, Message } from 'element-ui'

const state = {

}

const mutations = {
}

const actions = {
  notification (state, { title, message, type }) {
    Notification[type]({
      title: title,
      message: message
    })
  },
  message (state, {message, type}) {
    Message[type]({
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
