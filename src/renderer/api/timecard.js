import Vue from 'vue'
import * as API from '@/constants/api'

export default {
  // 出勤
  atWork (payload) {
    return Vue.http.post(API.AT_WORK, payload)
  },

  // 退勤
  leaveWork (payload) {
    return Vue.http.post(API.LEAVE_WORK, payload)
  }
}
