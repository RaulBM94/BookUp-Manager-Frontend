<template>
    <header>
        <v-app-bar app v-if="!authStore.isLoggedIn" color="deep-purple accent-4" dense dark>
            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item-group active-class="deep-purple--text text--accent-4">
                        <v-list-item :to="{ name: 'home' }">
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            Home
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
                            <router-link :to="{ name: 'login' }">Área Clientes</router-link>
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
        <v-app-bar app v-else color="deep-purple accent-4" dense dark>
            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </template>

                <v-list nav>
                    <v-list-item-group active-class="deep-purple--text text--accent-4"></v-list-item-group>
                    <v-list-item link @click="go('home')" >
                        <v-list-item-title> Home</v-list-item-title>
                    </v-list-item>
                    <v-list-item :to="{ name: 'personal' }">
                        <v-list-item-title> Área Clientes</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Perfil</v-list-item-title>
                    </v-list-item>
                    <v-list-item :to="{ name: 'reservation-home' }">
                        <v-list-item-title >Gestionar
                                Reservas</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Gestionar Mesas</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item @click.prevent="logout">
                        <v-list-item-title>Salir</v-list-item-title>
                    </v-list-item>
                </v-list>

            </v-menu>
            <v-spacer></v-spacer>
            <v-toolbar-title> BookUp Manager</v-toolbar-title>

        </v-app-bar>
    </header>

</template>

<script>
import { useAuthStore } from '@/stores/stores';

export default {
    data() {
        return {
            authStore: useAuthStore()
        };
    },
    methods: {
        logout() {
            this.authStore.logout()
            this.$router.push({
                name: 'home'
            })
        },
        go(name){
            this.$router.push({
                name: name
            })
        }

    }
}




</script>

<style lang="scss" scoped>

</style>