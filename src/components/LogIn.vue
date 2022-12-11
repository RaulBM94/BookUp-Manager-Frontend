<template>
    <v-card class="mx-auto my-12" max-width="360">
        <v-card-title justify="center">Iniciar Sesión</v-card-title>
        <v-card-text>
            <v-row allign="center" class="mx-0 mb-3 colour">
                <v-text-field label="Email" :rules="emailRules" hide-details="auto" filled></v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0 mb-3 colour">
                <v-text-field label="Contraseña" :type="visible ? 'text' : 'password'" hide-details="auto" append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="visible = !visible" filled></v-text-field>
            </v-row>
            <v-row justify="center" class="mx-0" >
                <v-btn class="mx-2" dark large color="deep-purple" @click="reserve" elevation="2">
                Ingresar
            </v-btn>
            </v-row>
        </v-card-text>
        <v-card-actions>
                        <v-row justify="center" class="mx-0 mt-3 mb-3">
                            <a @click="toggleForm">No tengo cuenta</a>
                        </v-row>
                    </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            emailRules: [
                value => !!value || 'Email Required.',
                value => value.match(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/) || 'Invalid Email Format'
            ],
            passwordRules: [value => value.length >= 5 || 'Password must be at least 5 characters long'],
            visible: false
        }
    },
    methods: {
        toggleForm() {
            this.$emit("toggleForm")
        },
        reserve() {
            this.$router.push({ name: 'personal' })
        }
    }
}
</script>

<style scoped>
.colour{
    background-color: rgb(208, 188, 255)
}
</style>

