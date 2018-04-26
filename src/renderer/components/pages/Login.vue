<template>
  <section>
    <input type="text" v-model="id" placeholder="ID">
    <input type="password" v-model="password" placeholder="password">
    <el-button type="primary" @click="login">Login</el-button>

    <div v-if="auth">auth!!!!!!</div>
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

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
  updated: function () {
    this.logined()
  },
  methods: {
    ...mapActions({
      login: {
        type: 'auth/login',
        payload: {
          id: this.id,
          password: this.password
        }
      }
    }),
    ...mapMutations({
      //
    }),
    logined: function () {
      if (this.auth) {
        console.log('logined')
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
