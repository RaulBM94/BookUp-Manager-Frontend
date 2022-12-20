import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView2 from '../views/HomeView2.vue'
import AuthView from '../views/AuthView.vue'
import AuthViewStart from '../views/AuthViewStart.vue'
import AboutView from '../views/AboutView.vue'
import PersonalView from '../views/PersonalView.vue'
import ReservationView from '../views/ReservationView.vue'
import ReservationPage from '@/views/ReservationPage.vue'
import ReservationSend from '@/views/ReservationSend.vue'
import ReservationSearch2 from '@/views/ReservationSearch2.vue'
import Success from '../views/SuccessPage.vue'
import ErrorPage from '../views/ErrorPage.vue'

import ProfileView from '@/views/ProfileView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView2
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView

  },
  {
    path: '/login',
    name: 'login',
    component: AuthView
  },
  {
    path: '/login-start',
    name: 'login-start',
    component: AuthViewStart
  },

  {
    path: '/personal',
    name: 'personal',
    component: PersonalView
  },
  {
    path: '/reservation',
    name: 'reservation-home',
    component: ReservationPage
  },
  {
    path:'/reservation/create',
    name:'reservation',
    component:ReservationView
  },
  {
    path:'/reservation/search',
    name:'reservation-search',
    component:ReservationSearch2
  },
  {
    path:'/reservation/send',
    name:'reservation-send',
    component:ReservationSend
  },
  {
    path:'/error',
    name:'Error',
    component:ErrorPage
  },
  {
    path:'/success',
    name:'Success',
    component:Success
  },
  {
    path:'/profile',
    name:'profile',
    component: ProfileView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
