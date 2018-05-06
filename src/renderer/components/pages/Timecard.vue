<template>
  <!-- please write html -->
  <section>
    <label>現在時刻：{{getNowTime}}</label>
    <el-button type="primary" @click="clickAtWork">出勤</el-button>
    <el-button type="primary" @click="clickLeaveWork">退勤</el-button>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'timecard',
  data () {
    return {
      nowTime: new Date()
    }
  },
  computed: {
    ...mapState('timecard', {
      isAtWork: state => state.isAtWork
    }),
    // 現在時刻を文字列化
    getNowTime: function () {
      const hour = `00${this.nowTime.getHours()}`.slice(-2)
      const minute = `00${this.nowTime.getMinutes()}`.slice(-2)
      const second = `00${this.nowTime.getSeconds()}`.slice(-2)
      return `${hour}:${minute}:${second}`
    }
  },
  created () {
    setInterval(() => {
      // 1秒毎にnowTimeを更新する
      this.nowTime = new Date()
    }, 1000)
  },
  methods: {
    ...mapActions({
      atWork: 'timecard/atWork',
      leaveWork: 'timecard/leaveWork'
    }),
    // 出勤
    clickAtWork () {
      this.atWork({
        nowTime: this.nowTime
      })
    },
    // 退勤
    clickLeaveWork () {
      this.leaveWork({
        nowTime: this.nowTime
      })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>