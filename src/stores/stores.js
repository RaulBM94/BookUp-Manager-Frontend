import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core' // sincroniza pinia con localStorage

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: useStorage('token', null),
      email: useStorage('email', null)
    }
  },
  getters: {
    isLoggedIn() {
      return this.token != null
    },
    userToken() {
      return this.token
    }
  },
  actions: {
    logout() {
      this.token = null
      this.email = null
    },
    login(token, email, role, id) {
      this.token = token
      this.email = email
    },
  },
})