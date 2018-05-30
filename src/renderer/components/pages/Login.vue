<template>
  <section class="login-container">
    <form class="login-container_form" @submit.prevent="doLogin">
      <el-input
        type="text"
        name="id"
        :class="{'input': true, 'is-danger': errors.has('id') }"
        v-model="id"
        v-validate="'required'"
        placeholder="従業員番号"
        data-vv-as="従業員番号"></el-input>
      <div class="is-danger" v-if="errors.has('id')">{{errors.first('id')}}</div>
      <el-input
        type="password"
        name="password"
        :class="{'input': true, 'is-danger': errors.has('password') }"
        v-model="password"
        v-validate="'required'"
        placeholder="パスワード"
        data-vv-as="パスワード"></el-input>
      <div class="is-danger" v-if="errors.has('password')">{{errors.first('password')}}</div>
      <el-button
        type="primary"
        native-type="submit"
        :disabled="errors.count() !== 0"
      >Login</el-button>
    </form>
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
    // ログイン処理
    doLogin () {
      this.login({
        employee_no: this.id,
        password: this.password
      }).then(() => {
        router.push('timecard')
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  background-image: url('~@/assets/images/desk.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  &_form {
    width: 60%;
    height: 30%;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
