<template>
  <v-app>
    <v-main>
      <AppBar2 />
      <router-view class="view"/>
      <AppFooter />
    </v-main>
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

<style scoped>
.view {
  margin-bottom: 155px;
}
</style>