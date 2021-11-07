<template>
  <div class="ma-0 pa-0">
    <v-row d-flex justify-center mb-6 class="pa-6 ma-6">
      <v-col>
        <div id="logo">
          <img alt="Pet Perfeito logo"
          width="400px"
          src="../assets/petPerfeitoHeart.png"
          >
        </div>
      <h2 class="black--text" >Bem vindo ao melhor lugar para encontrar seu novo melhor amigo!</h2>
      </v-col>
    </v-row>
    <v-row d-flex justify-center mb-6 class="pa-2 ma-2">
      <v-col>
        <v-btn 
        rounded large color="red" class="white--text" to="/signUp"
        >Sign up</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>

  export default {
    name: 'Home',

    components: {
    },
  }
</script>

<style>
  #landing-page {
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
    height: 100vh;
  }
  #logo {
    height: 30vh;
  }
</style>
