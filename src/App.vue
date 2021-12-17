<template>
  <v-app id="app">
    <v-navigation-drawer
        v-model="drawer"
        color=#5fddd5
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
          tile
          link
        > 
          <v-list-content>
            <v-icon>{{ item.title }}</v-icon>
          </v-list-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        color=#B387CC
        app
        flat
        fixed
    >
      <v-icon color="white" @click="drawer = !drawer">mdi-paw</v-icon>
      
      <div id="title">
        <v-toolbar-title class="white--text ma-6 pa-2">
          <b>PET PERFEITO</b>
        </v-toolbar-title>
      </div>
      
        <v-btn id="login" fixed right text class="white--text"> Login </v-btn>
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
      { title: 'Profile', to: '/user/profile' },
      { title: 'Feed', to: '/feed' },
      { title: 'ONGs', to: '/clientes' },
    ],
    right: null,
  }),
}
</script>


<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Dosis&display=swap");


  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    //background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
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

  #title {
    font-family: "Dosis";
    font-weight: 500;
    font-size: 2rem;
  }

  #login {
    font-family: "Dosis";
    font-weight: 300;
    font-size: 1rem;
  }

  .tile {
    margin: 5px;
    border-radius: 4px;
  }
  .tile:hover {
    background:#40bdb6;
  }
  .tile:active {
    background: #51dcd4;
  }
</style>
