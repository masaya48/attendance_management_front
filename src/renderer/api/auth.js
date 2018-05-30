import Vue from 'vue'
import * as API from '@/constants/api'

export default {
  // ログイン
  login (payload) {
    return Vue.http.post(API.LOGIN, payload)
  }
}