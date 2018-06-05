<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'attendance-management'
}
</script>

<style lang="scss">
/* 全体に反映させたいstyle */
html, body, #app {
  height: 100%;
}
body {
  margin: 0;
}

.is-danger {
  color: red;

  .el-input__inner {
    border-color: red;
  }
}
</style>
