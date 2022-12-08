<template>
      <v-footer
        v-bind="localAttrs"
        :padless="padless"
      >
        <v-card
          flat
          tile
          width="100%"
          class="deep-purple accent-4 text-center"
        >
          <v-card-text>
            <v-btn
              v-for="(icon, idx) in icons"
              :key="idx"
              class="mx-4"
              icon
            >
            <router-link :to="{name: links[idx]}">
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </router-link>
            </v-btn>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>BookUp Manager</strong>
          </v-card-text>
        </v-card>
      </v-footer>
</template>

<script>
export default {
 name: 'AppFooter',
    data () {
        return { 
            icons: [
            'mdi-home',
            'mdi-email',
            'mdi-login',
            'mdi-account-supervisor',
            ],
            links: [
                'home',
                'mail',
                'login',
                'about'
            ]
        }
    }
  
}
</script>

<style scoped>

</style>