import Vue from 'vue'
import App from '@/App'
import store from '@/store'

Vue.config.productionTip = false
// 这一步很重要，否则mapState等vuex的辅助函数不可用
Vue.prototype.$store = store

const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
