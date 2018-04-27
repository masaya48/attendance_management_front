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
// import router from '@/router'

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
  watch: {
    auth () {
      if (this.auth) {
        // router.push('timecard')
        console.log('認証済み')
      }
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
      })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
