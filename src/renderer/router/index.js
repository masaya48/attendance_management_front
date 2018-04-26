import Vue from 'vue'
import Router from 'vue-router'

// pages
import Login from '@/components/Pages/Login'
import Timecard from '@/components/Pages/Timecard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/timecard',
      name: 'timecard',
      component: Timecard
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
