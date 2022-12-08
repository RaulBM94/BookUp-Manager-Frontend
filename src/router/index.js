import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MailView from '../views/MailView.vue'
import LoginView from '../views/LoginView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView

  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/mail',
    name: 'mail',
    component: MailView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
