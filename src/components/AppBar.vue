<template>
    <header>
        <v-app-bar color="deep-purple accent-4" dense dark v-if="!store.isLoggedIn">
            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                                <router-link :to="{name:'home'}">Home</router-link>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-room-service</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Servicios</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-currency-usd</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Precios</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-account</v-icon>
                            </v-list-item-icon>
                            <router-link :to="{name:'login'}">Área Clientes</router-link>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-help-circle</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Sobre Nosotros</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-comment-multiple</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Comentarios</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-account-plus</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Regístrate como Usuario</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
            <v-spacer></v-spacer>
            <v-toolbar-title>BookUp Manager</v-toolbar-title>

        </v-app-bar>
        <v-app-bar color="deep-purple accent-4" dense dark v-else>
            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                                <router-link :to="{name:'home'}">Home</router-link>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-account</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Perfil</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-timetable</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Gestionar Reservas</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-table</v-icon>
                            </v-list-item-icon>
                            <router-link>Gestionar Mesas</router-link>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-help-circle</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Sobre Nosotros</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-comment-multiple</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Comentarios</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-account-plus</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Regístrate como Usuario</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
            <v-spacer></v-spacer>
            <v-toolbar-title>Bienvenido</v-toolbar-title>

        </v-app-bar>
    </header>

</template>

<script>
import { useAuthStore } from '../stores/stores'

export default {
  data() {
    return {
      store: useAuthStore()
    }
  },
  methods: {
    logout() {
      this.store.logout()
      this.$router.push({ name: 'auth' })
    }
  },
}

</script>

<style lang="scss" scoped>

</style>