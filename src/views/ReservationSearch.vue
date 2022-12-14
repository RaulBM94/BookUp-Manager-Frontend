<template>
    <v-container>
        <v-card class="mx-auto my-12" width="360" height="500" color="rgb(227, 212, 253)" >
            <v-card-title justify="center">Buscar Reserva</v-card-title>
            <v-card-text>
            <v-row class=" mx-0 ml-3 mr-3" hide-details="auto" justify="center" >
                <v-menu ref="menu" v-model="menu" :close-on-content-click="false"
                    :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }" >
                        <v-text-field v-model="date" class="colour mb-6 rounded" hide-details="auto"  label="Selecciona una fecha" prepend-icon="mdi-calendar" readonly
                            v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                        <v-btn text color="primary" @click="menu = false">
                            Cancel
                        </v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(date)">
                            OK
                        </v-btn>
                    </v-date-picker>
                </v-menu>
                <v-row allign="center" class="mx-0 mb-3 colour rounded">
                    <v-select :items="items" hide-details="auto" label="Seleccionar turno"></v-select>
                </v-row>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-row allign="center" class="mx-0 ">
                <v-btn class="mx-2 mb-3" dark large color="rgb(48, 45, 56)" @click.prevent="back" elevation="2">CANCELAR
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn class="mx-2 mb-3" dark large color="deep-purple" @click.prevent="" elevation="2">BUSCAR
                </v-btn>
            </v-row>
        </v-card-actions>
        </v-card>
    </v-container>
</template>
<script>

export default {
    data: () => ({
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        modal: false,
        items: ['Mañana', 'Tarde', 'Noche'],
        search:{
            date:"",
            shift:""
        }
    }),
   methods: {
    async back() {
                this.$router.push({ name: 'reservation-home' })
            }
        },
};
</script>
<style scoped>
.colour {
    background-color: rgb(240, 240, 240)
}
</style>