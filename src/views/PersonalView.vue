<template>
  <div my-auto>
    <v-row class="mx-0 my-12" justify="center">
      <v-btn height="50" elevation="4" width="360">
        <v-col cols="3">
          <v-icon width="25" height="25" viewBox="0 0 80 80" color="rgb(103, 80, 164)">
              mdi-account-circle
            </v-icon>
        </v-col>
        <v-col cols="6">
          Perfil
        </v-col>
      </v-btn>
    </v-row>
    <v-row class="mx-auto my-12" justify="center">
      <v-btn height="50" elevation="4" width="360" to="/reservation">
        <v-col cols="3">
          <v-icon width="25" height="25" viewBox="0 0 80 80" color="rgb(103, 80, 164)">
              mdi-calendar
            </v-icon>
        </v-col>
        <v-col cols="6">Gestionar Reservas</v-col>
      </v-btn>
    </v-row>
    <v-row class="mx-auto my-12" justify="center">
      <v-btn height="50" elevation="4" width="360">
        <v-col cols="3">
            <v-icon width="25" height="25" viewBox="0 0 80 80" color="rgb(103, 80, 164)">
              mdi-table-chair
            </v-icon>
        </v-col>
        <v-col cols="6">Gestionar Mesas</v-col>
      </v-btn>
    </v-row>
  </div>
</template>
<script>
export default {
};
</script>
<style scoped>
.icon {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}
</style>