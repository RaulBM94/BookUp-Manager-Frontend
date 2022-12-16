<template>
  <div>
    <svg
      class="vector"
      width="1921"
      height="340"
      viewBox="0 0 1921 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 293.561L46.4242 300.551C91.2475 307.541 182.495 321.52 273.742 279.582C366.591 237.645 457.838 139.791 549.086 153.77C640.333 167.749 731.581 293.561 822.828 328.509C914.076 363.457 1006.92 307.541 1098.17 307.541C1189.42 307.541 1280.67 363.457 1371.91 328.509C1463.16 293.561 1554.41 167.749 1647.26 146.781C1738.5 125.812 1829.75 209.687 1874.58 251.624L1921 293.561V0H1874.58C1829.75 0 1738.5 0 1647.26 0C1554.41 0 1463.16 0 1371.91 0C1280.67 0 1189.42 0 1098.17 0C1006.92 0 914.076 0 822.828 0C731.581 0 640.333 0 549.086 0C457.838 0 366.591 0 273.742 0C182.495 0 91.2475 0 46.4242 0H0V293.561Z"
        fill="#6D27C9"
      />
    </svg>
    <v-card class="mx-auto my-12" max-width="360" color="rgb(227, 212, 253)">
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
  </div>
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
.colour {
  background-color: rgb(208, 188, 255)
}
.vector {
  position: absolute;
  left: 0px;
  top: 0px;
  overflow: visible;
}
</style>

