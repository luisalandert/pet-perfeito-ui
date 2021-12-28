<template>
<v-container>
    <v-flex class="d-flex flex-row py-6 pl-3">
        <h2 id="title" class="black--text">Cadastro de Usuário</h2>
    </v-flex>

    <v-form class="px-3">
        <v-text-field v-model="nome" label="Nome"></v-text-field>
        <v-text-field v-model="cpf" label="CPF"></v-text-field>
        <v-text-field v-model="telefone" label="Telefone"></v-text-field>
        <v-text-field v-model="cep" label="CEP"></v-text-field>
        <v-text-field v-model="dataNascimento" label="Data de Nascimento"></v-text-field>
        <v-spacer></v-spacer>
        <v-flex class="d-flex flex-row-reverse">
            <v-btn 
              rounded 
              depressed
              color="#5fddd5" 
              class="white--text" 
              @click="createUser"
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

import userService from '../services/userService'

export default {

  name: 'UserForm',

  data() {
    return {
      success: false,
      error: false,
      nome: '',
      cpf: '',
      telefone: '',
      cep: '',
      dataNascimento: ''
    }
  },

  methods: {
    async createUser() {
      this.resetAlerts()
      try{
        await userService.create(this.nome, this.cpf, this.telefone, this.cep, this.dataNascimento)
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