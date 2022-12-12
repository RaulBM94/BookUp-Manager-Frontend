<template class="cap">
    <v-card class="mx-auto my-12" max-width="360">
        <v-card-title>Crear Reserva</v-card-title>
        <v-card-text>
            <v-col cols="12" lg="6">
                <v-row allign="center" class="mx-0 mb-3 colour">
                    <v-text-field label="Fecha" hide-details="auto" filled>
                        v-model="user.date"></v-text-field>
                </v-row>
                <v-row allign="center" class="mx-0 mb-3 colour">
                    <v-select :items="items" hide-details="auto" filled label="Turno"></v-select>
                </v-row>

                <v-row allign="center" class="mx-0 mb-3 colour">
                    <v-text-field label="Hora de reserva" hide-details="auto" filled>
                        v-model="user.hourReservation"></v-text-field>
                </v-row>
                <v-row allign="center" class="mx-0 mb-3 colour">
                    <v-text-field label="Restaurante" hide-details="auto" filled>
                        v-model="user.restaurant"></v-text-field>
                </v-row>
                <v-row allign="center" class="mx-0 mb-3 colour">
                    <v-text-field label="Mesa" hide-details="auto" filled>
                        v-model="user.table"></v-text-field>
                </v-row>
                <v-row allign="center" class="mx-0 mb-3 colour">
                    <v-text-field label="Nombre" hide-details="auto" filled>
                        v-model="user.name"></v-text-field>
                </v-row>
                <v-row allign="center" class="mx-0 mb-3 colour">
                    <v-text-field label="Teléfono" hide-details="auto" filled>
                        v-model="user.phone"></v-text-field>
                </v-row>
                <v-row allign="center" class="mx-0 mb-3 colour">
                    <v-text-field label="Email" hide-details="auto" filled>
                        v-model="user.email"></v-text-field>
                </v-row>
                <v-row allign="center" class="mx-0 mb-3 colour">
                    <v-text-field label="Personas" hide-details="auto" filled>
                        v-model="user.people"></v-text-field>
                </v-row>
                <v-row class="mx-0 mb-3 colour">
                    <v-textarea filled name="Notas" label="Insertar notas" hide-details="auto"></v-textarea>
                </v-row>
            </v-col>
        </v-card-text>
        <v-card-actions>
            <v-row allign="center" class="mx-0 ">
                <v-btn class="mx-2" dark large color="deep-purple" @click.prevent="reserve" elevation="2">
                    <v-spacer>Añadir</v-spacer>
                </v-btn>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
//import API from '../services/api'

// export default {
//     data() {
//         return {
//             user: {
//                 phone: "",
//                 email: "",
//                 hourReservation: "",
//                 people: ""
//             }
//         }
//     // }
// },

export default {
    data: () => ({
        items: ['mañana', 'tarde', 'noche'],
    }),
}
</script>

<style scoped>
.colour {
    background-color: rgb(208, 188, 255)
}
</style>

