<template>
  <el-col :span="8" align="middle" class="employee-info">
    <i class="fas fa-user-circle fa-3x"></i>
    <div class="employee-info__label-container">
      <label class="employee-info__label-container--no-label">No：{{employee.no}}</label> 
      <label class="employee-info__label-container--name-label">名前：{{employee.name}}</label>
    </div>
  </el-col>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'employee',
  computed: {
    ...mapState('auth', {
      employee: state => state.employee
    })
  }
}
</script>

<style lang="scss" scoped>

.employee-info {
  display: inline-flex;
  justify-content: flex-end;
  color: #666;

  &__label-container {
    display: inline-flex;
    flex-direction: column;

    &--no-label {
      text-align: initial;
      margin-left: 22px;
    }
    &--name-label {
      margin-left: 10px;
      white-space: nowrap;
    }
  }
}

</style>

