import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ja'
import VeeValidate, { Validator } from 'vee-validate'
import jaLocale from 'vee-validate/dist/locale/ja'

// fontawesome
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'

// normalize.css
import 'normalize.css/normalize.css'

import App from './App'
import router from './router'
import store from './store'
import httpClient from './services/http-client'
import validateConfig from './validator/validator-config'

import { headerTitleMixin } from './mixins'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(httpClient, { store })

Validator.localize('ja', jaLocale)
Vue.use(VeeValidate, validateConfig)

Vue.mixin(headerTitleMixin)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
