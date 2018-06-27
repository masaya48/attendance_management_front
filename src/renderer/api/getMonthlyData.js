import Vue from 'vue'
import * as API from '@/constants/api'

export default {
  // 月次データ
  getMonthlyData (payload) {
    return Vue.http.post(API.GET_MONTHLY_DATA, payload)
  }
}
