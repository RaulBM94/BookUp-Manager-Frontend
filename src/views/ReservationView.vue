<template>
    <v-card class="mx-auto my-12" max-width="360">
        <v-card-title>Crear Reserva</v-card-title>
        <v-card-text>
            <v-row allign="center" class="mx-0 mb-3 colour">
                <v-text-field label="Teléfono" :rules="emailRules" hide-details="auto" filled></v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0 mb-3 colour">
                <v-text-field label="Email" :type="visible ? 'text' : 'password'" hide-details="auto" append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="visible = !visible" filled></v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0 mb-3 colour">
                <v-text-field label="Hora de reserva" :type="visible ? 'text' : 'password'" hide-details="auto" append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="visible = !visible" filled></v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0 mb-3 colour">
                <v-text-field label="Personas" :type="visible ? 'text' : 'password'" hide-details="auto" append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="visible = !visible" filled></v-text-field>
                </v-row>
        </v-card-text>
        <v-card-actions>
            <v-row allign="center" class="mx-0 " >
                <v-btn class="mx-2" dark large color="deep-purple" @click="reserve" elevation="2">
                Añadir
            </v-btn>
            </v-row>

        </v-card-actions>
    </v-card>
</template>

<script>

</script>

<style scoped>
.colour{
    background-color: rgb(208, 188, 255)
}
.cap{
position: absolute;
width: 432px;
height: 106px;
left: -12px;
top: 64px; 
background: #5D26A3;
}



/* Purple800 */


</style>

