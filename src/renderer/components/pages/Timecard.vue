<template>
  <section class="timecard">
    <timer
      :time="getTime"
      :date="getDate"
    ></timer>
    <div class="timecard__button-container">
      <el-button
        class="timecard__button-container--button"
        v-if="!isAttendance"
        type="primary"
        @click="clickAtWork">出勤</el-button>
      <el-button
        class="timecard__button-container--button"
        v-else
        type="primary"
        @click="clickLeaveWork">退勤</el-button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Timer from '../atoms/Timer'
import { getDisplayTime, getDisplayDate } from '@/services/time'

export default {
  name: 'timecard',
  headerTitle: 'タイムカード',
  components: {
    Timer
  },
  data () {
    return {
      nowTime: new Date()
    }
  },
  computed: {
    ...mapState('timecard', {
      isAttendance: state => state.isAttendance
    }),
    // 時間を取得
    getTime () {
      return getDisplayTime(this.nowTime)
    },
    // 日付を取得
    // 表示時に日付またぎを考慮してcomputedに配置
    getDate () {
      return getDisplayDate(this.nowTime)
    }
  },
  created () {
    setInterval(() => {
      // 1秒毎にnowTimeを更新する
      this.nowTime = new Date()
    }, 1000)

    // 出勤確認を行う
    this.checkAttendance()
  },
  methods: {
    ...mapActions({
      atWork: 'timecard/atWork',
      leaveWork: 'timecard/leaveWork',
      checkAttendance: 'timecard/checkAttendance'
    }),
    // 出勤
    clickAtWork () {
      this.atWork({
        attendance_time: this.nowTime
      })
    },
    // 退勤
    clickLeaveWork () {
      this.leaveWork({
        leave_time: this.nowTime
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.timecard {
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &__button-container {
    width: 100%;
    text-align: center;

    &--button {
      width: 50%;
    }
  }
}
</style>
