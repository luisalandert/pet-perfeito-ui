<template>
  <container fill-height>
    <div id="landing-page" class="ma-0 pa-0">
      <v-row d-flex justify-center mb-6 class="pa-6 ma-6">
        <v-col>
        <h2 id="text" class="black--text pa-6 ma-6">SOMOS O LUGAR PERFEITO PARA ENCONTRAR O SEU NOVO AMIGO PELUDO.</h2>
        <h2 id="text-bold" class="black--text pa-6 ma-6">DÊ MATCH COM SEU PET!</h2>
        <v-btn
          rounded large depressed color="#5fddd5" class="white--text" to="/signUp"
          >Sign up</v-btn>
        </v-col>
        <v-col>
          <img alt="Pet Perfeito logo"
            width="500px"
            src="../assets/PET-PERFEITO-PNG.png"
          >
        </v-col>
      </v-row>
    </div>
  </container>
</template>

<script>

  export default {
    name: 'Home',

    components: {
    },
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Dosis&display=swap");

  #landing-page {
    background-image: url("/src/asset/iStock-11405450010.jpg");
    height: 100vh;
    overflow: hidden;
  }

  #text {
    font-family: "Dosis";
    font-weight: 300;
    font-size: 2rem;
  }

  #text-bold {
    font-family: "Dosis";
    font-weight: bold;
    font-size: 2rem;
  }

  #logo {
    height: 30vh;
  }
</style>
