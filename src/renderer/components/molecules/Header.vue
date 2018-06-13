<template>
  <el-header>
    <el-row :gutter="20">
      <el-col :span="16">タイトルが入るよ</el-col>
      <employee></employee>
    </el-row>
  </el-header>
</template>

<script>
import Employee from '../atoms/Employee'

export default {
  name: 'my-header',
  components: {
    'employee': Employee
  }
}
</script>

<style lang="scss" scoped>

</style>

