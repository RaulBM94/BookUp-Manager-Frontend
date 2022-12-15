<template>
  <v-app>
    <AppBar2 />
    <v-main>
      <router-view/>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppBar2 from './components/AppBar2.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppBar2,
    AppFooter
  }
};
</script>


