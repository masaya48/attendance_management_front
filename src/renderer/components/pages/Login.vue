<template>
  <section>
    <input type="text" v-model="id" placeholder="ID">
    <input type="password" v-model="password" placeholder="password">
    <el-button type="primary" @click="doLogin">Login</el-button>

    <div v-if="auth">auth!!!!!!</div>
  </section>
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
    doLogin () {
      this.login({
        id: this.id,
        password: this.password
      }).then(() => {
        console.log('success')
        localStorage.setItem(KEY.TOKEN, this.token)
        router.push('timecard')
      }).catch(() => {
        console.log('error')
      })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
