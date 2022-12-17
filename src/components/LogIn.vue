<template>
  <div>
    <v-alert type="error" width="40vw" :value="alert1" transition="slide-x-transition" class="alert" border="top"
      colored-border color="red">
      Contraseña o usuario incorrectos
    </v-alert>
    <v-alert type="warning" width="40vw" :value="alert2" transition="slide-x-transition" class="alert" border="top"
      colored-border color="rgb(237, 208, 19)">
      Los datos no se han introducido correctamente
    </v-alert>
    <v-form ref="form" v-model="valid" class="form">
      <v-card class="mx-auto card" max-width="360" color="rgb(227, 212, 253)">
        <v-card-title justify="center">Iniciar Sesión</v-card-title>
        <v-card-text>
          <v-row allign="center" class="mx-0 mb-3 colour">
            <v-text-field label="Email" hide-details="auto" filled v-model="newUser.email" :rules="[rules.email]"  type="email"></v-text-field>
          </v-row>
          <v-row allign="center" class="mx-0 mb-3 colour">
            <v-text-field label="Contraseña" :type="visible ? 'text' : 'password'" hide-details="auto"
              :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'" @click:append="visible = !visible" filled
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
      </v-card>
    </v-form>
  </div>
</template>

<script>
import API from '../services/api'
import { useAuthStore, useRestaurantStore } from '../stores/stores'
export default {
  data() {
    return {
      valid: true,
      visible: false,
      newUser: {
        email: '',
        password: ''
      },
      authStore: useAuthStore(),
      restaurantStore: useRestaurantStore(),
      alert1: false,
      alert2: false,
      rules:{
        email: value => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'El email no es válido'
        },
      }
    }
  },
  methods: {
    toggleForm() {
      this.$emit("toggleForm")
    },
    async login() {
      const response = await API.login(this.newUser)
      if (response.error) {
        if (this.newUser.email === '' || this.newUser.password === '') {
          this.alert2 = alert
          window.setInterval(() => {
            this.alert2 = false;
          }, 2000)
        } else {
          this.alert1 = alert
          window.setInterval(() => {
            this.alert1 = false;
          }, 2000)
        }

      } else {
        await this.authStore.login(response.token_value, response.email, response.name)
        const { name, direction, has_breakfast, has_dinner, has_lunch, num_tables } = await API.getRestaurant()
        this.restaurantStore.setRestaurantInfo(name, direction, has_breakfast, has_dinner, has_lunch, num_tables)
        this.$router.push({ name: 'personal' })
      }
    },
  }
}
</script>

<style scoped>
.alert {
  position: fixed;
  top: 68px;
  left: 0;
  z-index: 2;
}

.card {
  margin-top: 80px;
}

.colour {
  background-color: rgb(208, 188, 255)
}
.form {
  height: 100vh;
}
</style>

