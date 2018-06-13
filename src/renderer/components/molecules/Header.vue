<template>
  <el-header>
    <el-row :gutter="20">
      <el-col :span="16">
        <h2>タイトルが入るよ</h2>
      </el-col>
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

