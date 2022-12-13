<template>
    <v-container>
        <v-card class="mx-auto my-12" width="360" height="500" elevation="2">
            <v-card-title justify="center">Buscar Reserva</v-card-title>
            <v-row class=" mx-0 ml-3 mr-3" hide-details="auto" justify="center">
                <v-menu ref="menu" v-model="menu" :close-on-content-click="false"
                    :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }" >
                        <v-text-field v-model="date" class="colour mb-6" hide-details="auto"  label="Selecciona una fecha" prepend-icon="mdi-calendar" readonly
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
                <v-row allign="center" class="mx-0 mb-3 colour">
                    <v-select :items="items" hide-details="auto" filled label="Seleccionar turno"></v-select>
                </v-row>
            </v-row>
            <v-row justify="center" class="mx-0 mt-3" v-if="step !== 1">
                <v-btn dark large color="deep-purple" @click.prevent="prevStep" elevation="2">
                    BUSCAR
                </v-btn>
            </v-row>
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
    components: {},
    props: {},
};
</script>
<style scoped>
.colour {
    background-color: rgb(208, 188, 255)
}
</style>