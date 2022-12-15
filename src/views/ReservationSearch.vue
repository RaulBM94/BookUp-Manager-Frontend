<template>
    <v-container>
        <pre>{{ search }}</pre>
        <pre>{{ results }}</pre>
        <v-row>
            <v-card class="mx-auto my-12" width="360" height="500" color="rgb(227, 212, 253)">
                <v-card-title justify="center">Buscar Reserva</v-card-title>
                <v-card-text>
                    <v-row allign="center" class="mx-0 mb-3 rounded colour">
                        <v-text-field label="Fecha" hide-details="auto" filled v-model="search.date"
                            placeholder="aaaa-mm-dd">
                        </v-text-field>
                    </v-row>
                    <v-row allign="center" class="mx-0 mb-3 colour rounded">
                        <v-select :items="items" hide-details="auto" label="Seleccionar turno"
                            v-model="search.shift"></v-select>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-row allign="center" class="mx-0 ">
                        <v-btn class="mx-2 mb-3" dark large color="rgb(48, 45, 56)" @click.prevent="back"
                            elevation="2">CANCELAR
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn class="mx-2 mb-3" dark large color="deep-purple" @click.prevent="buscar"
                            elevation="2">BUSCAR
                        </v-btn>
                    </v-row>

                </v-card-actions>
            </v-card>
        </v-row>

        <v-row v-if="visible === true">
            <ReservationCard v-for="(result, idx) in results" :key="idx" :reservation="result"
                :count="results.indexOf(result)" />
        </v-row>
    </v-container>
</template>
<script>
import API from '../services/api'
import ReservationCard from '@/components/ReservationCard.vue';
export default {
    components: {
        ReservationCard
    },
    data: () => ({
        menu: false,
        modal: false,
        items: ['Mañana', 'Tarde', 'Noche'],
        search: {
            date:"",
            shift: ""
        },
        results: "",
        visible: false
    }),
    methods: {
        async back() {
            this.$router.push({ name: 'reservation-home' })
        },
        async buscar() {
            console.log("OK")
            const response = await API.searchReservation(this.search)
            if (response.error) {
                this.correct = false
            } else {
                console.log("OK")
                this.results = response
                this.visible = true
            }

        }
    },

};
</script>
<style scoped>
.colour {
    background-color: rgb(240, 240, 240)
}
</style>