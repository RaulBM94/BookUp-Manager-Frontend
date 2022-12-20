<template>
  <div>
    <v-form v-model="valid" ref="form" lazy-validation>
      <section v-if="step === 1">
        <v-card class="mx-auto my-12" max-width="360" color="rgb(227, 212, 253)">
          <v-card-title>Paso 1: Regístrate como usuario</v-card-title>
          <v-card-text>
            <v-row align="center" class="colour mx-0 mb-3">
              <v-text-field label="Nombre" hide-details="auto" filled v-model="newUser.name"
                :rules="[rules.required]"></v-text-field>
            </v-row>
            <v-row align="center" class="colour mx-0 mb-3">
              <v-text-field label="Apellido" hide-details="auto" filled v-model="newUser.surname"
                :rules="[rules.required]"></v-text-field>
            </v-row>
            <v-row align="center" class="colour mx-0 mb-3">
              <v-text-field label="Teléfono" hide-details="auto" filled v-model="newUser.phone" type="number"
                hide-spin-buttons :rules="[rules.required, rules.phone]"></v-text-field>
            </v-row>
            <v-row align="center" class="mx-0 mb-3 colour">
              <v-text-field label="Email" hide-details="auto" filled v-model="newUser.email" type="email"
                :rules="[rules.required, rules.email]"></v-text-field>
            </v-row>
            <v-row align="center" class="mx-0 mb-3 colour">
              <v-text-field label="Contraseña" :type="visible1 ? 'text' : 'password'" hide-details="auto"
                class="form-control mb-1" hint="Mínimo 5 caracteres" :append-icon="visible1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="visible1 = !visible1" v-model="newUser.password" filled
                :rules="[rules.required, rules.pwd]"></v-text-field>
            </v-row>
            <v-row align="center" class="mx-0 colour mb-3">
              <v-text-field label="Confirmar Contraseña" :type="visible2 ? 'text' : 'password'" hide-details="auto"
                filled class="form-control mb-1" :append-icon="visible2 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="visible2 = !visible2" v-model="password2" :rules="[rules.pwdCheck]"></v-text-field>
            </v-row>
            <v-row justify="center" class="mx-0 mt-3" v-if="step != totalSteps">
              <a justify="center" class="mx-0  mb-3 mt-3" @click="toggleForm">Ya tengo cuenta</a>
              <v-spacer></v-spacer>
              <v-btn dark large color="deep-purple" @click.prevent="nextStep" elevation="2">
                SIGUIENTE
              </v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </section>

      <section v-if="step === 2">
        <v-card class="mx-auto my-12" max-width="360" color="rgb(227, 212, 253)">
          <v-card-title>Paso 2: Registra tu establecimiento</v-card-title>
          <v-card-text>
            <v-row align="center" class="colour mx-0 mb-3">
              <v-text-field label="Nombre del establecimiento" hide-details="auto" filled
                v-model="restaurant.restaurant_name" :rules="[rules.required]"></v-text-field>
            </v-row>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-row align="center" class="colour mx-0 mt-3 mb-3">
              <v-text-field label="Dirección del establecimiento" hide-details="auto" filled
                v-model="restaurant.direction" :rules="[rules.required]"></v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0 mb-3" justify="center">
              <v-col fluid>
                <v-checkbox v-model="restaurant.has_breakfast" label="Incluye horario de desayuno"></v-checkbox>
                <v-checkbox v-model="restaurant.has_lunch" label="Incluye horario de almuerzo"></v-checkbox>
                <v-checkbox v-model="restaurant.has_dinner" label="Incluye horario de cena"></v-checkbox>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-slider min="1" max="50" v-model="restaurant.num_tables" label="Número de mesas" thumb-color="purple"
                  thumb-label="always"></v-slider>
              </v-col>
            </v-row>
            <v-row justify="center" class="mx-0 mt-3" v-if="step !== 1">
              <v-btn dark large color="deep-purple" @click.prevent="prevStep" elevation="2">
                ANTERIOR
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn v-if="step != totalSteps" dark large color="deep-purple" @click.prevent="nextStep" elevation="2">
                SIGUIENTE
              </v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </section>
    </v-form>
    <section v-if="step === 3">
      <v-card class="mx-auto my-12" max-width="360" color="rgb(227, 212, 253)">
        <v-card-title>Paso 3: Selecciona el paquete</v-card-title>
        <v-card-text>
          <PaymentForm />
        </v-card-text>
      </v-card>
    </section>
  </div>
</template>

<script>
import PaymentForm from '@/components/PaymentForm.vue'
import { useAuthStore, useRestaurantStore } from '@/stores/stores';
import API from '../services/api'

export default {
  components: {
    PaymentForm
  },
  data() {
    return {
      step: 1,
      totalSteps: 3,
      alert: false,
      rules: {
        required: v => !!v || 'Este campo es requerido',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'El email no es válido'
        },
        pwdCheck: v => v === this.newUser.password || 'Las contraseñas han de coincidir',
        phone: v => v.length === 9 || 'Introduce un número de teléfono válido',
        pwd: v => v.length >= 5 || 'La contraseña debe tener 5 caracteres como mínimo'
      }
      ,
      restaurant: {
        restaurant_name: "",
        direction: "",
        has_breakfast: false,
        has_dinner: false,
        has_lunch: false,
        num_tables: 1
      },
      newUser: {
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: ""
      },
      password2: "",
      visible1: false,
      visible2: false,
      authStore: useAuthStore(),
      restStore: useRestaurantStore(),
      valid: false,
      unchecked: false
    }
  },
  methods: {
    prevStep: function () {
      this.step--;
    },
    nextStep: function () {
      if (this.step === 1) {
        if (this.$refs.form.validate()) {
          this.valid = true
          if (this.valid === true && Object.values(this.newUser).length !== 0) {
            this.$refs.form.resetValidation()
            this.step++;
          }
        }
      } else {
        if (this.step === 2) {
          if (this.$refs.form.validate() && this.unchecked === false) {
            if (this.restaurant.has_breakfast || this.restaurant.has_lunch || this.restaurant.has_dinner) {
              this.valid = true
              if (this.valid === true && Object.values(this.restaurant).length !== 0) {
                this.done()
                this.$refs.form.resetValidation()
                this.step++;
              }
            }
          }
        }
      }
    },
    toggleForm() {
      this.$emit("toggleForm")
    },
    async done() {
      if (
        this.valid === true
      ) {
        const response = await API.signup(this.newUser)
        localStorage.setItem('token_value', response.token_value)
        await API.createRestaurant(this.restaurant)
        if (response.error) {
          alert('Error creating account')
          console.log(response.error)
        } else {
          const { restaurant_name, direction, has_breakfast, has_dinner, has_lunch, num_tables } = this.restaurant
          this.restStore.setRestaurantInfo(restaurant_name, direction, has_breakfast, has_dinner, has_lunch, num_tables)
        }
      } else {
        console.log("error")
      }
    },
  }
}
</script>