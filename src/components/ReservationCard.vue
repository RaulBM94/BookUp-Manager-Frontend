<template>
 <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div class="text-h5 black--text pl-0">{{reservation.hour}}</div>
      <p class="text-h6 text--primary">
        Reserva a nombre de: {{reservation.customer_name}}
      </p>
      <p class="text-h6 text--primary">
        Reserva para: {{reservation.people}}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="purple accent-4"
        @click="reveal = true"
      >
        Ver detalles
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h5 text--primary">
            {{reservation.customer_email}}
          </p>
          <p class="text-h5 text--primary">
            {{reservation.customer_phone}}
          </p>
          <p class="text-h5 text--primary">
            {{reservation.notes}}
          </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="purple accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    data(){
      return{
        reveal: false,
      }
    },
      props:{
        reservation: Object
      },

    methods:{
      change(){
        this.reveal=true
      }
    }
  }
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>