<template>
  <section class="timecard">
    <timer></timer>
    <div class="timecard__button-container">
      <el-button
        class="timecard__button-container--button"
        :disabled="isAttendance"
        type="primary"
        @click="handleAtWork">出勤</el-button>
      <el-button
        class="timecard__button-container--button"
        :disabled="!isAttendance"
        type="primary"
        @click="handleLeaveWork">退勤</el-button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Timer from '../atoms/Timer'

export default {
  name: 'timecard',
  headerTitle: 'タイムカード',
  components: {
    Timer
  },
  data () {
    return {
      //
    }
  },
  computed: {
    ...mapState('timecard', {
      isAttendance: state => state.isAttendance
    })
  },
  created () {
    // 出勤確認を行う
    this.checkAttendance()
  },
  methods: {
    ...mapActions({
      atWork: 'timecard/atWork',
      leaveWork: 'timecard/leaveWork',
      checkAttendance: 'timecard/checkAttendance',
      message: 'notification/message'
    }),
    // 出勤
    handleAtWork () {
      this.atWork().then(() => {
        this.message({
          type: 'success',
          message: '出勤しました'
        })
      })
    },
    // 退勤
    handleLeaveWork () {
      this.leaveWork().then(() => {
        this.message({
          type: 'success',
          message: '退勤しました'
        })
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
    display: inline-flex;

    &--button {
      width: 50%;
    }
  }
}
</style>
