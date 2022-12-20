<template>
  <div>
    <div class="wrapper">
      <div class="contenedor text-center">
        <div class="logo">
          <v-img class="img" src="@/assets/images/logo.png" />
        </div>
        <div class="title text-sm-h4 text-md-h3 text-xs-h5 font-weight-black"> Tu app de gestión de reservas para tu
          restaurante.</div>
        <div class="subtitle text-sm-h6 text-md-h5 font-weight-medium"> ¡Controla tú mismo las reservas fácilmente y
          olvídate de los No Show!</div>
      </div>
      <v-btn elevation="6" class="mx-auto" :to="{ name: 'login-start' }">Registrarse</v-btn>
      <v-btn elevation="6" class="mx-auto mt-3" :to="{ name: 'login' }">Acceder</v-btn>
    </div>

    <v-card class=" mt-11 mx-6" elevation="0" >
      <div class="title-1 font-weight-medium">
        <v-row>
          <v-col cols="6-sm-12">
            <v-img src="@/assets/images/Control-de-gastos-en-restaurantes.jpg" class="pt-0 imagen ml-12"></v-img>
          </v-col>
          <v-col cols="6-sm-12">
            <div>
              <div class="mb-10">
                  ¿Qué te ofrecemos?
              </div>
              <div>
                <div class="mt-3 mx-auto text-sm-h6 text-md-h5 subtitle1">
                  <v-icon width="80" height="80" color="rgb(103, 80, 164)">mdi-calendar-plus</v-icon>
                  Crear reservas fácilmente
                </div>
                <br>
                <div class="mt-3 mx-auto text-sm-h6 text-md-h5 subtitle1">
                  <v-icon width="80" height="80" color="rgb(103, 80, 164)">mdi-calendar-search</v-icon>
                  Buscar reservas
                </div>
                <br>
                <div class="mt-3 mx-auto text-sm-h6 text-md-h5 subtitle1">
                  <v-icon width="80" height="80" color="rgb(103, 80, 164)">mdi-email-arrow-right</v-icon>
                  Enviarles recordatorios a los clientes
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card>
    <PriceCarousel />
    <br>
    <br>
    <v-card elevation="0">
      <v-row no-gutters class="testimonial mt-3">
        <div class="titulo0" font-weight="regular">¿Qué se dice de nuestro servicio?</div>
        <v-col class="carta1">
          <v-card outlined tile color="purple" class="rounded mr-3 mb-3">
            <v-card-title class="cubo1">
              <div text-center>
                “Nos hemos encontrado con un producto muy competitivo y fácil de usar. Su servicio al cliente es lo
                mejor que he visto en mucho tiempo.”
              </div>

              Andrés Iniesta
              CEO de Green Garden
            </v-card-title>
          </v-card>
        </v-col>
        <v-col class="carta2">
          <v-card outlined tile color="purple" class="rounded">
            <v-card-title class="cubo2">
              <div>
                "Este software ha llegado para revolucionar mi restaurante."
              </div>
              <div>
                Carla Stoessel
                <div>
                  CEO de Mi bahía Restaurant&Spa
                </div>

              </div>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-card>

  </div>
</template>


<script>
import PriceCarousel from '@/components/PriceCarousel.vue';
export default {
  data() {
    return {}},
  components: { PriceCarousel },
  methods:{
    start(){

    }
  }
}
</script>

<style scoped>
.wrapper {
  background: rgb(123, 66, 244);
  background: linear-gradient(93deg, rgba(123, 66, 244, 1) 0%, rgba(206, 89, 246, 1) 100%);
  border-bottom-right-radius: 100px;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  margin-top: 2rem;
}

.img {
  width: 100%;
  max-width: 200px;
  height: auto;
}

@media (min-width: 768px) {
  .wrapper {
    border-bottom-right-radius: 200px;
  }

  .imagen {
    border-top-left-radius: 20px;
  }

  .img {
    max-width: 400px;
  }

  .subtitulo {
    text-align: center;
  }
}

.imagen {
  border-top-left-radius: 100px;

}

.titulo1 {
  font-size: 32px;
}

.subtitulo {
  font-size: 16px;
}

.contenedor {
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
}


.title {
  font-size: 100px;
  margin: 0 1.5rem;
  margin-top: 1rem;
  color: rgb(247, 228, 252)
}

.title1 {
  font-size: 100px;
  margin: 0 1.5rem;
  margin-top: 1rem;
}

.subtitle {
  margin: 0 1.5rem;
  margin-top: 0.5rem;
  color: rgb(247, 228, 252)
}

.subtitle1 {
  margin: 0 1.5rem;
  margin-top: 0.5rem;
}

.testimonial {
  margin: 0 auto;
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.title-1 {
  margin-top: 2rem;
  width: 100%;
  font-size: 40px;
  margin-bottom: 20px;
}

.testimonial {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 768px) {
  .testimonial {
    flex-direction: row;
  }
}

.cont {
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.titulo {
  width: 100%;
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
}

.divider {
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.75);
}

.format {
  border-radius: 10px;
}

.card-title {
  font-weight: bold;
  color: #756752;
}

.question {
  padding-right: 5rem;
  font-weight: bold;
  font-size: 30px;
  color: blueviolet;
}

.cubo1 {
  color: white;
  margin: auto;
}

.cubo2 {
  color: white;
  margin: auto;
}

.rounded {
  padding: 1rem;
}

.carta1 {
  column-gap: 2rem;
}

.titulo0 {
  width: 100%;
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
}
</style>