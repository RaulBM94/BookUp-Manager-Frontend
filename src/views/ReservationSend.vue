<template>
    <v-card class="mx-auto my-12" max-width="360" color="rgb(227, 212, 253)">
        <v-card-title>Enviar Recordatorio</v-card-title>
        <v-card-text>
            <v-row allign="center" class="mx-0 mb-3 rounded colour">
                <v-text-field label="Correo" hide-details="auto" filled v-model="reservation.customer_email">
                    v-model="user.email"></v-text-field>
            </v-row>
            <v-row fluid max-width="360" class="mx-0 mb-3 rounded colour" >
                <v-textarea filled label="Mensaje" auto-grow hide-details="auto"
                    value="Le indicamos que tiene su reserva para el día..."></v-textarea>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-row allign="center" class="mx-0 ">
                <v-btn class="mx-2 mb-3" dark large color="rgb(48, 45, 56)" @click.prevent="back" elevation="2">CANCELAR
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn class="mx-2 mb-3" dark large color="deep-purple" @click.prevent="add" elevation="2">ENVIAR
                </v-btn>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
import API from '../services/api'
export default {
    data() {
        return {
            reservation: {
                customer_email: "",
                notes: "",
            },
            items: [],
        }
    },
    methods: {
        async add() {
            const response = await API.createReservation(this.reservation)
            if (response.error) {
                alert('Error creating reservation') // No funciona
            } else {
                this.$router.push({ name: 'personal' })
            }
        },
        async back() {
            this.$router.push({ name: 'reservation-home' })
        }
    },
}

</script>

<style scoped>
.colour {
    background-color: rgb(255, 255, 255)
}
</style>

