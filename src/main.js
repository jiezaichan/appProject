// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css'
import '@/assets/css/common.css'//公共样式

Vue.use(VueResource)
Vue.use(MuseUI)
Vue.config.productionTip = false
Vue.http.headers='Access-Control-Allow-Headers:x-requested-with,content-type'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
