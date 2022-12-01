<template>
  <v-container fill-height>
    <div id="landing-page" class="ma-0 pa-0">
      <v-row class="d-flex justify-space-around mb-10">
        <v-col
          align-self="center"
          class="d-flex flex-column align-center"
          md="5"
        >
          <h2 id="title" class="black--text">
            Somos o lugar perfeito para encontrar o seu novo amigo.
          </h2>
          <h2 id="subtitle" class="black--text mb-6">
            Dê match com o seu pet!
          </h2>
          <v-btn
            rounded
            large
            depressed
            color="primary"
            class="white--text mb-10"
            to="/feed"
            >Adotar</v-btn
          >
        </v-col>
        <v-col>
          <img alt="Gato dormindo" width="600px" src="../assets/gatohero.png" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dosis&display=swap");

#landing-page {
  overflow: hidden;
}

#app {
  background-color: #eceae7 !important;
}

#subtitle {
  font-family: "Mitr";
  font-weight: 400;
  font-size: 2rem;
}

#title {
  font-family: "Mitr";
  font-weight: 600;
  font-size: 2.5rem;
}

#logo {
  height: 30vh;
}
</style>
