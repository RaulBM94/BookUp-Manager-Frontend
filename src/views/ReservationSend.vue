<template>
    <div>
        <v-alert :value="alert" border="top" color=green colored-border type="success" elevation="2" class="ml-2 alert"
            width="80vw" transition="slide-x-transition">
            Se ha enviado correctamente el mensaje
        </v-alert>
        <svg class="vector2" width="100vw" height="385" viewBox="0 0 100vw 385" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0 171.111L40.4375 192.5C80.875 213.889 161.75 256.667 242.625 242.407C323.5 228.148 404.375 156.852 485.25 149.722C566.125 142.593 647 199.63 727.875 242.407C808.75 285.185 889.625 313.704 970.5 292.315C1051.37 270.926 1132.25 199.63 1213.12 199.63C1294 199.63 1374.87 270.926 1455.75 278.056C1536.62 285.185 1617.5 228.148 1698.37 171.111C1779.25 114.074 1860.12 57.037 1900.56 28.5185L1941 0V385H1900.56C1860.12 385 1779.25 385 1698.37 385C1617.5 385 1536.62 385 1455.75 385C1374.87 385 1294 385 1213.12 385C1132.25 385 1051.37 385 970.5 385C889.625 385 808.75 385 727.875 385C647 385 566.125 385 485.25 385C404.375 385 323.5 385 242.625 385C161.75 385 80.875 385 40.4375 385H0V171.111Z"
                fill="#6D27C9" />
        </svg>
       
            <v-card class="mx-auto my-12 carta" max-width="360" color="rgb(227, 212, 253)">
                <v-card-title>Enviar Recordatorio</v-card-title>
                <v-card-text>
                    <v-form ref="form">
                    <v-row align="center" class="mx-0 mb-3 colour">
                        <v-text-field label="Destinatario" hide-details="auto" filled type="email"
                            :value="getReceiver"></v-text-field>
                    </v-row>
                    <v-row allign="center" class="mx-0 mb-3 colour">
                        <v-textarea filled label="Mensaje" auto-grow hide-details="auto"
                            :value="setMessage"></v-textarea>
                    </v-row>
                </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-row align="center" class="mx-0 ">
                        <v-btn class="mx-2 mb-3" dark large color="rgb(48, 45, 56)" @click.prevent="back"
                            elevation="2">CANCELAR
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn class="mx-2 mb-3" dark large color="deep-purple" @click.prevent="add"
                            elevation="2">ENVIAR
                        </v-btn>
                    </v-row>
                </v-card-actions>
            </v-card>

    </div>
</template>

<script>
import { useReminderStore, useRestaurantStore } from '@/stores/stores'
// import API from '../services/api'
export default {
    data() {
        return {
            reminder: {
                email: "",
                msg: ""
            },
            reminderStore: useReminderStore(),
            restaurantStore: useRestaurantStore(),
            alert: false
        }
    },
    methods: {
        async add() {
            // const response = await API.sendReminder(this.reminder)
            // if (response.error) {
            //     alert('Error creating reservation') // No funciona
            // } else {
            this.alert = alert
            window.setInterval(() => {
                this.alert = false;
            }, 5000)
            this.$refs.form.reset()
        },
        async back() {
            this.$router.push({ name: 'reservation-home' })
        },

    },
    computed: {
        getReceiver() {
            return `${this.reminderStore.getEmail.email}`
        },
        setMessage() {
            return `Hola ${this.reminderStore.getName.customer_name},
            Te recordamos que tienes una reserva para ${this.reminderStore.getPeople.people} personas en nuestro restaurante a las  ${this.reminderStore.getHour.hour} para la fecha ${this.reminderStore.getDate.date}.
            
            Por favor, necesitamos que confirmes tu reserva, accediendo al siguiente enlace:
            https://www.bookupmanager.app/?utm_source=GoogleAds&utm_campaign=12202508584&adgroupid=118796968724&utm_term=bookup%20manager&asset=GA-Last-General-Ad2&gclid=EAIaIQobChMInLbq78qF_AIVxuFRCh1sBQp_EAAYASAAEgITOPD_BwE

            En caso contrario quedará por anulada la reserva
         `
        }
    }
}

</script>

<style scoped>
.alert {
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 2;
}
.carta {
    z-index: 1
}

.colour {
    background-color: rgb(255, 255, 255)
}

.vector2 {
    position: absolute;
    left: 0px;
    bottom: 100px;
    overflow: visible;
}
</style>

