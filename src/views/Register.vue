<template>
  <div class="signup">
    <v-toolbar flat>
      <v-toolbar-title>
        <router-link to="/"><img src="../assets/img/airtimefllip-w.png" alt="airtimeflip-logo"></router-link>
      </v-toolbar-title>
    </v-toolbar>

    <div class="signup_form">
      <v-container fluid>
        <v-row>
          <v-col class="forms" cols="12" md="6" lg="6">
            <h2>Signup</h2>
            <span class="subheading">Enter your details below</span>

            <v-form class="form_field" @submit.prevent="signup">
              <v-container fluid>
                <v-row>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field
                      v-model="first_name"
                      :rules="[rules.required]"
                      label="First Name"
                      outlined
                      type="name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field
                      v-model="last_name"
                      :rules="[rules.required]"
                      label="Last Name"
                      outlined
                      type="name"
                      height="10"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field
                      outlined
                      v-model="email"
                      :rules="[rules.required, rules.email]"
                      label="Email"
                      type="email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field 
                      v-model="phone_number"
                      label="Mobile"
                      :rules="[rules.required]"
                      type="number"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field
                      v-model="password"
                      outlined
                      :rules="[rules.required, rules.min]"
                      type="password"
                      name="password"
                      label="Password"
                      hint="At least 8 characters"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field
                      v-model="city"
                      outlined
                      :rules="[rules.required]"
                      type="text"
                      name="city"
                      label="City"
                    ></v-text-field>
                  </v-col>
                  
                  <v-card-actions>
                    <v-row>
                      <v-col cols="12">
                        <v-btn
                          type="submit"
                          color="orange"
                          class="white--text"
                          :loading="loading"
                        >
                        Sign up for free
                        </v-btn>
                      </v-col>
                      <br> <br>
                      <v-col cols="12">
                        <span class="signin_link body-2">Already have an account <router-link to="/Signin">Login</router-link> instead</span>
                      </v-col>
                    </v-row>
                  </v-card-actions>
                </v-row>
              </v-container>
            </v-form>
            <v-dialog width="70%">
              <v-card>
                <v-card-title class="title">Terms</v-card-title>
                <v-card-text v-for="n in 5" :key="n">
                  {{ content }}
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="orange"
                    @click="term = false"
                  >Ok</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="conditions" width="70%">
              <v-card>
                <v-card-title class="title">Conditions</v-card-title>
                <v-card-text v-for="n in 5" :key="n">
                  {{ content }}
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="orange"
                    @click="conditions = false"
                  >Ok</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            
          </v-col>
          <v-col cols="12" md="6" lg="6">
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-footer
      padless
      absolute
    >
      <v-card
        flat
        tile
        class="text-center"
        width="100%"
      >

        <v-card-text>
          <span>Copyright airtimeflip &#169;</span> {{ new Date().getFullYear() }} — <span>All rights reserved</span>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
  export default {
    name: 'signup',
    data () {
      return {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: '',
        city: '',
        loading: false,

        rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
          min: v => v.length >= 8 || 'Min 8 characters',
        },
        
        error: false
      }
    },
    methods: {
      signup() {
        this.loading = true
        this.$store.dispatch('registerUser', {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          phone_number: this.phone_number,
          password: this.password,
          city: this.city,
        })
        .then(success => {
          this.loading = false
          this.$router.push('/Mail')
        })
      }
    }

  }
</script>

<style scoped>
.signup {
  margin-bottom: 100px;
}
.v-text-field__slot {
  height: 20px !important;
}

.v-application a {
  text-decoration: none;
  color: orange;
}

.signup_form {
  padding: 10vh 5vw;
}

</style>