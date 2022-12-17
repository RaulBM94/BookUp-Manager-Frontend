<template>
  <div>
    <h1>Stripe Payment Gateway Integration</h1>
    <stripe-checkout ref="checkoutRef" mode="subscription" :pk="publishableKey" :line-items="lineItems"
      :success-url="succesURL" :cancel-url="cancelURL" @loading="v => loading = v" />
    <v-btn @click="submit2">Paquete Premium</v-btn>
    <!-- <v-btn @click="submit3">Paquete Premium+</v-btn> -->

  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout
  },
  data() {
    return {
      loading: false,
      lineItems: [
        
        {
          price: 'price_1MFxNABKR5OSrQIIGAv1XnRl',
          quantity: 1
        },
        
      ],
      publishableKey: "pk_test_51MFxMIBKR5OSrQIISRmpXkaNEo6iHEQO57iP9hXHtf2v2qbZB37ji7ouvLz0cRhYXFtnAVN6dyTZN8pQMO4jLTxq00PugQqfbX",
      successURL: 'http://localhost:8080/success',
      cancelURL: 'http://localhost:8080/error'
    }
  },
  methods: {
    submit2() {
      this.$refs.checkoutRef.redirectToCheckout()
    },

  },

}


</script>
