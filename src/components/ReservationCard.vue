<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-text>
      <div class="text-h6 black--text pl-0">{{ reservation.hour }}</div>
      <p class="text-h6 text--primary">
        Reserva a nombre de: {{ reservation.customer_name }}
      </p>
      <p class="text-h6 text--primary">
        Reserva para: {{ reservation.people }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="purple accent-4" @click="reveal = true">
        VER DETALLES
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal detalle" >
        <v-card-text class="pb-0">
          <v-col cols="6-sm-2" class="text-h6 text--primary">
            <v-icon width="25" height="25" viewBox="0 0 80 80" color="rgb(103, 80, 164)">
              mdi-email
            </v-icon>
            {{ reservation.customer_email }}
          </v-col>
          <v-col cols="6-sm-2" class="text-h6 text--primary">
            <v-icon width="25" height="25" viewBox="0 0 80 80" color="rgb(103, 80, 164)">
              mdi-phone
            </v-icon>
            {{ reservation.customer_phone }}
          </v-col>
          <v-col cols="6-sm-2" class="text-h5 text--primary" v-if="reservation.notes">
            <v-icon width="25" height="25" viewBox="0 0 80 80" color="rgb(103, 80, 164)">
              mdi-message-alert
            </v-icon>
            {{ reservation.notes }}
          </v-col>

          <v-row align="center">
            <v-col cols="12" sm="6">
              <div class="text-center">
                <div class="my-2">
                  <v-btn color="deep-purple" dark  @click.prevent="setReminder">
                    ENVIAR RECORDATORIO
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn text color="purple accent-4" @click="reveal = false">
            CERRAR
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
import {useReminderStore} from '@/stores/stores'
export default {
  data() {
    return {
      reveal: false,
      reminderStore: useReminderStore(),
    }
  },
 props:{
    reservation:Object
 },
  methods: {
    change() {
      this.reveal = true
    },
    setReminder(){
      const date = this.reservation.date.split('T')[0]
      this.reminderStore.setCustomerInfo(this.reservation.customer_email,this.reservation.customer_name, date ,this.reservation.hour, this.reservation.people)
        this.$router.push({ name: 'reservation-send'})
    },
  }
}
</script>

<style>
.detalle{
  height:fit-content;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>