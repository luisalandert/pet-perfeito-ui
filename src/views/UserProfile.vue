<template>
<v-container>
    <v-flex class="d-flex flex-row py-6 pl-3">
        <h2 id="title" class="black--text">Profile</h2>
    </v-flex>

    <v-form class="px-3">
        <v-text-field v-model="nome" label="Nome"></v-text-field>
        <v-text-field v-model="cpf" label="CPF"></v-text-field>
        <v-text-field v-model="telefone" label="Telefone"></v-text-field>
        <v-text-field v-model="cep" label="CEP"></v-text-field>
        <v-text-field v-model="dataNascimento" label="Data de Nascimento"></v-text-field>
        <v-spacer></v-spacer>
    </v-form>


    <v-dialog v-model=dialog max-width="350px">
        <template v-slot:activator="{on}">
        <v-flex class="d-flex flex-row-reverse pb-6">
            <v-btn
                v-on="on"
                rounded 
                depressed
                color="#5fddd5" 
                class="white--text" 
                @click="resetAlerts"
            >
                Atualizar
            </v-btn>
        </v-flex>
        </template>
        <v-card>
        <v-card-title>
          Deseja atualizar o perfil {{ this.nome }} ?
        </v-card-title>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click=closeDialog
          >
            Cancelar
          </v-btn>
          <v-btn
            color="green"
            text
            @click=updateUser
          >
            Atualizar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-divider></v-divider>

    <v-flex class="d-flex flex-row py-6 pl-3">
      <h2 id="title" class="black--text">Interesses do Usuário</h2>
    </v-flex>

    <v-data-table
        :headers="headers"
        :items="interesses"
        item-key="id"
    >
      <template #item.nome="{ item }">
        {{ item.pet.nome }}
      </template>

      <template #item.descricao="{ item }">
        {{ item.pet.descricao }}
      </template>

      <template #item.especie="{ item }">
        {{ item.pet.especie }}
      </template>

      <template #item.sexo="{ item }">
        {{ item.pet.sexo }}
      </template>

      <template #item.dataNascimento="{ item }">
        {{ item.pet.dataNascimento }}
      </template>

    </v-data-table>

    <v-flex class="d-flex justify-center">
        <v-alert
            v-model="success"
            type="success"
            dismissible
        >Perfil atualizado com sucesso</v-alert>
        <v-alert
            v-model="error"
            type="error"
            max-width=400
            dismissible
        >Erro ao atualizar o perfil
        </v-alert>
    </v-flex>
</v-container>
</template>

<script>

import userService from '../services/userService'
import interesseService from '../services/interesseService'

export default {

  name: 'UserProfile',

  data() {
    return {
      success: false,
      error: false,
      dialog: false,
      nome: '',
      cpf: '',
      telefone: '',
      cep: '',
      dataNascimento: '',
      interesses: [],
      headers: [
      { text: 'Nome do pet', value: 'nome'},
      { text: 'Descrição', value: 'descricao'},
      { text: 'Espécie', value: 'especie'},
      { text: 'Sexo', value: 'sexo'},
      { text: 'Data de nascimento', value: 'dataNascimento'},
      ],
    }
  },

  created() {
    this.loadData()
  },

  methods: {
    async loadData() {
      this.id = this.$store.state.user.id
      this.nome = this.$store.state.user.nome
      this.cpf = this.$store.state.user.cpf
      this.telefone = this.$store.state.user.telefone
      this.cep = this.$store.state.user.cep
      this.dataNascimento = this.$store.state.user.dataNascimento
      this.interesses = await interesseService.findByUser(this.id)

    },

    async updateUser() {
        this.closeDialog()
        this.resetAlerts()
        try{
            await userService.update(this.id, this.nome, this.cpf, this.telefone, this.cep, this.dataNascimento)
            this.success = true
        } catch (e) {
            this.error = true
        }
    },

    resetAlerts() {
      this.success = false
      this.error = false
    },

    closeDialog() {
        this.dialog = false
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