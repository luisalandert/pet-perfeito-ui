<template>
<v-container>
    <v-flex class="d-flex flex-row py-6 pl-3">
        <h2 id="title" class="black--text">Cadastro de Pet</h2>
    </v-flex>

    <v-form class="px-3">
        <v-text-field v-model="nome" label="Nome"></v-text-field>
        <v-text-field v-model="descricao" label="Descrição"></v-text-field>
        <v-text-field v-model="especie" label="Espécie"></v-text-field>
        <v-text-field v-model="sexo" label="Sexo"></v-text-field>
        <v-text-field v-model="dataNascimento" label="Data de Nascimento"></v-text-field>
        <v-spacer></v-spacer>
        <v-flex class="d-flex flex-row-reverse">
            <v-btn 
              rounded 
              depressed
              color="#5fddd5" 
              class="white--text" 
              :loading=loading
              @click="createPet"
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

import petService from '../services/petService'

export default {

  name: 'PetForm',

  data() {
    return {
      success: false,
      error: false,
      loading: false,
      nome: '',
      descricao: '',
      especie: '',
      sexo: '',
      dataNascimento: ''
    }
  },

  methods: {
    async createPet() {
      this.loading = true
      this.resetAlerts()
      try{
        await petService.create(this.nome, this.descricao, this.especie, this.sexo, this.dataNascimento)
        this.success = true
      } catch (e) {
        this.error = true
      } finally {
        this.loading = false
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