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
        <v-flex class="d-flex flex-row-reverse">
            <v-btn
              rounded 
              depressed 
              color="#5fddd5" 
              class="white--text mb-6" 
              @click="updateUser"
            >
              Atualizar
            </v-btn>
        </v-flex>
    </v-form>

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
      /*
      this.id = this.$store.state.user.id
      this.nome = this.$store.state.user.nome
      this.cpf = this.$store.state.user.cpf
      this.telefone = this.$store.state.user.telefone
      this.cep = this.$store.state.user.cep
      this.dataNascimento = this.$store.state.user.dataNascimento
      this.interesses = await interesseService.findByUser(this.id)
*/      
      this.id = 1
      this.nome = 'Leopoldo Lopes'
      this.cpf = '123.456.789-10'
      this.telefone = '91234-4567'
      this.cep = '01234-56'
      this.dataNascimento = '10/05/1990'
      this.interesses = [
  {
    "id": 5,
    "pet": {
      "id": 5,
      "nome": "Tininha",
      "descricao": "Tininha é um cachorro muito divertido que adora correr",
      "especie": "Cachorro",
      "sexo": "Masculino",
      "dataNascimento": "2018-10-03"
    },
    "usuario": {
      "id": 1,
      "nome": "Fulano",
      "cpf": "12345678901",
      "telefone": "11923456678",
      "cep": "04565882",
      "dataNascimento": "18/08/1998"
    },
    "formulario": {
      "id": 4,
      "pergunta1": 1,
      "pergunta2": 2,
      "pergunta3": 3,
      "pergunta4": 1,
      "pergunta5": 1,
      "pergunta6": 1,
      "pergunta7": 1,
      "pergunta8": 2
    },
    "notaUsuario": 1
  },
  {
    "id": 7,
    "pet": {
      "id": 2,
      "nome": "Jaboticaba",
      "descricao": "Jaboticaba é um cachorro muito fofo que adora brincar",
      "especie": "Cachorro",
      "sexo": "Masculino",
      "dataNascimento": "2015-02-12"
    },
    "usuario": {
      "id": 1,
      "nome": "Fulano",
      "cpf": "12345678901",
      "telefone": "11923456678",
      "cep": "04565882",
      "dataNascimento": "18/08/1998"
    },
    "formulario": {
      "id": 6,
      "pergunta1": 10,
      "pergunta2": 10,
      "pergunta3": 10,
      "pergunta4": 10,
      "pergunta5": 10,
      "pergunta6": 10,
      "pergunta7": 10,
      "pergunta8": 10
    },
    "notaUsuario": 3
  },
  {
    "id": 9,
    "pet": {
      "id": 1,
      "nome": "Gaia",
      "descricao": "Gaia é um cachorro muito social que adora correr",
      "especie": "Cachorro",
      "sexo": "Masculino",
      "dataNascimento": "2017-04-16"
    },
    "usuario": {
      "id": 1,
      "nome": "Fulano",
      "cpf": "12345678901",
      "telefone": "11923456678",
      "cep": "04565882",
      "dataNascimento": "18/08/1998"
    },
    "formulario": {
      "id": 8,
      "pergunta1": 10,
      "pergunta2": 10,
      "pergunta3": 10,
      "pergunta4": 8,
      "pergunta5": 10,
      "pergunta6": 9,
      "pergunta7": 9,
      "pergunta8": 10
    },
    "notaUsuario": 9
  },
  {
    "id": 14,
    "pet": {
      "id": 12,
      "nome": "Nika",
      "descricao": "Nika é um cachorro muito brincalhão que adora tomar sol",
      "especie": "Cachorro",
      "sexo": "Feminino",
      "dataNascimento": "2017-10-30"
    },
    "usuario": {
      "id": 1,
      "nome": "Fulano",
      "cpf": "12345678901",
      "telefone": "11923456678",
      "cep": "04565882",
      "dataNascimento": "18/08/1998"
    },
    "formulario": {
      "id": 13,
      "pergunta1": 10,
      "pergunta2": 10,
      "pergunta3": 10,
      "pergunta4": 10,
      "pergunta5": 10,
      "pergunta6": 10,
      "pergunta7": 10,
      "pergunta8": 10
    },
    "notaUsuario": 10
  },
    ]

    },

    async updateUser() {
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
  .v-alert {
  position: fixed;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  }
</style>