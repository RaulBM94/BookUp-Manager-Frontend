<template>
    <div>
        <v-alert type="success" width="40vw" :value="alert1" transition="slide-x-transition" class="alert" border="top"
            colored-border color="green">
            La reserva ha sido creada correctamente
        </v-alert>
        <v-alert type="error" width="40vw" :value="alert2" transition="slide-x-transition" class="alert" border="top"
            colored-border color="red)">
            Se ha producido un error al creal la reserva
        </v-alert>
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-card class="mx-auto my-12 carta" max-width="300" color="rgb(227, 212, 253)">
                <v-card-title>Crear Reserva</v-card-title>
                <v-card-text>
                    <v-row class="mx-0 mb-3 rounded colour">
                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false"
                            :return-value.sync="date" transition="scale-transition" offset-y
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
                            :items="getShift" :rules="[rules.required]">
                        </v-select>
                    </v-row>

                    <v-row class="mx-0 mb-3 rounded colour">
                        <v-text-field label="Hora de reserva" hide-details="auto" filled v-model="reservation.hour"
                            :rules="[rules.required]" placeholder="00:00"></v-text-field>
                    </v-row>
                    <v-row class="mx-0 mb-3 rounded colour">
                        <v-text-field label="A nombre de" hide-details="auto" filled v-model="reservation.customer_name"
                            :rules="[rules.required]"></v-text-field>
                    </v-row>
                    <v-row class="mx-0 mb-3 rounded colour">
                        <v-text-field label="Teléfono" hide-details="auto" filled v-model="reservation.customer_phone"
                            :rules="[rules.required, rules.phone]" type="number" hide-spin-buttons></v-text-field>
                    </v-row>
                    <v-row class="mx-0 mb-3 rounded colour">
                        <v-text-field label="Email" hide-details="auto" filled v-model="reservation.customer_email"
                            :rules="[rules.required, rules.email]" type="email"></v-text-field>
                    </v-row>
                    <v-row class="mx-0 mb-3 rounded colour">
                        <v-text-field v-model="reservation.people" type="number" label="Personas" min="1" max="10"
                            hint="Máximo de 10 personas" hide-details="auto" filled
                            :rules="[rules.minimum]"></v-text-field>
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
        </v-form>
        <svg class="vector2" width="100vw" height="385" viewBox="0 0 100vw 385" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0 171.111L40.4375 192.5C80.875 213.889 161.75 256.667 242.625 242.407C323.5 228.148 404.375 156.852 485.25 149.722C566.125 142.593 647 199.63 727.875 242.407C808.75 285.185 889.625 313.704 970.5 292.315C1051.37 270.926 1132.25 199.63 1213.12 199.63C1294 199.63 1374.87 270.926 1455.75 278.056C1536.62 285.185 1617.5 228.148 1698.37 171.111C1779.25 114.074 1860.12 57.037 1900.56 28.5185L1941 0V385H1900.56C1860.12 385 1779.25 385 1698.37 385C1617.5 385 1536.62 385 1455.75 385C1374.87 385 1294 385 1213.12 385C1132.25 385 1051.37 385 970.5 385C889.625 385 808.75 385 727.875 385C647 385 566.125 385 485.25 385C404.375 385 323.5 385 242.625 385C161.75 385 80.875 385 40.4375 385H0V171.111Z"
                fill="#6D27C9" />
        </svg>

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
            rules: {
                required: v => !!v || 'Este campo es requerido',
                minimum: v => !!v || 'El mínimo de personas ha de ser 1',
                email: v => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(v) || 'El email no es válido'
                },
                phone: v => v.length === 9 || 'Introduce un número de teléfono válido'
            },
            alert1: false,
            alert2: false,
            valid: false
        }
    },
    methods: {
        async add() {
            if (this.$refs.form.validate()) {
                this.valid = true
                this.reservation.date = this.date
                if (this.valid === true) {
                    const response = await API.createReservation(this.reservation)
                    if (response.error) {
                        this.alert2 = alert
                        window.setInterval(() => {
                            this.alert2 = false;
                        }, 2000)
                    } else {
                        this.alert1 = alert
                        window.setInterval(() => {
                            this.alert1 = false;
                        }, 2000)
                        this.$refs.form.resetValidation()
                        this.date = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
                        
                    }
                }
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
    top: 68px;
    left: 0;
    z-index: 2;
}
.carta{
    z-index:1
}

.vector2 {
    position: absolute;
    left: 0;
    bottom:100px;
    overflow: visible;
}
</style>

