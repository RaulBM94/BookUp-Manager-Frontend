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
    <svg
      class="vector2"
      width="1941"
      height="385"
      viewBox="0 0 1941 385"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 171.111L40.4375 192.5C80.875 213.889 161.75 256.667 242.625 242.407C323.5 228.148 404.375 156.852 485.25 149.722C566.125 142.593 647 199.63 727.875 242.407C808.75 285.185 889.625 313.704 970.5 292.315C1051.37 270.926 1132.25 199.63 1213.12 199.63C1294 199.63 1374.87 270.926 1455.75 278.056C1536.62 285.185 1617.5 228.148 1698.37 171.111C1779.25 114.074 1860.12 57.037 1900.56 28.5185L1941 0V385H1900.56C1860.12 385 1779.25 385 1698.37 385C1617.5 385 1536.62 385 1455.75 385C1374.87 385 1294 385 1213.12 385C1132.25 385 1051.37 385 970.5 385C889.625 385 808.75 385 727.875 385C647 385 566.125 385 485.25 385C404.375 385 323.5 385 242.625 385C161.75 385 80.875 385 40.4375 385H0V171.111Z"
        fill="#6D27C9"
      />
    </svg>
  </div>
</template>
<script>
export default {
};
</script>
<style scoped>
.vector2 {
  position: absolute;
  left: -20px;
  top: 400px;
  overflow: visible;
}
</style>