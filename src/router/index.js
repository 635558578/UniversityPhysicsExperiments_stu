import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import register from '../components/register.vue'
import daxuewulishiyan from '../components/daxuewulishiyan.vue'
import danbai from '../components/danbai.vue'
// import trends from '../components/trends.vue'
import home from '../components/home.vue'
import shiboqi from '../components/shiboqi.vue'
import oumubiao from '../components/oumubiao.vue'
import wanyongbiao from '../components/wanyongbiao.vue'
import dianBiaoGaiZhuang from '../components/dianBiaoGaiZhuang.vue'
import huoer from '../components/huoer.vue'
import XiangShi from '../components/xiangShi.vue'
import zizushi from '../components/zizushi.vue'
import axios from 'axios'
import { Message } from 'element-ui'
Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
    { path: '/register', component: register },
    { path: '/daxuewulishiyan', component: daxuewulishiyan },
    { path: '/danbai', component: danbai },
    { path: '/home', component: home, },
    { path: '/shiboqi', component: shiboqi, },
    { path: '/oumubiao', component: oumubiao, },
    { path: '/wanyongbiao', component: wanyongbiao, },
    { path: '/dianBiaoGaiZhuang', component: dianBiaoGaiZhuang, },
    { path: '/huoer', component: huoer, },
    { path: '/XiangShi', component: XiangShi, },
    { path: '/zizushi', component: zizushi, }
]


const router = new VueRouter({
        routes
    })
    //路由守卫
  router.beforeEach((to, from, next) => {
    if (to.path == '/login' || to.path == '/register') {
        next();
    } else if (window.localStorage.getItem("token")) {
        next();
    } else {
        Message.error('请先登录');
        next('/login')
    }
})


export default router
