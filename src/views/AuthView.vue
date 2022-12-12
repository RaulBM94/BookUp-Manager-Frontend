<template>
   <div>
<LogIn v-if="isLogged" @toggleForm="toggleForm"/>
<RegistrationForm v-else @toggleForm="toggleForm"/>
   </div>
</template>

<script>
import LogIn from '@/components/LogIn.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';
export default {
  data(){
    return{
    isLogged:true,
    }
  },
    components:{
      LogIn,
      RegistrationForm,
    },
    methods:{
      toggleForm(){
        this.isLogged = !this.isLogged
      },
    }
}
</script>

<style lang="scss" scoped>

</style>
