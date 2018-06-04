import axios from 'axios'
import * as API from '../constants/api'
import KEY from '../constants/key'

const client = axios.create({
  baseURL: 'http://localhost:3000'
})

export default (Vue, { store }) => {
  client.interceptors.request.use((config) => {
    console.log(API.NO_TOKEN)
    if (config.url.indexOf(API.NO_TOKEN) === -1) {
      // urlがpublic以外token付与
      const token = localStorage.getItem(KEY.TOKEN)
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  client.interceptors.response.use((response) => {
    return response.data
  }, (error) => {
    // エラー共通処理
    const { message, status } = error.response.data
    store.dispatch('notification/show', {title: status, message: message, type: 'error'})
    return Promise.reject(error)
  })

  Vue.http = Vue.prototype.$http = client
}
