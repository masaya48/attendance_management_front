<template>
  <section class="attendance-management">
    <router-view></router-view>
    <dialog-outlet></dialog-outlet>
  </section>
</template>

<script>
import DialogOutlet from '@/components/organisms/dialog/DialogOutlet'

export default {
  name: 'attendance-management',
  components: {
    DialogOutlet
  }
}
</script>

<style lang="scss">
/* 全体に反映させたいstyle */
html, body, #app, .attendance-management {
  height: 100%;
}
body {
  color: #666;
}

h2 {
  margin: 0;
}

.is-danger {
  color: red;

  .el-input__inner {
    border-color: red;
  }
}
</style>
