<template>
    <v-container>
        <v-navigation-drawer
        v-model="drawer"
        color=#29B6D1
        floating
        app
    >
      <v-divider></v-divider>
      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        color="white"
        dense
        app
        flat
    >
      <v-app-bar-nav-icon color="black" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="black--text">Pet Perfeito</v-toolbar-title>
    </v-app-bar>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: 'Home', to: '/' },
      { title: 'Grupos de Veículos', to: '/grupos' },
      { title: 'Clientes', to: '/clientes' },
      { title: 'Reservas', to: '/reservas' },
      { title: 'Locações', to: '/locacoes' },
    ],
    right: null,
  }),
}
</script>
