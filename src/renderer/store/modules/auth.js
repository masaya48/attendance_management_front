import auth from '@/api/auth'
import KEY from '@/constants/key'

const state = {
  auth: false,
  token: '',
  employee: {
    name: '',
    no: ''
  }
}

const mutations = {
  login (state, res) {
    state.token = res.token
    state.auth = true
    state.employee = res.employee
  },
  logout (state) {
    state.token = ''
    state.auth = false
  }
}

const actions = {
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      auth.login(payload).then((res) => {
        const token = res.results.token
        commit('login', res.results)
        localStorage.setItem(KEY.TOKEN, token)
        localStorage.setItem(KEY.EMPLOYEE_NO, res.results.employee.no)
        localStorage.setItem(KEY.EMPLOYEE_NAME, res.results.employee.name)
        resolve()
      }).catch((error) => {
        reject(error)
      })
    })
  },
  logout ({ commit }) {
    commit('logout')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
