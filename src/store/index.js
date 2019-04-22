// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import count from './modules/count'

Vue.use(Vuex)

// 自动导入所有模块
// const files = require.context('./modules', false, /\.js$/)
// const modules = {}
//
// files.keys().forEach(key => {
//   modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
// })

export default new Vuex.Store({
  modules: {
    count
  },
  getters
})
