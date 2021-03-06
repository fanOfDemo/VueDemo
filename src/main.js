// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入 vuex
import store from './store/'
import VueLazyload from 'vue-lazyload'

import VueMaterial from 'vue-material'
import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/vue-material.css'
import axios from 'axios';
Vue.prototype.$http = axios;

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: './static/img/loading.gif', //static 目录下的文件要用绝对地址引用 /static/[filename]
  attempt: 1,
  listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove']
});
//设置初识sessionStorage
window.sessionStorage.setItem('history', JSON.stringify(history));
// Vue.material.registerTheme('default', {
//   primary: 'blue',
//   accent: 'red',
//   warn: 'red',
//   background: 'grey'
// })
// Vue.material.setCurrentTheme('default')
Vue.use(VueMaterial)


new Vue({
  el: '#app',
  router,
  store, //把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  render(h) {
    return h(App);
  }
})
