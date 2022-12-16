<template>
  <div style="width: 300px;">
    <v-text-field label="Insert Email" :rules="emailRules" hide-details="auto" prepend-icon="mdi-at"></v-text-field>
    <v-text-field label="Insert Password" :type="visible ? 'text' : 'password'" hide-details="auto"
      prepend-icon="mdi-lock" append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="visible = !visible"></v-text-field>
    <svg width="1920" height="340" viewBox="0 0 1920 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M0 293.561L46.4242 300.551C91.2475 307.541 182.495 321.52 273.742 279.582C366.591 237.645 457.838 139.791 549.086 153.77C640.333 167.749 731.581 293.561 822.828 328.509C914.076 363.457 1006.92 307.541 1098.17 307.541C1189.42 307.541 1280.67 363.457 1371.91 328.509C1463.16 293.561 1554.41 167.749 1647.26 146.781C1738.51 125.812 1829.75 209.687 1874.58 251.624L1921 293.561V0H1874.58C1829.75 0 1738.51 0 1647.26 0C1554.41 0 1463.16 0 1371.91 0C1280.67 0 1189.42 0 1098.17 0C1006.92 0 914.076 0 822.828 0C731.581 0 640.333 0 549.086 0C457.838 0 366.591 0 273.742 0C182.495 0 91.2475 0 46.4242 0H0V293.561Z"
        fill="#6D27C9" />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailRules: [
        value => !!value || 'Email Required.',
        value => value.match(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/) || 'Invalid Email Format'
      ],
      passwordRules: [value => value.length >= 5 || 'Password must be at least 5 characters long'],
      visible: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
