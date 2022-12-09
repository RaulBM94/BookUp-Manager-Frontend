import Vue from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'

//Vue.use(PiniaVuePlugin)
const pinia = createPinia()
// const app = Vue.createApp(App)

Vue.use(pinia)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  pinia,
  render: h => h(App)
}).$mount('#app')
