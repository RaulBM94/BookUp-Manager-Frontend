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
    login(token, email) {
      this.token = token
      this.email = email
    },
  },
})
export const useRestaurantStore = defineStore('restaurant', {
  state: () => {
    return {
      name: useStorage('name', null),
      direction: useStorage('direction', null),
      has_breakfast: useStorage('has_breakfast', null),
      has_lunch: useStorage('has_lunch', null),
      has_dinner: useStorage('has_lunch', null),
      num_tables: useStorage('num_tables', null)
    }
  },
  getters: {
    getRestaurantInfo() {
      return {
        name: this.name,
        direction: this.direction,
        has_breakfast: this.has_breakfast,
        has_lunch: this.has_lunch,
        has_dinner: this.has_dinner,
        num_tables: this.num_tables
      }
    }
  },
  actions: {
    setRestaurantInfo(name, direction, has_breakfast, has_dinner, has_lunch, num_tables) {
      this.name = name
      this.direction = direction
      this.has_breakfast = has_breakfast
      this.has_lunch = has_lunch
      this.has_dinner = has_dinner
      this.num_tables = num_tables
    }
  }
})