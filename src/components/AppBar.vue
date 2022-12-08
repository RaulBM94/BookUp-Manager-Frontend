<template>
    <div>
        <v-card
        class="mx-auto overflow-hidden"
        >
            
        <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
        >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        
        <v-spacer></v-spacer>

        <v-toolbar-title>BookUp Manager</v-toolbar-title>

        </v-app-bar>
        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        
      
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
            >
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
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
                <v-list-item-title>Área Clientes</v-list-item-title>
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
        </v-navigation-drawer>
    </v-card>
</div>
  </template>

<script>
export default {
  name: 'AppBar',
  data () {
    return{
        drawer: false
    }
  }  
}
</script>