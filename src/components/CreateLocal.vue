<template>
  <v-card class="mx-auto my-12" max-width="360">
        <v-card-title>2: Regístrate tu establecimiento</v-card-title>
        <v-card-text>
            <v-row allign="center" class="colour mx-0 mb-3">
                <v-text-field label="Nombre del establecimiento" hide-details="auto" filled></v-text-field>
            </v-row>
            <v-row allign="center" class="colour mx-0 mb-3">
                <v-text-field label="Dirección del establecimiento" hide-details="auto" filled></v-text-field>
            </v-row>

            <v-row allign="center" class="mx-0"  justify="center">
                <v-col cols="3" class="colour" filled md="4">
                    <v-text-field label="Apertura"
                hide-details="auto" f></v-text-field>
                </v-col>
                <v-col cols="3" class="colour " md="4" filled>
                    <v-text-field label="Cierre"
                hide-details="auto"></v-text-field>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-row allign="center" class="mx-0 mb-3 mt-3" >
                <v-btn class="mx-2" dark large color="deep-purple" @click="reserve" elevation="2">
                ANTERIOR
            </v-btn>
            </v-row>
            <v-row allign="center" class="mx-0 mb-3 mt-3" >
                <v-btn class="mx-2" dark large color="deep-purple" @click="reserve" elevation="2">
                FINALIZAR
            </v-btn>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.colour{
    background-color: rgb(208, 188, 255)
}

</style>