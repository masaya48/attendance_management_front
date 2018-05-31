import axios from 'axios'
// import store from '@/store'

const client = axios.create({
  baseURL: 'http://localhost:3000'
})

export default (Vue, { store }) => {
  client.interceptors.request.use((config) => {
    return config
  }, (error) => {
    // TODO intercept something
    return Promise.reject(error)
  })

  client.interceptors.response.use((response) => {
    // TODO intercept something
    return response.data
  }, (error) => {
    // エラー共通処理
    const { message, status } = error.response.data
    store.dispatch('notification/show', {title: status, message: message, type: 'error'})
    return Promise.reject(error)
  })

  Vue.http = Vue.prototype.$http = client
}
