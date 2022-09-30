<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" color="primary" floating app>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item
          class="white--text"
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

    <v-app-bar color="rgba(0,0,0,0)" app flat fixed>
      <div id="title">
        <v-toolbar-title class="primary--text ma-6 pa-2">
          <img
            @click="drawer = !drawer"
            width="60"
            height="60"
            src="./assets/PET-PERFEITO-PNG.png"
          />
        </v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex">
        <v-btn
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          tile
          link
          text
          class="primary--text"
        >
          {{ item.title }}
        </v-btn>
        <v-btn
          v-if="this.$store.state.ong || this.$store.state.user"
          id="login"
          rounded
          color="primary"
          class="white--text"
          @click="reset"
        >
          Logout
        </v-btn>
        <v-btn v-else id="login" rounded color="primary" class="" to="/login">
          Login
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "Home", to: "/" },
      { title: "Profile", to: "/user/profile" },
      { title: "Feed", to: "/feed" },
      { title: "Área das ONGs", to: "/ong" },
    ],
    right: null,
  }),

  methods: {
    reset() {
      this.$store.commit("updateUser", "");
      this.$store.commit("updateOng", "");
    },
  },
};
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
  background: #40bdb6;
}

.tile:active {
  background: #51dcd4;
}
</style>
