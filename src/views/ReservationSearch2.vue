<template>
  <div>
    <v-card class="mx-auto my-12" max-width="360" color="rgb(227, 212, 253)">
      <v-card-title>Crear Reserva</v-card-title>
      <v-card-text>
        <v-row class="mx-0 mb-3 rounded colour">
          <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="search.date"
            transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field label="Seleccionar fecha" readonly v-bind="attrs" v-on="on" v-model="date"
                hide-details="auto" filled></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-row>
        <v-row class="mx-0 mb-3 rounded">
          <v-select class="colour" hide-details="auto" filled label="Turno" v-model="search.shift" :items="getShift">
          </v-select>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-row class="mx-0 ">
          <v-btn class="mx-2 mb-3" dark large color="rgb(48, 45, 56)" @click.prevent="back" elevation="2">CANCELAR
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn class="mx-2 mb-3" dark large color="deep-purple" @click.prevent="buscar" elevation="2">BUSCAR
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
    <v-row v-if="visible === true">
            <ReservationCard v-for="(result, idx) in results" :key="idx" :reservation="result"
                :count="results.indexOf(result)" />
        </v-row>
  </div>
</template>

<script>
import API from '../services/api'
import ReservationCard from '@/components/ReservationCard.vue';
import { useRestaurantStore } from '@/stores/stores'
export default {
  components: {
        ReservationCard
    },
  data() {
    return {
      menu: false,
      modal: false,
      search: {
        shift: ""
      },
      results: "",
      visible: false,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      restStore: useRestaurantStore(),
    }
  },
  methods: {
    async buscar() {
      this.search.date = this.date
      const response = await API.searchReservation(this.search)
      if (response.error) {
        this.correct = false
      } else {
        this.results = response
        this.visible = true
      }

    },
    async back() {
      this.$router.push({ name: 'reservation-home' })
    }
  },
  computed: {
    getShift() {
      const turnos = []
      if (this.restStore.getRestaurantInfo.has_breakfast) {
        turnos.push('Mañana')
      }
      if (this.restStore.getRestaurantInfo.has_lunch) {
        turnos.push('Tarde')
      }
      if (this.restStore.getRestaurantInfo.has_dinner) {
        turnos.push('Noche')
      }
      return turnos
    }
  }
}

</script>

<style scoped>
.colour {
  background-color: rgb(255, 255, 255)
}

.alert {
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>

