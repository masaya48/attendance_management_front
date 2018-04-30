import Vue from 'vue'
import Router from 'vue-router'

// pages
import Login from '@/components/Pages/Login'
import Timecard from '@/components/Pages/Timecard'
import MonthlyData from '@/components/Pages/MonthlyData'
import ModificationRequest from '@components/Pages/ModificationRequest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/timecard',
      component: Timecard
    },
    {
      path: '/monthly-data',
      component: MonthlyData
    },
    {
      path: '/modification-request',
      component: ModificationRequest
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
