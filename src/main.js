import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import App from './App.vue'

// mock开关
const mock = false;
if (mock) {
  require('./mock/api');
}

// 根据前端的跨域方式做调整
// 写接口时可以忽略写/api
axios.defaults.baseURL = '/api';
// 请求接口数据的时间不超过8s
axios.defaults.timeout = 8000;

// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) { // 没有发生错误
    return res.data
  } else if (res.status == 10) { // 未登陆直接跳转到登录页面
    window.location.href = '/#/login';
    return Promise.reject(res) // 抛出错误信息
  } else {
    Message.warning(res.msg)
    return Promise.reject(res)
  }
}, error => {
  let res = error.response;
  Message.error(res.data.message)
  return Promise.reject(error)
});

// 可以不用使用Vue.prototype.$http = axios;安装axios
Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.prototype.$message = Message;
// 产品环境不进行报错
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')