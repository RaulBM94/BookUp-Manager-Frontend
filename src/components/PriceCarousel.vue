<template>
  <div class="cont">
    <div class="titulo">
      <span font-weight="regular">Los paquetes que ofertamos:</span>
      <v-divider align="center" width="80%" class="mx-auto"></v-divider>
    </div>
    <v-carousel v-model="model" height="fit-content" hide-delimiters>
      <v-carousel-item v-for="mensaje, idx in mensajes" :key="idx">
        <v-card
          class="mx-auto format"
          max-width="300"
          min-height="300px"
        >
          <v-card-title>
            <span class="text-h3 card-title text-center">{{mensaje.title}}</span>
          </v-card-title>

          <div class="text-h3-md-h2-sm-h1 mensaje pl-3 pr-3">
            {{mensaje.message}}
          </div>

          <v-card-actions>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="precio text-h4">{{mensaje.price}}</v-list-item-title>
                
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-carousel-item>
    </v-carousel>
   

  </div>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    mensajes: [
      {
        title:'BASIC',
        message: '¡Comienza a gestionar las reservas de tu restaurante desde ya y olvídate de los no show! Te ofrecemos 30 días de prueba gratis',
        price:'5€/mes'
      },
      {
        message: 'Incluye el BASIC más nuevas funcionalidades como un TPV integrado o la posibilidad de gestionar mesas...¡Todo en uno!',
        title:'PREMIUM',
        price:'7,99 €/mes'
      },
      {
        message: 'Accede a toda nuestra aplicación sin límites: Los informes en tiempo real son accesibles desde cualquier lugar + Recursos + Crecimiento',
       title: 'PREMIUM +',
       price: '10,99 €/mes'
      }
    ]
  })
}
</script>
<style lang="scss" scoped>
.cont {

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.precio{
  color:white;

}
.titulo {
  width: 100%;
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
}
.format{
  border-radius: 10px;
  background-color:rgb(71, 11, 100);
  color: white
}
.mensaje{
  color:white;
}
.card-title {
  font-weight: bold;
  justify-content: center;
}
</style>