<template>
  <el-header>
    <el-row :gutter="20">
      <el-col :span="16">
        <h2>{{ headerTitle }}</h2>
      </el-col>
      <employee></employee>
    </el-row>
    <hr>
  </el-header>
</template>

<script>
import { mapState } from 'vuex'
import Employee from '../atoms/Employee'

export default {
  name: 'my-header',
  components: {
    'employee': Employee
  },
  computed: {
    ...mapState({
      headerTitle: state => state.common.headerTitle
    })
  }
}
</script>

<style lang="scss" scoped>

</style>

