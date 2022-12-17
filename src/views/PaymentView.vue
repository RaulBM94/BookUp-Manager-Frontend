<template>
    <div>
        <div class="color"></div>
    
        <h1>Stripe Payment Gateway Integration</h1>
        <stripe-checkout ref="checkoutRef" mode="subscription" :pk="publishableKey" :line-items="lineItems"
            :success-url="succesURL" :cancel-url="cancelURL" @loading="v => loading = v" />
        <v-btn @click="submit">Paquete Básico</v-btn>
        <v-btn @click="submit"  to="/paymentpremium">Paquete Premium</v-btn> 
        <v-btn @click="submit"  to="/paymentpremiumplus">Paquete Premium+</v-btn> 
        <svg
      class="vector2"
      width="1941"
      height="385"
      viewBox="0 0 1941 385"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 171.111L40.4375 192.5C80.875 213.889 161.75 256.667 242.625 242.407C323.5 228.148 404.375 156.852 485.25 149.722C566.125 142.593 647 199.63 727.875 242.407C808.75 285.185 889.625 313.704 970.5 292.315C1051.37 270.926 1132.25 199.63 1213.12 199.63C1294 199.63 1374.87 270.926 1455.75 278.056C1536.62 285.185 1617.5 228.148 1698.37 171.111C1779.25 114.074 1860.12 57.037 1900.56 28.5185L1941 0V385H1900.56C1860.12 385 1779.25 385 1698.37 385C1617.5 385 1536.62 385 1455.75 385C1374.87 385 1294 385 1213.12 385C1132.25 385 1051.37 385 970.5 385C889.625 385 808.75 385 727.875 385C647 385 566.125 385 485.25 385C404.375 385 323.5 385 242.625 385C161.75 385 80.875 385 40.4375 385H0V171.111Z"
        fill="#6D27C9"
      />
    </svg>

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
<style scoped>
.icon {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.color {
  width: 100%;
  height: 70%;
  background-color: #ffffff;
  position: absolute;
  top: 0;
}

.wave {
  width: 300%;
  height: 100%;
  position: absolute;
  top: 150px;
  left: 0;
  /* background-image: url(../assets/images/wd1.svg); */
  background-position: bottom;
}

.w1 {
  animation: w1 7s linear infinite;
}

.w2 {
  animation: w2 7s linear -.125s infinite, desplazamiento 7s ease -.125s infinite;
  opacity: 0.5;
}

@keyframes w1 {
  0% {
    margin-left: 0;
  }

  100% {
    margin-left: -1620px;
  }
}

@keyframes w2 {
  0% {
    margin-left: 0;
  }

  100% {
    margin-left: -1620px;
  }
}

@keyframes desplazamiento {

  0%,
  100% {
    transform: translateY(-25px);
  }

  50% {
    transform: translateY(10px);
  }
}

.vector2 {
  position: absolute;
  left: -20px;
  top: 400px;
  overflow: visible;
}
</style>



