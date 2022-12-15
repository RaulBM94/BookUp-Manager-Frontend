<template>
  <div my-auto>
    <v-row class="mx-0 my-12" justify="center">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-btn :elevation="hover ? 24 : 6" class="mx-auto pa-6" transition-swing width="360" to="/reservation/create">
            <v-icon width="25" height="25" viewBox="0 0 80 80" color="rgb(103, 80, 164)">
              mdi-calendar-search
            </v-icon>
            <v-col cols="6">
              CREAR RESERVA
            </v-col>
          </v-btn>
        </template>
      </v-hover>
    </v-row>
    <v-row class="mx-auto my-12" justify="center">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-btn :elevation="hover ? 24 : 6" class="mx-auto pa-6" transition-swing width="360" to="/reservation/search">
            <v-icon width="25" height="25" viewBox="0 0 80 80" color="rgb(103, 80, 164)">
              mdi-calendar-search
            </v-icon>
            <v-col cols="6">
            BUSCAR RESERVAS
          </v-col>
          </v-btn>
        </template>
      </v-hover>
    </v-row>
    <v-row class="mx-auto my-12" justify="center">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-btn :elevation="hover ? 24 : 6" class="mx-auto pa-6" transition-swing width="360" to="/reservation/send">
            <v-icon width="25" height="25" viewBox="0 0 80 80" color="rgb(103, 80, 164)">
              mdi-calendar-search
            </v-icon>
            <v-col cols="6">
            ENVIAR RECORDATORIO
          </v-col>
          </v-btn>
        </template>
      </v-hover>
    </v-row>
  </div>
</template>
<script>
export default {
};
</script>
<style scoped>

</style>