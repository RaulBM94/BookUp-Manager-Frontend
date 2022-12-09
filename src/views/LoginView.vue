<template>
    <v-card :loading="loading" class="mx-auto my-12" max-width="360">
        <v-card-title>Log In</v-card-title>
        <v-card-text>
            <v-row allign="center" class="mx-0">
                <v-text-field label="Insert Email" :rules="emailRules" hide-details="auto"
                    prepend-icon="mdi-at"></v-text-field>
            </v-row>
            <v-row allign="center" class="mx-0">
                <v-text-field label="Insert Password" :type="visible ? 'text' : 'password'" hide-details="auto"
            prepend-icon="mdi-lock" append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="visible = !visible"></v-text-field>
            </v-row>
        </v-card-text>
        <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Access
      </v-btn>
    </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            loading:false,
            emailRules: [
                value => !!value || 'Email Required.',
                value => value.match(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/) || 'Invalid Email Format'
            ],
            passwordRules: [value => value.length >= 5 || 'Password must be at least 5 characters long'],
            visible: false
        }
    },
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => {
            this.loading = false
            this.$router.push({name:'personal'})
        }, 2000)
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
