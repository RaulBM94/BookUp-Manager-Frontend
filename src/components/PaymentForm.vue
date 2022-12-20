<template>
  <div class="text-center">
    <stripe-checkout ref="basic" mode="subscription" :pk="packages[0].publishableKey" :line-items="packages[0].lineItem"
      :success-url="packages[0].succesURL" :cancel-url="packages[0].cancelURL" @loading="v => loading = v" />
    <v-btn dark large color="purple" elevation="2" width="222.52px" class="mb-3" rounded @click="submit">
      {{ packages[0].type }}
    </v-btn>

    <stripe-checkout ref="premium" mode="subscription" :pk="packages[1].publishableKey"
      :line-items="packages[1].lineItem" :success-url="packages[1].succesURL" :cancel-url="packages[1].cancelURL"
      @loading="v => loading = v" />

    <v-btn dark large color="purple" elevation="2" width="222.52px" class="mb-3" rounded @click="submit2">
      {{ packages[1].type }}
    </v-btn>

    <stripe-checkout ref="premiumPlus" mode="subscription" :pk="packages[2].publishableKey"
      :line-items="packages[2].lineItem" :success-url="packages[2].succesURL" :cancel-url="packages[2].cancelURL"
      @loading="v => loading = v" />

    <v-btn dark large color="purple" elevation="2" width="222.52px" rounded @click="submit3">
      {{ packages[2].type }}
    </v-btn>
    <v-row justify="center" class="mx-0 mt-3" v-if="step !== 1">
      <v-btn dark large color="deep-purple" @click.prevent="prevStep" elevation="2">
        ANTERIOR
      </v-btn>
      <v-spacer></v-spacer>
    </v-row>
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
      packages: [
        {
          type: 'Paquete Básico',
          publishableKey: 'pk_test_51MFaolEG3SIgnXgsDmz1CK1lWZO4onoYELtrDnMFxkCzKGVzWlssCO9XzC2m30MLfwXuYV0GK20tRLRTy14P1Fqz00efkTa4Cn',
          lineItem: [
            {
              price: 'price_1MFe7OEG3SIgnXgsiolkDPOx',
              quantity: 1
            },
          ],
          successURL: 'http://localhost:8080/success',
          cancelURL: 'http://localhost:8080/personal'
        },
        {
          type: 'Paquete Premium',
          publishableKey: 'pk_test_51MFxMIBKR5OSrQIISRmpXkaNEo6iHEQO57iP9hXHtf2v2qbZB37ji7ouvLz0cRhYXFtnAVN6dyTZN8pQMO4jLTxq00PugQqfbX',
          lineItem: [
            {
              price: 'price_1MFxNABKR5OSrQIIGAv1XnRl',
              quantity: 1
            },
          ],
          successURL: 'http://localhost:8080/success',
          cancelURL: 'http://localhost:8080/personal'
        },
        {
          type: 'Paquete Premium Plus',
          publishableKey: 'pk_test_51MFxi0GV0Z40zH9FvUa5UKVOmepZ0wxGGtI4Okdpr1F3pkJqXn02NWDJPuWdvfmrvrs7LzWn5IvKQ5kA9VdxamMR007SFbdf51',
          lineItem: [
            {
              price: 'price_1MFxkDGV0Z40zH9F7v7eLRu4',
              quantity: 1
            },
          ],
          successURL: 'http://localhost:8080/success',
          cancelURL: 'http://localhost:8080/personal'
        }
      ]
    }
  },
  methods: {
    pushPackage(item) {
      this.selectedPackage = item
    },
    submit() {
      this.$refs.basic.redirectToCheckout()
    },
    submit2() {
      this.$refs.premium.redirectToCheckout()
    },
    submit3() {
      this.$refs.premiumPlus.redirectToCheckout()
    },

  }
}

</script>

<style scoped>

</style>

