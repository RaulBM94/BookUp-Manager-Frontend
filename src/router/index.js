import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MailView from '../views/MailView.vue'
import AuthView from '../views/AuthView.vue'
import AboutView from '../views/AboutView.vue'
import PersonalView from '../views/PersonalView.vue'
import ReservationView from '../views/ReservationView.vue'
import AcceptReservation from '../views/AcceptReservation.vue'
import ReservationPage from '@/views/ReservationPage.vue'
// import ReservationSearch from '@/views/ReservationSearch.vue'
import ReservationSend from '@/views/ReservationSend.vue'
import ReservationSearch2 from '@/views/ReservationSearch2.vue'



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
    component: AuthView
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
    path: '/mail',
    name: 'mail',
    component: MailView
  },
  {
    path:'/reservation/create',
    name:'reservation',
    component:ReservationView
  },
  {
    path:'/acceptreservation',
    name:'accept',
    component:AcceptReservation,
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
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
