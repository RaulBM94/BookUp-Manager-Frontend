<template>
    <div>
        <v-alert app v-if="correct===true"  type="success" dismissible elevation="2">
            Reserva creada con éxito
        </v-alert>
        <v-alert app v-if="correct===false" type="error" dismissible elevation="2">
      Se ha producido un error al crear la reserva
    </v-alert>
    <pre>{{reservation.date}}</pre>
        <v-card class="mx-auto my-12" max-width="360" color="rgb(227, 212, 253)">
            <v-card-title>Crear Reserva</v-card-title>
            <v-card-text>
                <v-row allign="center" class="mx-0 mb-3 rounded colour">
                    <v-text-field label="Fecha" hide-details="auto" filled v-model="reservation.date"
                        placeholder="aaaa-mm-dd">
                    </v-text-field>
                </v-row>
                <v-row allign="center" class="mx-0 mb-3 rounded colour">
                    <v-select hide-details="auto" filled label="Turno" v-model="reservation.shift" :items="getShift">
                        </v-select>
                </v-row>

                <v-row allign="center" class="mx-0 mb-3 rounded colour">
                    <v-text-field label="Hora de reserva" hide-details="auto" filled
                        v-model="reservation.hour"></v-text-field>
                </v-row>
                <v-row allign="center" class="mx-0 mb-3 rounded colour">
                    <v-text-field label="Nombre" hide-details="auto" filled
                        v-model="reservation.customer_name"></v-text-field>
                </v-row>
                <v-row allign="center" class="mx-0 mb-3 rounded colour">
                    <v-text-field label="Teléfono" hide-details="auto" filled
                        v-model="reservation.customer_phone"></v-text-field>
                </v-row>
                <v-row allign="center" class="mx-0 mb-3 rounded colour">
                    <v-text-field label="Email" hide-details="auto" filled v-model="reservation.customer_email">
                        v-model="user.email"></v-text-field>
                </v-row>
                <v-row allign="center" class="mx-0 mb-3 rounded colour">
                    <v-text-field v-model="reservation.people" type="number" label="Personas" min="1" max="10"
                        hide-details="auto" filled></v-text-field>
                </v-row>
                <v-row class="mx-0 mb-3 rounded colour">
                    <v-textarea filled label="Notas" v-model="reservation.notes" hide-details="auto"></v-textarea>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-row allign="center" class="mx-0 ">
                    <v-btn class="mx-2 mb-3" dark large color="rgb(48, 45, 56)" @click.prevent="back"
                        elevation="2">CANCELAR
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn class="mx-2 mb-3" dark large color="deep-purple" @click.prevent="add" elevation="2">AÑADIR
                    </v-btn>
                </v-row>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import API from '../services/api'
import { useRestaurantStore } from '@/stores/stores'
export default {
    data() {
        return {
            reservation: {
                date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                shift: "",
                hour: "",
                customer_name: "",
                customer_phone: "",
                customer_email: "",
                people: 1,
                notes: "",
            },
            restStore: useRestaurantStore(),
            correct:""
        }
    },
    methods: {
        async add() {
            const response = await API.createReservation(this.reservation)
            if (response.error) {
                this.correct=false 
            } else {
                this.correct=true

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
</style>

