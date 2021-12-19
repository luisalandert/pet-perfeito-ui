<template>
  <div v-if="ong">
      <h2 id="text" class="ma-16 pa-6">Área da ONG</h2>
      <v-btn
        rounded
        large 
        depressed 
        color="#5fddd5" 
        width="200"
        class="white--text ma-4" 
        to="/ong/profile"
      >
        Editar Perfil
      </v-btn>
      <v-btn
        rounded
        large 
        depressed 
        color="#5fddd5" 
        width="200"
        class="white--text ma-4" 
        to="/feed"
      >
        Ver Pets
      </v-btn>
      <v-btn
        rounded
        large 
        depressed 
        color="#5fddd5" 
        width="200"
        class="white--text ma-4" 
        to="/new/pet"
      >
        Adicionar Pet
      </v-btn>
  </div>
  <div v-else>
    <h2 id="text" class="ma-16 pa-6">Área exclusiva para ONGs, faça login com sua conta de ONG para acessar.</h2>
  </div>
</template>

<script>

export default {
  name: 'Ongs',

  data() {
    return {
      ong: this.$store.state.ong,
    }
  },
}
</script>

<style scoped>
  #text {
    font-family: "Dosis";
    font-weight: 300;
    font-size: 2rem;
  }
</style>
