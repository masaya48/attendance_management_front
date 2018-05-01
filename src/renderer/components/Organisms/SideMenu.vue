<template>
  <el-aside width="70px" style="background-color: rgb(238, 241, 246)">
    <el-menu>
      <el-tooltip content="Top center" placement="bottom" effect="light">
        <router-link to="/timecard">
          <el-menu-item index="1">
            <i class="el-icon-time"></i>
          </el-menu-item>
        </router-link>
      </el-tooltip>
      <router-link to="/monthly-data">
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
        </el-menu-item>
      </router-link>
      <router-link to="/modification-request">
        <el-menu-item index="3">
          <i class="el-icon-edit-outline"></i>
        </el-menu-item>
      </router-link>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'side-menu'
}
</script>

<style lang="sass" scoped>

</style>
