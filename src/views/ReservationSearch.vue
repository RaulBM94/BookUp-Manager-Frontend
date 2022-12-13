<template>
    <v-container width="360" height="500">
        <v-card class="mx-auto my-12" >
            <v-card-title>Crear Reserva</v-card-title>
            <v-row class=" mx-0" hide-details="auto" justify="center">
                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date"
                    transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="date" label="Selecciona una fecha" prepend-icon="mdi-calendar" readonly
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
            </v-row>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-btn class="extended-fab-dark mx-0" justify="center" max-height="52px">
                <div class="state-layer3">
                    <div class="label-text">BUSCAR</div>
                </div>
            </v-btn>
        </v-card>
    </v-container>
</template>
<script>

export default {
    data: () => ({
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
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