
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import axios from 'axios'
import {store} from './store/store.js'


Vue.use(VueRouter)

axios.defaults.baseURL = "http://localhost:8082"


const router = new VueRouter({
  routes,
  mode:'history'
})

//全局守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path=='/login'||to.path=='/register'){
//     next();
//   }else{
//     alert('请先登录');
//     next('/login');
//   }
// })
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
