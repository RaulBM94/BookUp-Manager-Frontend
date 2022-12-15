<template>
  <header>
    <v-toolbar app color="deep-purple accent-4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-tittle class="white--text">BookUp Manager</v-toolbar-tittle>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer app v-if="!authStore.isLoggedIn" v-model="drawer" temporary dark>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img src="https://randomuser.me/api/portraits/women/85.jpg" alt="">
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="white--text mt-3 headline">Carmensita</p>
        </v-flex>
        <v-flex>
          <v-list>
            <v-list-item-group active-class="deep-purple--text text--accent-4">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <router-link :to="{ name: 'home' }">Home</router-link>
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
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <v-navigation-drawer app v-else v-model="drawer" temporary dark>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img src="https://randomuser.me/api/portraits/women/85.jpg" alt="">
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="white--text mt-3 headline">{{this.authStore.get}}</p>
        </v-flex>
        <v-flex>
          <v-list>
            <v-list-item-group active-class="deep-purple--text text--accent-4"></v-list-item-group>
            <v-list-item>
              <v-list-item-title><router-link :to="{ name: 'home' }">Home</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link :to="{ name: 'personal' }">Área Clientes</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Perfil</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link :to="{ name: 'reservation-home' }">Gestionar
                  Reservas</router-link></v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Gestionar Mesas</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item @click.prevent="logout">
              <v-list-item-title>Salir</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </header>

</template>

<script>
import { useAuthStore } from '@/stores/stores';

export default {
  data() {
    return {
      authStore: useAuthStore(),
      drawer: false,
      name: ''
    };
  },
  methods: {
    
    logout() {
      this.authStore.logout()
      this.$router.push({
        name: 'home'
      })
    }
  }
}




</script>

<style lang="scss" scoped>

</style>