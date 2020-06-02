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
      {{ user[0].name }}
      <br>
      {{ user[0].email }}
      <br>
      {{ user[0].phone }}
      <br>
      {{ user[0].github }}
      <br>
      {{ user[0].resume }}
        </v-col>
        <v-btn x-large color="#001F90" dark block
          @click="jobs">View Jobs</v-btn>
    </v-card>
    <br>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

  export default {
    data: () => ({
    }),
    methods: {
      ...mapActions(['getJobs']),
       jobs () {
           this.getJobs()
      }
    },
    computed: {
      ...mapState({
        user: 'user'
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
