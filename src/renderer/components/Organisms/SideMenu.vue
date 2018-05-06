<template>
  <el-aside width="55px" style="background-color: rgb(238, 241, 246)">
    <el-menu>
      <el-tooltip content="Top center" placement="bottom" effect="light">
        <router-link to="/timecard">
          <el-menu-item index="1">
            <i class="far fa-clock"></i>
          </el-menu-item>
        </router-link>
      </el-tooltip>
      <router-link to="/monthly-data">
        <el-menu-item index="2">
          <i class="far fa-calendar-alt"></i>
        </el-menu-item>
      </router-link>
      <router-link to="/modification-request">
        <el-menu-item index="3">
          <i class="fab fa-telegram-plane"></i>
        </el-menu-item>
      </router-link>
      <el-menu-item index="4" @click="doLogout">
        <i class="fas fa-sign-out-alt"></i>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapActions } from 'vuex'
import router from '@/router'

export default {
  name: 'side-menu',
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    }),
    // ログアウト処理
    doLogout () {
      this.logout().then(() => {
        // 成功
        router.push('/')
        localStorage.clear()
      }).catch(() => {
        // 失敗
        console.log('error')
      })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
