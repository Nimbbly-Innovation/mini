import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Company from './views/Company.vue'
import Register from './views/Register.vue'
import Mail from './views/Mail.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Company',
      name: 'Company',
      component: Company,
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/Mail',
      name: 'Mail',
      component: Mail,
    }
  ]
})