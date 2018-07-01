import { getDisplayTime, getDisplayDate } from '@/services/time'

const state = {
  headerTitle: '',
  date: null
}

const mutations = {
  // ヘッダータイトルの変更
  changeHeaderTitle (state, headerTitle) {
    state.headerTitle = headerTitle
  },
  // サーバー時間の設定
  setDate (state, date) {
    state.date = new Date(date)
  }
}

const actions = {
  // サーバー時間の設定
  setDate ({commit, state}, date) {
    setInterval(() => {
      if (state.date) {
        const newDate = state.date
        newDate.setSeconds(newDate.getSeconds() + 1)
        commit('setDate', newDate)
      } else {
        commit('setDate', date)
      }
    }, 1000)
  }
}

const getters = {
  getDisplayTime (state) {
    return state.date ? getDisplayTime(state.date) : ''
  },
  getDisplayDate (state) {
    return state.date ? getDisplayDate(state.date) : ''
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
