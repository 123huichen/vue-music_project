import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import store from './store'

import './common/stylus/index.styl'

Vue.config.productionTip = false
fastclick.attach(document.body)

Vue.use(VueLazyload, {
  error: require('./common/image/default.png'), //错误图片替换路径
  loading: require('./common/image/default.png'), //加载图片路径
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
