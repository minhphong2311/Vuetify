
<template>
  <Header />
  <v-app>
    <v-main>
      <div class="sub-content-wrap">
        <div class="lnb-wrap">
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="/" :to="'/'"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Menu01" value="/menu01" :to="'/menu01'"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Menu02" value="/menu02" :to="'/menu02'"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Menu03" value="/menu03" :to="'/menu03'"></v-list-item>
          </v-list>
        </div>
        <div class="content-wrap">
          <DefaultView />
        </div>

      </div>
    </v-main>
  </v-app>
  <Footer />
</template>
  
<script setup>
import Header from './Header.vue'
import DefaultView from './View.vue'
import Footer from './Footer.vue'
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

</style>
  