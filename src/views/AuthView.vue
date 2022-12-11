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
    next:true
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
      nextComponent(){
        this.next= !this.next
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
