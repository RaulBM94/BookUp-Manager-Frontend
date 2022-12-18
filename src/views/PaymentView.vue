<template>
    <div>
        <div class="bg_color"></div>
        <div class="wave w1"></div>
        <div class="wave w2"></div>
        <div class="color"></div>
    
        <h1>Stripe Payment Gateway Integration</h1>
        <stripe-checkout ref="checkoutRef" mode="subscription" :pk="publishableKey" :line-items="lineItems"
            :success-url="succesURL" :cancel-url="cancelURL" @loading="v => loading = v" />
        <v-btn @click="submit">Paquete Básico</v-btn>
        <v-btn @click="submit"  to="/paymentpremium">Paquete Premium</v-btn> 
        <v-btn @click="submit"  to="/paymentpremiumplus">Paquete Premium+</v-btn> 
       
        

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
                },
                
            ],
            successURL: 'http://localhost:8080/success',
            cancelURL: 'http://localhost:8080/error'
        }
    },
    methods: {
        submit() {
            this.$refs.checkoutRef.redirectToCheckout()
        },
        
        }
    }



</script>
<style>
.bg_color{
    width:100%;
    height:50%;
    background:#9a56f1;
    position: absolute;
    top:0;

}
.wave{
    background-image: url(../assets/images/wd1.svg);
    background-image: color white;
    width:300%;
    height: 100%;
    display: flex;
    position: absolute;
    top: 0%;
    
}
</style>
