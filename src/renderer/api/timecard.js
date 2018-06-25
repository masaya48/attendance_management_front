import Vue from 'vue'
import * as API from '@/constants/api'

export default {
  // 出勤
  atWork () {
    return Vue.http.post(API.AT_WORK)
  },

  // 退勤
  leaveWork () {
    return Vue.http.post(API.LEAVE_WORK)
  },

  // 出勤確認
  checkAttendance () {
    return Vue.http.post(API.CHECK_ATTENDANCE)
  }
}
