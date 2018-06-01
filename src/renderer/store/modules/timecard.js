import timecard from '@/api/timecard'

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
    return new Promise((resolve, reject) => {
      timecard.atWork(payload).then(() => {
        commit('atWork')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 退勤
  leaveWork ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      timecard.leaveWork(payload).then(() => {
        commit('leaveWork')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
