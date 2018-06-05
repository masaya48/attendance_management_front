<template>
  <el-container>
    <SideMenu></SideMenu>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideMenu from '../organisms/SideMenu'

export default {
  name: 'main-view',
  components: {
    SideMenu
  }
}
</script>

<style lang="scss">
.el-container {
  height: 100%;
}
</style>
