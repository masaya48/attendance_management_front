import axios from 'axios'
import * as API from '../constants/api'
import KEY from '../constants/key'

// ルートURL
const baseURL = 'http://localhost:3000'

const setRequestInterceptor = (client) => {
  // リクエストのインターセプター
  client.interceptors.request.use((config) => {
    if (config.url.indexOf(API.NO_TOKEN) === -1) {
      // urlがpublic以外token付与
      const token = localStorage.getItem(KEY.TOKEN)
      config.headers.Authorization = token
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })
}

const setResponseInterceptor = (client, { store }) => {
  // レスポンスのインターセプター
  client.interceptors.response.use((response) => {
    if (!store.state.common.date) {
      // サーバー時間を保持
      store.dispatch('setDate', new Date(response.headers.date))
    }
    return response.data
  }, (error) => {
    // エラー共通処理
    const { message, status } = error.response.data
    store.dispatch('notification/notification', {title: status, message: message, type: 'error'})
    return Promise.reject(error)
  })
}

const setInterceptor = (client, { store }) => {
  // リクエストのインターセプター登録
  setRequestInterceptor(client)

  // レスポンスのインターセプター登録
  setResponseInterceptor(client, { store })
}

const getClient = ({ store }) => {
  // 共通用axiosインスタンス生成
  const client = axios.create({
    baseURL: baseURL
  })
  // インターセプター設定
  setInterceptor(client, { store })
  return client
}

const getExcelClient = ({ store }) => {
  // Excel用axiosインスタンス生成
  const client = axios.create({
    baseURL: baseURL,
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/vnd.ms-excel'
    }
  })
  // インターセプター設定
  setInterceptor(client, { store })
  return client
}

export default (Vue, { store }) => {
  // 共通用axios登録
  Vue.http = Vue.prototype.$http = getClient({ store })
  // Excel用axios登録
  Vue.http4Excel = Vue.prototype.$http4Excel = getExcelClient({ store })
}
