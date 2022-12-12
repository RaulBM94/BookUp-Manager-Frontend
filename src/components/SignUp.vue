<template>
    <v-card class="mx-auto my-12" max-width="360">
        <v-card-title>Paso 1: Regístrate como usuario</v-card-title>
        <v-card-text>
            <v-row allign="center" class="colour mx-0 mb-3">
                <v-text-field label="Nombre" hide-details="auto" filled></v-text-field>
            </v-row>
            <v-row allign="center" class="colour mx-0 mb-3">
                <v-text-field label="Teléfono" hide-details="auto" filled></v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0 mb-3 colour">
                <v-text-field label="Email" :rules="emailRules" hide-details="auto" filled></v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0 mb-3 colour">
                <v-text-field label="Contraseña" :type="visible ? 'text' : 'password'" hide-details="auto"
                    append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'" @click:append="visible = !visible"
                    filled></v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0 colour">
                <v-text-field label="Confirmar Contraseña" :type="visible ? 'text' : 'password'" hide-details="auto"
                    append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'" @click:append="visible = !visible"
                    filled></v-text-field>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-row allign="center" class="mx-0 mb-3 mt-3">
                <v-btn class="mx-2" dark large color="deep-purple" @click="nextComponent" elevation="2">
                    SIGUIENTE
                </v-btn>
            </v-row>
            <v-row allign="center" class="mx-0  mb-3 mt-3">
                <a @click="toggleForm">Ya tengo cuenta</a>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    methods: {
        toggleForm() {
            this.$emit("toggleForm")
        },
        nextComponent() {
            this.$emit("next")
        },
    }
}
</script>

<style scoped>
.colour {
    background-color: rgb(208, 188, 255)
}
</style>