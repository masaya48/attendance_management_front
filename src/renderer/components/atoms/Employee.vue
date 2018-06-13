<template>
  <el-col :span="8" align="middle" class="employee-info">
    <i class="fas fa-user-circle fa-3x"></i>
    <div class="employee-info__label-container">
      <strong class="employee-info__label-container--name-label">{{employee.name}}</strong>
      <small class="employee-info__label-container--no-label">No {{employee.no}}</small>
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
    justify-content: flex-end;

    &--no-label {
      text-align: end;
    }
    &--name-label {
      margin-left: 10px;
      white-space: nowrap;
    }
  }
}

</style>

