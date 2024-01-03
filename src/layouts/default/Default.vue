<template>
  <Header />
  <v-app>
    <default-view />
  </v-app>
  <Footer />
</template>

<script setup>
import Header from './Header.vue'
import DefaultView from './View.vue'
import Footer from './Footer.vue'
</script>
<script>
// export default {
//   data() {
//     return {
//       drawer: true
//     }
//   },
// }
</script>
<style scoped></style>
