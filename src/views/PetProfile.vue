<template>
<v-container>
    <v-flex class="d-flex flex-row py-6 pl-3">
        <h2 id="title" class="black--text">Profile do Pet</h2>
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
              @click="updatePet"
            >
              Atualizar
            </v-btn>
        </v-flex>
    </v-form>
    <v-alert
      v-model="success"
      type="success"
      dismissible
    >Atualização realizada com sucesso</v-alert>
    <v-alert
      v-model="error"
      type="error"
      dismissible
    >Erro ao atualizar</v-alert>
</v-container>
</template>

<script>

import petService from '../services/petService'
import interesseService from '../services/interesseService'

export default {

  name: 'PetProfile',

  data() {
    return {
      success: false,
      error: false,
      loading: false,
      id: '',
      nome: '',
      descricao: '',
      especie: '',
      sexo: '',
      dataNascimento: '',
      interesses: []
    }
  },

  created() {
    this.loading = true
    this.loadData()
  },

  methods: {

    async loadData() {
      this.id = this.$store.state.selectedPet.id
      this.nome = this.$store.state.selectedPet.nome
      this.descricao = this.$store.state.selectedPet.descricao
      this.especie = this.$store.state.selectedPet.especie
      this.sexo = this.$store.state.selectedPet.sexo
      this.dataNascimento = this.$store.state.selectedPet.dataNascimento
      //this.interesses = await interesseService.findByPet(this.id)
      this.loading = false
    },

    async updatePet() {
      this.loading = true
      try{
        await petService.update(this.nome, this.descricao, this.especie, this.sexo, this.dataNascimento)
        this.success = true
      } catch (e) {
        this.error = true
      } finally {
        this.loading = false
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