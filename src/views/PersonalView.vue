<template>
  <div my-auto>
    <div class="color"></div>
    <v-row class="mx-0 my-12" justify="center">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-btn :elevation="hover ? 24 : 6" class="mx-auto pa-6" width="360">
            <v-icon width="25" height="25" viewBox="0 0 80 80" color="rgb(103, 80, 164)">
              mdi-account-circle
            </v-icon>
            <v-col cols="6">
              PERFIL 
            </v-col>
          </v-btn>
        </template>
      </v-hover>
    </v-row>
    <v-row class="mx-auto my-12" justify="center">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-btn :elevation="hover ? 24 : 6" class="mx-auto pa-6" transition-swing width="360" to="/reservation">
            <v-icon width="25" height="25" viewBox="0 0 80 80" color="rgb(103, 80, 164)">
              mdi-calendar
            </v-icon>
            <v-col cols="6">
              GESTIONAR RESERVAS
            </v-col>
          </v-btn>
        </template>
      </v-hover>
    </v-row>
    <v-row class="mx-auto my-12" justify="center">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-btn :elevation="hover ? 24 : 6" class="mx-auto pa-6" transition-swing width="360">
            <v-icon width="25" height="25" viewBox="0 0 80 80" color="rgb(103, 80, 164)">
              mdi-calendar
            </v-icon>
            <v-col cols="6">
            GESTIONAR MESAS
          </v-col>
          </v-btn>
        </template>
      </v-hover>
    </v-row>
    <!-- <div class="color"></div>
    <div class="wave w1"></div>
    <div class="wave w2"></div> -->

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

.color {
  width: 100%;
  height: 70%;
  background-color: #ffffff;
  position: absolute;
  top: 0;
}

.wave {
  width: 300%;
  height: 100%;
  position: absolute;
  top: 150px;
  left: 0;
  /* background-image: url(../assets/images/wd1.svg); */
  background-position: bottom;
}

.w1 {
  animation: w1 7s linear infinite;
}

.w2 {
  animation: w2 7s linear -.125s infinite, desplazamiento 7s ease -.125s infinite;
  opacity: 0.5;
}

@keyframes w1 {
  0% {
    margin-left: 0;
  }

  100% {
    margin-left: -1620px;
  }
}

@keyframes w2 {
  0% {
    margin-left: 0;
  }

  100% {
    margin-left: -1620px;
  }
}

@keyframes desplazamiento {

  0%,
  100% {
    transform: translateY(-25px);
  }

  50% {
    transform: translateY(10px);
  }
}
</style>