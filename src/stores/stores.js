import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core' // sincroniza pinia con localStorage
//AUTENTICACIÓN
export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: useStorage('token_value', null),
      email: useStorage('email', null),
      name: useStorage('name', null)
    }
  },
  getters: {
    isLoggedIn() {
      return this.token != null
    },
    userToken() {
      return this.token
    },
    userName() {
      console.log(this.name)
      return this.name
    }
  },
  actions: {
    logout() {
      this.token = null
      this.email = null
      this.name = null
    },
    login(token, email, name) {
      this.token = token
      this.email = email
      this.name = name
    }
  },
})
//RESTAURANTE
export const useRestaurantStore = defineStore('restaurant', {
  state: () => {
    return {
      restaurant_name: useStorage('restaurant_name', null),
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
        restaurant_name: this.restaurant_name,
        direction: this.direction,
        has_breakfast: this.has_breakfast,
        has_lunch: this.has_lunch,
        has_dinner: this.has_dinner,
        num_tables: this.num_tables
      }
    }
  },
  actions: {
    setRestaurantInfo(restaurant_name, direction, has_breakfast, has_dinner, has_lunch, num_tables) {
      this.restaurant_name = restaurant_name
      this.direction = direction
      this.has_breakfast = has_breakfast
      this.has_lunch = has_lunch
      this.has_dinner = has_dinner
      this.num_tables = num_tables
    }
  }
})
//RECORDATORIO
export const useReminderStore = defineStore('reminder', {
  state: () => {
    return {
      name: useStorage('customer_name', null),
      email: useStorage('customer_email', null),
      date: useStorage('date', null),
      hour:useStorage('hour', null),
      people: useStorage('people', null),
    }
  },
  getters: {
    getEmail() {
      return {
        email: this.email,
      }
    },
    getName() {
      return {
        name: this.name,
      }
    },
    getDate() {
      return {
        date: this.date,
      }
    },
    getHour() {
      return {
        hour: this.hour,
      }
    },
    getPeople() {
      return {
       people: this.people,
      }
    },
  },
  actions: {
    setCustomerInfo(email, name, date, hour, people) {
      this.email = email,
      this.name = name,
      this.date = date,
      this.hour = hour,
      this.people = people
    }
  }
})