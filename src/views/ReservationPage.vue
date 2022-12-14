<template>
    <div my-auto>
      <v-row class="mx-0 my-12" justify="center">
        <v-btn height="50" elevation="4" width="360" to="/reservation/create">
          <v-col cols="3">
            <v-icon width="25" height="25" viewBox="0 0 80 80" color="rgb(103, 80, 164)">
                mdi-calendar-plus
              </v-icon>
          </v-col>
          <v-col cols="6">
        Crear Reserva
          </v-col>
        </v-btn>
      </v-row>
      <v-row class="mx-auto my-12" justify="center">
        <v-btn height="50" elevation="4" width="360" to="/reservation/search">
          <v-col cols="3">
            <v-icon width="25" height="25" viewBox="0 0 80 80" color="rgb(103, 80, 164)">
                mdi-calendar-search
              </v-icon>
          </v-col>
          <v-col cols="6">Buscar Reservas</v-col>
        </v-btn>
      </v-row>
      <v-row class="mx-auto my-12" justify="center">
        <v-btn height="50" elevation="4" width="360" to="">
          <v-col cols="3">
              <v-icon width="25" height="25" viewBox="0 0 80 80" color="rgb(103, 80, 164)">
                mdi-calendar-arrow-right
              </v-icon>
          </v-col>
          <v-col cols="6">Enviar Recordatorio</v-col>
        </v-btn>
      </v-row>
    </div>
  </template>
  <script>
  export default {
  };
  </script>
  <style scoped>
  </style>