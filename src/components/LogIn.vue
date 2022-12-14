<template>
  <v-card class="mx-auto my-12" max-width="360" color="rgb(227, 212, 253)" >
    <v-card-title justify="center">Iniciar Sesión</v-card-title>
    <v-card-text>
      <v-row allign="center" class="mx-0 mb-3 colour">
        <v-text-field label="Email" :rules="emailRules" hide-details="auto" filled
          v-model="newUser.email"></v-text-field>
      </v-row>
      <v-row allign="center" class="mx-0 mb-3 colour">
        <v-text-field label="Contraseña" :type="visible ? 'text' : 'password'" hide-details="auto"
          append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'" @click:append="visible = !visible" filled
          v-model="newUser.password"></v-text-field>
      </v-row>
      <v-row justify="center" class="mx-0">
        <v-col cols="6">
          <a @click="toggleForm" class="mx-0 mt-3 mb-3">No tengo cuenta</a>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="6">
          <v-btn class="mx-2" dark large color="deep-purple" @click="login" elevation="2">
            Ingresar
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>

    </v-card-actions>
  </v-card>
</template>

<script>
import API from '../services/api'
import { useAuthStore, useRestaurantStore } from '../stores/stores'
export default {
  data() {
    return {
      emailRules: [
        value => !!value || 'Email Required.',
        value => value.match(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/) || 'Invalid Email Format'
      ],
      passwordRules: [value => value.length >= 5 || 'Password must be at least 5 characters long'],
      visible: false,
      newUser: {
        email: '',
        password: ''
      },
      authStore: useAuthStore(),
      restaurantStore: useRestaurantStore()
    }
  },
  methods: {
    toggleForm() {
      this.$emit("toggleForm")
    },
    async login() {
      const response = await API.login(this.newUser)
      if (response.error) {
        alert('wrong username/password') // No funciona
      } else {
        await this.authStore.login(response.token_value, response.email)
        const {name, direction, has_breakfast, has_dinner, has_lunch, num_tables} = await API.getRestaurant()
        this.restaurantStore.setRestaurantInfo(name, direction, has_breakfast, has_dinner, has_lunch, num_tables)
        this.$router.push({ name: 'personal' })
      }
    },
  }
}
</script>

<style scoped>
.colour {
  background-color: rgb(208, 188, 255)
}
</style>

