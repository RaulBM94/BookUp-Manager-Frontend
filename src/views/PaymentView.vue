<template>
    <div>
        <h1>Stripe Payment Gateway Integration</h1>
        <stripe-checkout ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems"
            :success-url="succesURL" :cancel-url="cancelURL" @loading="v => loading = v" />
        <v-btn @click="submit">Pay now</v-btn>
    </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
    components: {
        StripeCheckout
    },
    data() {
        this.publishableKey = "pk_test_51MFaolEG3SIgnXgsDmz1CK1lWZO4onoYELtrDnMFxkCzKGVzWlssCO9XzC2m30MLfwXuYV0GK20tRLRTy14P1Fqz00efkTa4Cn"
        return {
            loading: false,
            lineItems: [
                {
                    price: 'price_1MFe7OEG3SIgnXgsiolkDPOx',
                    quantity: 1
                }
            ],
            successURL: 'http://localhost:8080/success',
            cancelURL: 'http://localhost:8080/error'
        }
    },
    methods: {
        submit() {
            this.$refs.checkoutRef.redirectToCheckout()
        }
    }
}


</script>
