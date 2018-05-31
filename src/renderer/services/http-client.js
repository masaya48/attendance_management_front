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
    // TODO intercept something
    // store.dispatch('notification/show', {title: 'エラー', message: 'エラーですよ'})
    return Promise.reject(error)
  })

  Vue.http = Vue.prototype.$http = client
}
