<template>
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

      <v-btn>Link 1</v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      { icon: 'dashboard', text: 'dashboard', route: '/' }
    ]
  })
}
</script>
