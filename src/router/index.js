import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入路由组件
import Login from '../views/Login'
import Home from '../views/Home'
import HomeHeader from '../views/home/HomeHeader.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
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
