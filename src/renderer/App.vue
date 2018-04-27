<template>
  <el-container id="app">
    <side-menu></side-menu>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import SideMenu from './components/Organisms/SideMenu'

  export default {
    name: 'attendance-management',
    components: {
      SideMenu
    }
  }
</script>

<style>
  /* CSS */
</style>
