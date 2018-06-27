import getData from '@/api/getMonthlyData'
// import KEY from '@/constants/key'

const state = {
  monthlyData: {}
}

const mutations = {
  monthlyData (state, data) {
    state.monthlyData = data
  }
}

const actions = {
  getMonthlyData ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      getData.getMonthlyData(payload).then((res) => {
        const monthlyData = res.results.monthly_data
        commit('monthlyData', monthlyData)
        // localStorage.setItem(KEY.TOKEN, token)
        resolve()
      }).catch((error) => {
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
