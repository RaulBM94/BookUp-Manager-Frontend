<template>
  <div class="container">
    <form>
      <section v-if="step === 1">
        <v-card class="mx-auto my-12" max-width="360">
          <v-card-title>Paso 1: Regístrate como usuario</v-card-title>
          <v-card-text>
            <v-row allign="center" class="colour mx-0 mb-3">
              <v-text-field label="Nombre" hide-details="auto" filled v-model="newUser.name"></v-text-field>
            </v-row>
            <v-row allign="center" class="colour mx-0 mb-3">
              <v-text-field label="Apellido" hide-details="auto" filled v-model="newUser.surname"></v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0 mb-3 colour">
              <v-text-field label="Email" hide-details="auto" filled v-model="newUser.email"></v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0 mb-3 colour">
              <v-text-field label="Contraseña" :type="visible ? 'text' : 'password'" hide-details="auto"
                class="form-control mb-1"
                v-bind:class="{ 'is-invalid': !passwordValidOrEmpty, 'is-valid': passwordValid }"
                v-model="newUser.password" filled></v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0 colour mb-3">
              <v-text-field label="Confirmar Contraseña" :type="visible ? 'text' : 'password'" hide-details="auto"
                filled class="form-control mb-1"
                v-bind:class="{ 'is-invalid': !passwordsEqualOrEmpty, 'is-valid': passwordsEqualNotEmpty }"
                v-model="password2"></v-text-field>
            </v-row>
            <v-row justify="center" class="mx-0 mt-3" v-if="step !== 1">
              <v-btn dark large color="deep-purple" @click.prevent="prevStep" elevation="2">
                ANTERIOR
              </v-btn>
              <v-btn dark large color="deep-purple" @click.prevent="done" elevation="2">
                FINALIZAR
              </v-btn>
            </v-row>
            <v-row justify="center" class="mx-0 mt-3" v-if="step != totalSteps">
              <a justify="center" class="mx-0  mb-3 mt-3" @click="toggleForm">Ya tengo cuenta</a>
              <v-spacer></v-spacer>
              <v-btn dark large color="deep-purple" @click.prevent="nextStep" elevation="2">
                SIGUIENTE
              </v-btn>
            </v-row>
          </v-card-text>
          <v-card-actions>

          </v-card-actions>
        </v-card>
      </section>
      <section v-if="step === 2">
        <v-card class="mx-auto my-12" max-width="360">
          <v-card-title>Paso 2: Registra tu establecimiento</v-card-title>
          <v-card-text>
            <v-row allign="center" class="colour mx-0 mb-3">
              <v-text-field label="Nombre del establecimiento" hide-details="auto" filled
                v-model="restaurant.name"></v-text-field>
            </v-row>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-row allign="center" class="colour mx-0 mt-3 mb-3">
              <v-text-field label="Dirección del establecimiento" hide-details="auto" filled
                v-model="restaurant.direction"></v-text-field>
            </v-row>

            <v-row align="center" class="mx-0 mb-3" justify="center">
              <v-col fluid>
                <v-checkbox v-model="restaurant.has_breakfast" label="Incluye horario de desayuno"
                  value="true"></v-checkbox>
                <v-checkbox v-model="restaurant.has_lunch" label="Incluye horario de almuerzo"
                  value="true"></v-checkbox>
                <v-checkbox v-model="restaurant.has_dinner" label="Incluye horario de cena" value="true"></v-checkbox>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-slider min="1" max="50" v-model="restaurant.num_tables" label="Número de mesas" thumb-color="purple" thumb-label="always"></v-slider>
              </v-col>
            </v-row>

            <v-row justify="center" class="mx-0 mt-3" v-if="step !== 1">
              <v-btn dark large color="deep-purple" @click.prevent="prevStep" elevation="2">
                ANTERIOR
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn dark large color="deep-purple" @click.prevent="done" elevation="2">
                FINALIZAR
              </v-btn>
            </v-row>
            <v-row justify="center" class="mx-0 mt-3">
              <v-btn v-if="step != totalSteps" dark large color="deep-purple" @click.prevent="nextStep" elevation="2">
                SIGUIENTE
              </v-btn>
            </v-row>
          </v-card-text>
          <v-card-actions>
          </v-card-actions>
        </v-card>
      </section>
    </form>
  </div>
</template>

<script>
import { useAuthStore, useRestaurantStore } from '@/stores/stores';
import API from '../services/api'
export default {
  data() {
    return {
      step: 1,
      totalSteps: 2,
      restaurant: {
        name: "",
        direction: "",
        has_breakfast: false,
        has_dinner: false,
        has_lunch: false,
        num_tables: 1
      },
      newUser: {
        name: "",
        surname: "",
        email: "",
        password: ""
      },
      password2: "",
      visible: false,
      authStore: useAuthStore(),
      restStore: useRestaurantStore()
    }
  },
  computed: {
    emailValid: function () {
      const regExp = /^(\w+)@(\w+)\.(\w\w+)$/;
      return regExp.test(String(this.newUser.email).toLowerCase());
    },
    emailValidOrEmpty: function () {
      return this.emailValid || this.newUser.email.length === 0;
    },
    passwordValid: function () {
      return this.newUser.password.length >= 5;
    },
    passwordValidOrEmpty: function () {
      return this.passwordValid || this.newUser.password.length === 0;
    },
    passwordsEqual: function () {
      return this.newUser.password === this.password2;
    },
    passwordsEqualOrEmpty: function () {
      return this.passwordsEqual || this.password2.length === 0;
    },
    passwordsEqualNotEmpty: function () {
      return this.passwordsEqual && this.password2.length !== 0;
    },
  },
  methods: {
    prevStep: function () {
      this.step--;
    },
    nextStep: function () {
      this.step++;
    },
    toggleForm() {
      this.$emit("toggleForm")
    },
    async done() {
      if (
        this.emailValid &&
        this.passwordValid
      ) {
        const response = await API.signup(this.newUser)
        await API.createRestaurant(this.restaurant)
        if (response.error) {
          alert('Error creating account')
          console.log(response.error)
        } else {
          this.authStore.login(response.token, response.email)
          const {name, direction, has_breakfast, has_dinner, has_lunch, num_tables} = this.restaurant
          this.restStore.setRestaurantInfo(name, direction, has_breakfast, has_dinner, has_lunch, num_tables)
          this.$router.push({ name: 'personal' })
        }
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