import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入路由组件
import Login from '../views/Login'
import Login2 from '../views/Login2'
import Home from '../views/Home'
import HomeHeader from '../views/home/HomeHeader.vue'

const routes = [
  {
    path: '/',
    name: 'Login2',
    component: Login2,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      isAuth:true,
    }, 
    // isAuth : 是否需要登录
    children:[
      {
        name:'header',
        path:'header',
        component:HomeHeader
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
