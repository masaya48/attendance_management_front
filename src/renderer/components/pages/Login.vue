<template>
  <form class="login_form" @submit.prevent="doLogin">
    <el-input
      type="text"
      name="id"
      :class="{'input': true, 'is-danger': errors.has('id') }"
      v-model="id"
      v-validate="'required|alpha_dash'"
      placeholder="ID"></el-input>
    <div class="is-danger" v-if="errors.has('id')">{{errors.first('id')}}</div>
    <el-input
      type="password"
      name="password"
      :class="{'input': true, 'is-danger': errors.has('password') }"
      v-model="password"
      v-validate="'required|alpha_dash'"
      placeholder="password"></el-input>
    <div class="is-danger" v-if="errors.has('password')">{{errors.first('password')}}</div>
    <el-button
      type="primary"
      native-type="submit"
      :disabled="errors.count() !== 0"
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

<style lang="scss" scoped>
.login_form {
  background-image: url('~@/assets/images/desk.jpg');
}
</style>
