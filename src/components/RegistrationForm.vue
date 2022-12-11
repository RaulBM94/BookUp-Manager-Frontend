<template>
    <div class="container">
        <form>
            <section v-if="step === 1">
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
                        <v-row allign="center" class="mx-0 colour mb-3">
                            <v-text-field label="Confirmar Contraseña" :type="visible ? 'text' : 'password'"
                                hide-details="auto" append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="visible = !visible" filled></v-text-field>
                        </v-row>
                        <v-row justify="center" class="mx-0 mt-3" v-if="step !== 1">
                            <v-btn dark large color="deep-purple" @click.prevent="prevStep" elevation="2">
                                ANTERIOR
                            </v-btn>
                            <v-btn dark large color="deep-purple" @click.prevent="prevStep" elevation="2">
                                FINALIZAR
                            </v-btn>
                        </v-row>
                        <v-row justify="center" class="mx-0 mt-3">
                            <v-btn v-if="step != totalSteps" dark large color="deep-purple" @click.prevent="nextStep"
                                elevation="2">
                                SIGUIENTE
                            </v-btn>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-row justify="center" class="mx-0  mb-3 mt-3">
                            <a @click="toggleForm">Ya tengo cuenta</a>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </section>
            <section v-if="step === 2">
                <v-card class="mx-auto my-12" max-width="360">
                    <v-card-title>Paso 2: Registra tu establecimiento</v-card-title>
                    <v-card-text>
                        <v-row allign="center" class="colour mx-0 mb-3">
                            <v-text-field label="Nombre del establecimiento" hide-details="auto" filled></v-text-field>
                        </v-row>
                        <v-spacer></v-spacer>
                        <v-spacer></v-spacer>
                        <v-row allign="center" class="colour mx-0 mt-3 mb-3">
                            <v-text-field label="Dirección del establecimiento" hide-details="auto"
                                filled></v-text-field>
                        </v-row>

                        <v-row allign="center" class="mx-0 colour mb-3" justify="center">
                            <v-col cols="3" class="colour" filled md="4">
                                <v-text-field label="Apertura" hide-details="auto" f></v-text-field>
                            </v-col>
                            <v-col cols="3" class="colour " md="4" filled>
                                <v-text-field label="Cierre" hide-details="auto"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row justify="center" class="mx-0 mt-3" v-if="step !== 1">
                            <v-btn dark large color="deep-purple" @click.prevent="prevStep" elevation="2">
                                ANTERIOR
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn dark large color="deep-purple" @click.prevent="reserve" elevation="2">
                                FINALIZAR
                            </v-btn>
                        </v-row>
                        <v-row justify="center" class="mx-0 mt-3">
                            <v-btn v-if="step != totalSteps" dark large color="deep-purple" @click.prevent="nextStep"
                                elevation="2">
                                SIGUIENTE
                            </v-btn>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                    </v-card-actions>
                </v-card>
            </section>


        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            step: 1,
            totalSteps: 2,
            form: {
                name: null,
                email: null,
                phone: null,
                message: null
            }

        }
    },
    methods: {
        prevStep: function () {
            this.step--;
        },
        nextStep: function () {
            this.step++;
        },
        toggleForm() {
            this.$emit("toggleForm")
        },
        reserve() {
            this.$router.push({ name: 'personal' })
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
.colour {
    background-color: rgb(208, 188, 255)
}
</style>