import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js' // 导入路由配置（路径根据实际文件位置调整）

Vue.config.productionTip = false

new Vue({
  router, // 注册路由实例，让整个应用支持路由功能
  render: h => h(App),
}).$mount('#app')