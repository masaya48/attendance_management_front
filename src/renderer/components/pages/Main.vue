<template>
  <el-container>
    <side-menu></side-menu>
    <el-container>
      <el-main>
        <my-header></my-header>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideMenu from '../molecules/SideMenu'
import MyHeader from '../molecules/Header'

export default {
  name: 'main-view',
  components: {
    'side-menu': SideMenu,
    'my-header': MyHeader
  }
}
</script>

<style lang="scss">
.el-container {
  height: 100%;
}
</style>
