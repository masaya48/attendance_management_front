<template>
  <form @submit.prevent="doLogin">
    <el-input
      type="text"
      name="id"
      v-model="id"
      v-validate="'required|alpha_dash'"
      placeholder="ID"></el-input>
    <span>{{errors.first('id')}}</span>
    <el-input
      type="password"
      name="password"
      v-model="password"
      v-validate="'required|alpha_dash'"
      placeholder="password"></el-input>
    <span>{{errors.first('password')}}</span>
    <el-button
      type="primary"
      native-type="submit"
    >Login</el-button>

    <div v-if="auth">auth!!!!!!</div>
  </form>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import router from '@/router'
import KEY from '@/constants/key'

export default {
  name: 'login',
  data () {
    return {
      id: '',
      password: ''
    }
  },
  computed: {
    ...mapState('auth', {
      token: state => state.token,
      auth: state => state.auth
    })
  },
  created () {
    const token = localStorage.getItem(KEY.TOKEN)
    if (token) {
      // 認証済
      router.replace('timecard')
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    ...mapMutations({
      logout: 'auth/logout'
    }),
    // ログイン処理
    doLogin () {
      this.login({
        id: this.id,
        password: this.password
      }).then(() => {
        // 成功
        console.log('success')
        localStorage.setItem(KEY.TOKEN, this.token)
        router.push('timecard')
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
