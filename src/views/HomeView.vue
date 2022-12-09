<template>
  <div class="rectangle1">
    <h2 class="titule">
      Tu app de gestión de reservas para tu restaurante.
    </h2>
    <img src="">
    <h4 class="titule2">
      ¡Controla tú mismo las reservas fácilmente y olvídate de los No Show!
    </h4>
    <button class="startnow" 
    elevation="5" 
    rounded>
      EMPIEZA YA!</button>
    <div class="rectangle2">
      <p>Gestión de reservas</p>
      <v-spacer></v-spacer>
      <p>Crear reservas</p>
      <v-spacer></v-spacer>
      <p>Lista de espera</p>
    </div>
  </div>
</template>

<script>
import {

} from 'vuetify/lib';

export default {
  name: 'HomeView',
  components: {

  },
};
</script>

<style>
@media (max-width: 600px) {
  /* styles for small screens go here */
}

@media (min-width: 600px) and (max-width: 960px) {
  /* styles for medium screens go here */
}

@media (min-width: 960px) {
  /* styles for large screens go here */
}

.titule {
  position: absolute;
  top: 100px;

}

.titule2 {
  position: absolute;
  top: 180px;
}

.startnow {
  position: absolute;
  top: 250px;
}

.rectangle1 {
  position: absolute;
  width: 320px;
  height: 754px;
  left: 0px;
  top: 0px;

  background: linear-gradient(89.72deg, #7B42F4 0.27%, rgba(114, 71, 130, 0.85) 50.03%, #CE59F7 99.78%);
  border-radius: 0px 0px 280px 0px;
}


.rectangle2 {
  position: absolute;
  width: 228px;
  height: 323px;
  left: 94px;
  top: 400px;

  background: #B083F8;
  border-radius: 100px 0px 0px 100px;
}
</style>