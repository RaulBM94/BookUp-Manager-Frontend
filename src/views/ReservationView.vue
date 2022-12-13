<template class="cap">
    <v-card class="mx-auto my-12" max-width="360">
        <v-card-title>Crear Reserva</v-card-title>
        <v-card-text>
            <v-row allign="center" class="mx-0 mb-3 colour">
                <v-text-field label="Fecha" hide-details="auto" filled v-model="reservation.date"
                    placeholder="dd/mm/aa">
                </v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0 mb-3 colour">
                <v-select :items="items" hide-details="auto" filled label="Turno"
                    v-model="reservation.shift"></v-select>
            </v-row>

            <v-row allign="center" class="mx-0 mb-3 colour">
                <v-text-field label="Hora de reserva" hide-details="auto" filled
                    v-model="reservation.hour"></v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0 mb-3 colour">
                <v-text-field label="Nombre" hide-details="auto" filled
                    v-model="reservation.customer_name"></v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0 mb-3 colour">
                <v-text-field label="Teléfono" hide-details="auto" filled
                    v-model="reservation.customer_phone"></v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0 mb-3 colour">
                <v-text-field label="Email" hide-details="auto" filled v-model="reservation.customer_email">
                    v-model="user.email"></v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0 mb-3 colour">
                <v-text-field v-model="reservation.people" type="number" label="Personas" min="1" max="10"
                    hide-details="auto" filled></v-text-field>
            </v-row>
            <v-row class="mx-0 mb-3 colour">
                <v-textarea filled label="Notas" v-model="reservation.notes" hide-details="auto" ></v-textarea>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-row allign="center" class="mx-0 ">
                <v-spacer></v-spacer>
                <v-btn class="mx-2 mb-3" dark large color="deep-purple" @click.prevent="add" elevation="2">AÑADIR
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
                date: "",
                shift: "",
                hour: "",
                customer_name: "",
                customer_phone: "",
                customer_email: "",
                people: 1,
                notes: "",
            },
            items: ['Mañana', 'Tarde', 'Noche'],
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
    }
}

</script>

<style scoped>
.colour {
    background-color: rgb(208, 188, 255)
}
</style>

