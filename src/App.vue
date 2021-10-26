<template>
  <v-app id="app">
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
        color="transparent"
        dense
        app
        flat
    >
      <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">Pet Perfeito</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>

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


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
