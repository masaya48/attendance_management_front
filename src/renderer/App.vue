<template>
  <el-container id="app">
    <side-menu v-if="auth"></side-menu>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideMenu from './components/organisms/SideMenu'
import { mapState } from 'vuex'

export default {
  name: 'attendance-management',
  components: {
    SideMenu
  },
  computed: {
    ...mapState('auth', {
      auth: state => state.auth
    })
  }
}
</script>

<style lang="scss">
/* CSS */
html, body, #app {
  height: 100%;
}
body {
  margin: 0;
}

.is-danger {
  border-color: red;
  color: red;
}
</style>
