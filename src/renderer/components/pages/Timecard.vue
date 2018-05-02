<template>
  <!-- please write html -->
  <section>
    <label>現在時刻：{{getNowTime}}</label>
  </section>
</template>

<script>
// import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'timecard',
  data () {
    return {
      nowTime: new Date()
    }
  },
  computed: {
    getNowTime: function () {
      const hour = `00${this.nowTime.getHours()}`.slice(-2)
      const minute = `00${this.nowTime.getMinutes()}`.slice(-2)
      const second = `00${this.nowTime.getSeconds()}`.slice(-2)
      return `${hour}:${minute}:${second}`
    }
  },
  created () {
    setInterval(() => {
      this.nowTime = new Date()
    }, 1000)
  }
}
</script>

<style lang="sass" scoped>

</style>