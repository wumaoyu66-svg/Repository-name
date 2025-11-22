import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/HomeView.vue' // 首页组件
import GongyingChanpin from '../views/GongyingChanpin.vue' // 供应产品组件
import RencaiZhaopin from '../views/RencaiZhaopin.vue' // 人才招聘组件
import Lianxiwomen from '../views/lianxiwomen.vue' // 联系方式组件
import CompanyIntroduction from '../views/CompanyIntroduction.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home // 首页路由对应 Home.vue
    },
    {
      path: '/gongyingchanpin',
      name: 'GongyingChanpin',
      component: GongyingChanpin // 供应产品路由对应 GongyingChanpin.vue
    },
    {
      path: '/rencaizhaopin',
      name: 'RencaiZhaopin',
      component: RencaiZhaopin// 供应产品路由对应 GongyingChanpin.vue
    },
     {
      path: '/lianxiwomen',
      name: 'lianxiwomen',
      component: Lianxiwomen// 供应产品路由对应 GongyingChanpin.vue
    },
    {
      path: '/CompanyIntroduction', // 注意：这里要和你 App.vue 中的 to 属性一致
      name: 'ContactInformation',
      component: CompanyIntroduction
    }
  ]
})