<template>
    <div>
        <h1>Stripe Payment Gateway Integration</h1>
        <stripe-checkout ref="checkoutRef" mode="subscription" :pk="publishableKey" :line-items="lineItems"
            :success-url="succesURL" :cancel-url="cancelURL" @loading="v => loading = v" />
        <v-btn @click="submit3">Paquete Premium+</v-btn>
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
        this.publishableKey = "pk_test_51MFxi0GV0Z40zH9FvUa5UKVOmepZ0wxGGtI4Okdpr1F3pkJqXn02NWDJPuWdvfmrvrs7LzWn5IvKQ5kA9VdxamMR007SFbdf51"
        return {
            loading: false,
            lineItems: [
             
                {
                    price:'price_1MFxkDGV0Z40zH9F7v7eLRu4',
                    quantity:1
                },
               
            ],
            successURL: 'http://localhost:8080/success',
            cancelURL: 'http://localhost:8080/error'
        }
    },
    methods: {
        submit3() {
            this.$refs.checkoutRef.redirectToCheckout()
        },
       
        },
        
        }
    

</script>
