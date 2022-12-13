import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'

const pinia = createPinia()
Vue.use(PiniaVuePlugin)
// const app = Vue.createApp(App)


new Vue({
  router,
  vuetify,
  pinia,
  render: (h) => h(App)
}).$mount('#app')
