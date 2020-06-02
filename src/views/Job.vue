<template>
  <div class="login mb-0 pa-3">
  <br>
  <br>
  <v-card
    shaped
    class="mx-auto my-12 mt-1 mb-9"
    max-width="374"
    sm='flat'
  >
      <v-col cols="12" sm="12" md="12">
<div class="text-center ma-2">
      <i class="fas fa-user-circle"></i>
</div>
      <br>
      {{ job.title}}
      <br>
      <br>
      {{ job.location}}
      <br>
      <br>
      {{ job.status}}
      <br>
      <br>
      {{ job.experience}}
      <br>
      <br>
      {{ job.type }}
      <br>
      <br>
      {{ job.description }}
      <br>
      <br>
      N {{ job.salary }}
      <br>
        </v-col>
    </v-card>
    <br>
  </div>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    data: () => ({
    }),
    computed: {
      ...mapState({
        job: 'job'
      })
    }
}
</script>

<style scoped>
.login {
  background-color:#f5f5f5;
  min-height: 100vh;
  max-height: auto
}

i {
  font-size: 19vmin
}

@media only screen and (min-width: 600px) {
  i {
  font-size: 12vmin
}
}
</style>
