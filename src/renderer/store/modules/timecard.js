import timecard from '@/api/timecard'

const state = {
  // 出勤フラグ
  isAttendance: false
}

const mutations = {
  isAttendance (state, isAttendance) {
    state.isAttendance = isAttendance
  }
}

const actions = {
  // 出勤
  atWork ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      timecard.atWork(payload).then(() => {
        commit('isAttendance', true)
        resolve()
      }).catch(error => reject(error))
    })
  },
  // 退勤
  leaveWork ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      timecard.leaveWork(payload).then(() => {
        commit('isAttendance', false)
        resolve()
      }).catch(error => reject(error))
    })
  },
  // 出勤確認
  async checkAttendance ({ commit }) {
    const res = await timecard.checkAttendance()
    commit('isAttendance', res.results.is_attendance)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
