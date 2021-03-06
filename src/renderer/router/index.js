import Vue from 'vue'
import Router from 'vue-router'

// pages
import Login from '@/components/pages/Login'
import Main from '@/components/pages/Main'
import Timecard from '@/components/pages/Timecard'
import MonthlyData from '@/components/pages/MonthlyData'
import ModificationRequest from '@/components/pages/ModificationRequest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/main',
      component: Main,
      children: [
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
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
