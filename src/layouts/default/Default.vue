
<template>
  <v-app>
    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer class="bg-deep-purple" theme="dark" permanent v-model="drawer" >

            <v-img class="mt-5 mb-10 mx-auto" max-width="128"
              src="https://cdn-icons-png.flaticon.com/512/5332/5332306.png"></v-img>

            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="/" :to="'/'"></v-list-item>
              <v-list-item prepend-icon="mdi-account-multiple" title="Menu01" value="/menu01"
                :to="'/menu01'"></v-list-item>
              <v-list-item prepend-icon="mdi-star" title="Menu02" value="/menu02" :to="'/menu02'"></v-list-item>
            </v-list>

            <template v-slot:append>
              <div class="pa-2">

                <div class="mx-auto text-center">
                  <v-avatar color="brown">
                    <v-img class="mx-auto" max-width="128" src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                  </v-avatar>
                  <h3 class="mb-5">Supervisors</h3>
                  <v-btn variant="plain" :to="'/login'">
                    Logout
                  </v-btn>
                </div>

              </div>
            </template>
          </v-navigation-drawer>


          <v-app-bar :elevation="2">
            <v-btn class="text-none" stacked @click.stop="drawer = !drawer">
              <v-icon>mdi-menu</v-icon>
            </v-btn>

            <template v-slot:append>
              <v-list nav>
                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" title="Supervisors"
                  value="supervisors"></v-list-item>
              </v-list>
              <v-btn>Link 1</v-btn>

              <v-btn :to="'/login'">Logout</v-btn>
            </template>
          </v-app-bar>
          <default-view />


        </v-layout>
      </v-card>

    </v-main>
  </v-app>
</template>

<script setup>
import DefaultView from './View.vue'
</script>
<script>
export default {
  data() {
    return {
      drawer: true
    }
  },
}
</script>
<style scoped>
.v-main {
  min-height: 100vh;
}
</style>
