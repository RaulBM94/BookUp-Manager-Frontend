<template>
    <div>
        <svg class="vector2" width="1941" height="585" viewBox="0 0 1941 385" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0 171.111L40.4375 192.5C80.875 213.889 161.75 256.667 242.625 242.407C323.5 228.148 404.375 156.852 485.25 149.722C566.125 142.593 647 199.63 727.875 242.407C808.75 285.185 889.625 313.704 970.5 292.315C1051.37 270.926 1132.25 199.63 1213.12 199.63C1294 199.63 1374.87 270.926 1455.75 278.056C1536.62 285.185 1617.5 228.148 1698.37 171.111C1779.25 114.074 1860.12 57.037 1900.56 28.5185L1941 0V385H1900.56C1860.12 385 1779.25 385 1698.37 385C1617.5 385 1536.62 385 1455.75 385C1374.87 385 1294 385 1213.12 385C1132.25 385 1051.37 385 970.5 385C889.625 385 808.75 385 727.875 385C647 385 566.125 385 485.25 385C404.375 385 323.5 385 242.625 385C161.75 385 80.875 385 40.4375 385H0V171.111Z"
                fill="#6D27C9" />
        </svg>
        

            <v-alert class="alert" width="80vw" v-if="correct === true" type="success" dismissible elevation="2"
                transition="slide-x-transition">

                Reserva creada con éxito
            </v-alert>
            <v-alert class="alert" position="absolute t-0" v-if="correct === false" type="error" dismissible
                elevation="2">
                Se ha producido un error al crear la reserva
            </v-alert>
            <v-card class="mx-auto my-12" max-width="360" color="rgb(227, 212, 253)">
                <v-card-title>Crear Reserva</v-card-title>
                <v-card-text>
                    <v-row class="mx-0 mb-3 rounded colour">
                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false"
                            :return-value.sync="reservation.date" transition="scale-transition" offset-y
                            min-width="auto">
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
                        <v-select class="colour" hide-details="auto" filled label="Turno" v-model="reservation.shift"
                            :items="getShift">
                        </v-select>
                    </v-row>

                    <v-row class="mx-0 mb-3 rounded colour">
                        <v-text-field label="Hora de reserva" hide-details="auto" filled
                            v-model="reservation.hour"></v-text-field>
                    </v-row>
                    <v-row class="mx-0 mb-3 rounded colour">
                        <v-text-field label="Nombre" hide-details="auto" filled
                            v-model="reservation.customer_name"></v-text-field>
                    </v-row>
                    <v-row class="mx-0 mb-3 rounded colour">
                        <v-text-field label="Teléfono" hide-details="auto" filled
                            v-model="reservation.customer_phone"></v-text-field>
                    </v-row>
                    <v-row class="mx-0 mb-3 rounded colour">
                        <v-text-field label="Email" hide-details="auto" filled v-model="reservation.customer_email">
                            v-model="user.email"></v-text-field>
                    </v-row>
                    <v-row class="mx-0 mb-3 rounded colour">
                        <v-text-field v-model="reservation.people" type="number" label="Personas" min="1" max="10"
                            hide-details="auto" filled></v-text-field>
                    </v-row>
                    <v-row class="mx-0 mb-3 rounded colour">
                        <v-textarea filled label="Notas" v-model="reservation.notes" hide-details="auto"></v-textarea>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-row class="mx-0 ">
                        <v-btn class="mx-2 mb-3" dark large color="rgb(48, 45, 56)" @click.prevent="back"
                            elevation="2">CANCELAR
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn class="mx-2 mb-3" dark large color="deep-purple" @click.prevent="add"
                            elevation="2">AÑADIR
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
            menu: false,
            modal: false,
            reservation: {
                shift: "",
                hour: "",
                customer_name: "",
                customer_phone: "",
                customer_email: "",
                people: 1,
                notes: ""
            },
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            restStore: useRestaurantStore(),
            correct: ""
        }
    },
    methods: {
        async add() {
            this.reservation.date = this.date
            const response = await API.createReservation(this.reservation)
            if (response.error) {
                this.correct = false
            } else {
                this.correct = true
                this.reservation.shift = ""
                this.reservation.hour = ""
                this.reservation.customer_name = ""
                this.reservation.customer_phone = ""
                this.reservation.customer_email = ""
                this.reservation.people = 1
                this.reservation.notes = ""

                this.date = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
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
    width: 98vw;
    z-index: 2;
}

.vector2 {
    position: absolute;
    left: -20px;
    top: 400px;
    overflow: visible;
}
</style>

