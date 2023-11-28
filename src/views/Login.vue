<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="7">

          <v-card elevation="12">
            <v-form v-model="form" @submit.prevent="onSubmit">
              <v-container class="pa-5 pa-md-16">
                <v-row align="center" no-gutters>
                  <v-col cols="12" md="3">
                    <v-sheet>
                      <v-img class="mx-auto" max-width="128"
                        src="https://cdn-icons-png.flaticon.com/512/5332/5332306.png"></v-img>
                    </v-sheet>
                  </v-col>

                  <v-col cols="12" md="9">
                    <v-row no-gutters>
                      <v-col cols="12">
                        <v-sheet class="pb-5">
                          <div class="text-subtitle-1">미리 발급해드린 계정으로 인증하세요 (문의: 0000@saltlux.com)</div>
                        </v-sheet>
                      </v-col>
                      <v-col cols="8">
                        <v-sheet>
                          <v-text-field label="Username" outlined dense color="blue" class="mb-3"
                            prepend-inner-icon="mdi-account-outline" variant="outlined" v-model="username" :readonly="loading"
                            :rules="[required]"></v-text-field>

                          <v-text-field label="Password" outlined dense color="blue"
                            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                            prepend-inner-icon="mdi-lock-outline" variant="outlined" v-model="password"
                            :readonly="loading" :rules="[required]"
                            @click:append-inner="visible = !visible"></v-text-field>

                        </v-sheet>
                      </v-col>
                      <v-col cols="4">
                        <v-sheet class="pl-5 h-100">
                          <v-btn block :disabled="!form" :loading="loading" color="blue" size="large" type="submit"
                            class="btn-login">
                            Log In
                          </v-btn>
                        </v-sheet>
                      </v-col>
                    </v-row>
                  </v-col>

                </v-row>
              </v-container>
            </v-form>
          </v-card>


        </v-col>
      </v-row>

    </v-container>
  </v-content>
</template>
<script>
export default {
  data: () => ({
    form: false,
    username: null,
    password: null,
    loading: false,
  }),

  methods: {
    onSubmit() {
      if (!this.form) return

      this.loading = true

      setTimeout(() => {
        // this.loading = false
        this.$router.push('/')
      }, 2000)

    },
    required(v) {
      return !!v || 'Field is required'
    },
  },
}
</script>
<style scoped>
.btn-login {
  height: calc(100% - 22px) !important;
}
</style>
