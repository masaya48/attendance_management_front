<template>
  <!-- please write html -->
  <section>
    <el-tabs type="card">
      <el-tab-pane label="終業実績">
        <MonthlyData></MonthlyData>
      </el-tab-pane>
      <el-tab-pane label="休暇登録">休暇登録</el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
// import { mapActions, mapMutations, mapState } from 'vuex'

import MonthlyData from '../organisms/MonthlyDataTable'
export default {
  name: 'monthly-data',
  headerTitle: '月次データ',
  data () {
    return {
    }
  },
  components: {
    MonthlyData
  }
}
</script>

<style lang="scss" scoped>

</style>