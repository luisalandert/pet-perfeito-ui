<template>
<v-container class="py-6 pl-3">
    <v-flex class="d-flex flex-row py-6 pl-3">
        <h2 id="title" class="black--text">Profile da ONG</h2>
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
              @click="updateOng"
            >
              Atualizar
            </v-btn>
        </v-flex>
    </v-form>
    <v-alert
      v-model="success"
      type="success"
      dismissible
    >Cadastro realizado com sucesso</v-alert>
    <v-alert
      v-model="error"
      type="error"
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
      loading: false,
      id: '',
      denominacao: '',
      cnpj: '',
      telefone: '',
      cep: '',
      areaAtuacao: '',
      natureza: '',
      dataFundacao: ''
    }
  },

  created() {
      this.loading = true
      this.loadData()
  },

  methods: {
    async loadData() {
      console.log('loja')
      console.log(this.$store.state.ong)
      this.id = this.$store.state.ong.id
      this.denominacao = this.$store.state.ong.denominacao
      this.cnpj = this.$store.state.ong.cnpj
      this.telefone = this.$store.state.ong.telefone
      this.cep = this.$store.state.ong.cep
      this.areaAtuacao = this.$store.state.ong.areaAtuacao
      this.natureza = this.$store.state.ong.natureza
      this.dataFundacao = this.$store.state.ong.dataFundacao
      this.loading = false
    },

    async updateOng() {
      try{
        await ongService.update(
          this.id,
          this.denominacao, 
          this.cnpj, 
          this.telefone, 
          this.cep, 
          this.natureza, 
          this.areaAtuacao, 
          this.dataFundacao)
          console.log(this.denominacao)
          console.log(this.cnpj)
          console.log(this.telefone)
          console.log(this.cep)
          console.log(this.areaAtuacao)
          console.log(this.natureza)
          console.log(this.dataFundacao)
          this.success = true
      } catch (e) {
        this.error = true
      } finally {
        this.resetAlerts()
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