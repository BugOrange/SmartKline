// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueJsonp from 'vue-jsonp'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import Bmob from "hydrogen-js-sdk"
import toastRegistry from './pages/common/Toast/index'
import validater from './js/tools/tools.js'
import  { AlertPlugin, LoadingPlugin, ToastPlugin ,ConfirmPlugin, XHeader} from 'vux'


//vux组件全局注册
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)

Vue.component('x-header', XHeader)

//网络库注册
Vue.use(VueJsonp)

//自定义组件注册
Vue.use(toastRegistry)

//Bmob组件注册
Bmob.initialize("c9037beea609569b8dc2e896fd6de4b3", "25b7298a31541fd3c58e2ce28c0799dc")
Vue.prototype.Bmob = Bmob

//定义成对象方便调用
Vue.prototype.validater = validater
Vue.prototype.apiAppid = '560d2f61da546eee0ea2b506ba572508'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Array.prototype.indexOf = function (val) {
  for (var i = 0; i < this.length; i++) {
      if (this[i] == val) return i;
  }
  return -1;
}