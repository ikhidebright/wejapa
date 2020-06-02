<template>
  <v-app>
    <v-content>
    <ErrorAlert />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import ErrorAlert from "@/components/ErrorAlert.vue"

export default {
  name: 'App',

  components: {
    ErrorAlert
  },

  data: () => ({
    //
  }),
};
</script>

<style>
</style>
