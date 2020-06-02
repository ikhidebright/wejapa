<template>
   <div class="ml-lg-9 ml-md-9 ml-xl-9 ml-2">
   <v-container>
    <!--Alerts success starts-->
   <div class="text">
      <v-alert
      :value="successalert"
      color="green"
      class="mr-9"
      dark
      max-width="900"
      border="top"
      icon="mdi-checkbox-marked-circle-outline"
      transition="scroll-y-transition"
    >
      {{ successmessagealert }}
        </v-alert>
        </div>   
        <!--Alerts success ends-->  

        <!--error alert starts-->
   <div class="text">
      <v-alert
      :value="erroralert"
      color="pink"
      class="mr-9"
      dark
      max-width="900"
      border="top"
      icon="mdi-alert-outline"
      transition="scroll-y-transition"
    >
      {{ errormessagealert }}
        </v-alert>
        </div>   
        <!--error alert ends-->  
        </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data: () => ({
    }),
    methods: {
      ...mapActions(['Error', 'Success'])
      },
    watch: {
      erroralert () {
          let x = setInterval (() => {
          this.Error({
            errormessagealert: null,
            erroralert: false
      })
          clearInterval(x)
        }, 4000)
      },

      successalert () {
          let x = setInterval (() => {
           this.Success({
            successmessagealert: null,
            successalert: false
      })
          clearInterval(x)
        }, 4000)
      }
    },
    computed: {
      ...mapState({
        successmessagealert: 'successmessagealert',
        successalert: 'successalert',
        errormessagealert: 'errormessagealert',
        erroralert: 'erroralert'
      })
    }
  }
</script>

<style scoped>
/* work around bug on v-dialog not honoring origin="center top" parameter */
.v-alert {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 40%;
  margin-top: 5rem;
}

.text {
  width: 50%;
  margin: 0 auto;
}

/* for mobile */
@media only screen and (max-width: 600px) {
.text {
  width: 100%;
  margin: 0;
}

.v-alert {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 90%;
  margin-top: 5rem;
}
}
</style>