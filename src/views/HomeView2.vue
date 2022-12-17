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
      <v-btn elevation="6" class="mx-auto">Empieza ya</v-btn>
    </div>
    <div class="container-img">

    </div>
    

    <div class="testimonial text-center">
      <div class="title-1 text-sm-h5 text-md-h4 font-weight-medium">
        Te ofrecemos los siguientes servicios:
        <v-row no-gutters>
          <v-col>
            <v-card class="pa-2" outlined tile>
              <v-card-title>Gestionar tus reservas de manera fácil y cómoda</v-card-title>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-2" outlined tile>
              Poder
            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-2" outlined tile>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>


  </div>


</template>

<script>
export default {
  data: () => ({
     name: 'home',
    data() {
        return {
  
        }
    },
    methods: {
       
    },
  }),
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

  .img {
    max-width: 400px;
  }
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

.subtitle {
  color: rgb(0, 0, 0);
  margin: 0 1.5rem;
  margin-top: 0.5rem;
  color: rgb(247, 228, 252)
}

.tetimonial {
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
</style>