<template>
   <div>
<LogIn v-if="isLogged" @toggleForm="toggleForm"/>
<SignUp v-else @toggleForm="toggleForm"/>
   </div>
</template>

<script>
import LogIn from '@/components/LogIn.vue';
import SignUp from '@/components/SignUp.vue'
export default {
  data(){
    return{
    isLogged:true
    }
  },
    components:{
      LogIn,
      SignUp
    },
    methods:{
      toggleForm(){
        this.isLogged = !this.isLogged
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
