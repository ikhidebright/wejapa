<template>
  <div class="login mb-0 pa-3">
  <br>
  <br>
  <v-card
    :loading="loading"
    shaped
    class="mx-auto my-12 mt-1 mb-9"
    max-width="374"
    sm='flat'
  >
      <v-col cols="12" sm="12" md="12">
<div class="text-center ma-2">
      <i class="fas fa-user-circle text-center"></i>
</div>
      <br>
          <v-form
          ref="form"
          v-model="valid"
          lazy-validation>
          <v-text-field
            v-model="user.email"
            label="E-mail"
            :rules="emailRules"
            required
            outlined
          ></v-text-field>
           <v-text-field
            label="Password"
            v-model="user.password"
            outlined
            :rules="passwordRules"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            @click:append="show2 = !show2"
          ></v-text-field>
          <v-btn x-large color="#001F90" dark block @click='login'
          >Login</v-btn>
          </v-form>
        </v-col>
    </v-card>
           <v-card 
           class="mx-auto my-12 mb-9 mt-n6" 
           max-width="374"
           text
           flat
           color="#f5f5f5"
           >
          </v-card>
    <br>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

  export default {
    data: () => ({
      show2: false,
      valid: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is Required'
      ],
      user: {
        password: '',
        email: '',
      }
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      ...mapActions(['Login']),
       login () {
         this.validate()
        if (!this.valid) {
        } else {
        this.Login(this.user)
        }
      }
    },
    mounted () {
      this.validate()
    },
    computed: {
      ...mapState({
        loading: 'loading'
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
