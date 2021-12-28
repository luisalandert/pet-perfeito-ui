<template>
<v-container class="py-6 pl-3">
    <v-flex class="d-flex flex-row py-6 pl-3">
        <h2 id="title" class="black--text">Cadastro de ONG</h2>
    </v-flex>

    <v-form class="px-3">
        <v-text-field v-model="denominacao" label="Denominação"></v-text-field>
        <v-text-field v-model="cnpj" label="CNPJ"></v-text-field>
        <v-text-field v-model="telefone" label="Telefone"></v-text-field>
        <v-text-field v-model="cep" label="CEP"></v-text-field>
        <v-text-field v-model="areaAtuacao" label="Área de atuação"></v-text-field>
        <v-text-field v-model="natureza" label="Natureza"></v-text-field>
        <v-text-field v-model="dataFundacao" label="Data de fundação"></v-text-field>

        <v-spacer></v-spacer>
        <v-flex class="d-flex flex-row-reverse">
            <v-btn
              rounded 
              depressed 
              color="#5fddd5" 
              class="white--text" 
              @click="createOng"
            >
              Cadastrar
            </v-btn>
        </v-flex>
    </v-form>
    <v-alert
      v-model="success"
      type="success"
      max-width=400
      dismissible
    >Cadastro realizado com sucesso</v-alert>
    <v-alert
      v-model="error"
      type="error"
      max-width=400
      dismissible
    >Erro ao fazer cadastro</v-alert>
</v-container>
</template>

<script>

import ongService from '../services/ongService'

export default {

  name: 'OngForm',

  data() {
    return {
      success: false,
      error: false,
      denominacao: '',
      cnpj: '',
      telefone: '',
      cep: '',
      areaAtuacao: '',
      natureza: '',
      dataFundacao: ''
    }
  },

  methods: {
    async createOng() {
      this.resetAlerts()
      try{
        await ongService.create(
          this.denominacao, 
          this.cnpj, 
          this.telefone, 
          this.cep, 
          this.areaAtuacao, 
          this.natureza, 
          this.dataFundacao)
        this.success = true
      } catch (e) {
        this.error = true
      }
    },

    resetAlerts() {
      this.success = false
      this.error = false
    }
  }
}
</script>

<style scoped>
  #title {
    font-family: "Dosis";
    font-weight: 300;
    font-size: 2rem;
  }
</style>