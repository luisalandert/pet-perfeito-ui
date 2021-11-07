<template>
<v-container>
    <v-flex class="d-flex flex-row pb-6 pl-3">
        <h2 class="black--text">Cadastro de Usuário</h2>
    </v-flex>

    <v-form class="px-3">
        <v-text-field v-model="name" label="Nome"></v-text-field>
        <v-text-field v-model="phoneNumber" label="Telefone"></v-text-field>
        <v-text-field v-model="address" label="Endereço"></v-text-field>
        <v-text-field v-model="email" label="Email"></v-text-field>
        <v-text-field v-model="password" label="Senha"></v-text-field>
        <v-spacer></v-spacer>
        <v-flex class="d-flex flex-row-reverse">
            <v-btn rounded color="red" class="white--text" @click="createUser">Cadastrar</v-btn>
        </v-flex>
    </v-form>
    <v-alert
        v-if="success"
        :visible="success"
        type="success"
    >Cadastro realizado com sucesso</v-alert>
    <v-alert
        v-if="error"
        :visible="error"
        type="error"
    >Erro ao fazer cadastro</v-alert>
</v-container>
</template>

<script>

export default {

  name: 'ClienteForm',
  emits: ['cliente-insert'],

  data() {
    return {
      success: false,
      error: false,
      name: '',
      phoneNumber: '',
      address: '',
      email: '',
      password: ''
    }
  },

  methods: {
    async createUser() {
      
    },

    resetAlerts() {
      this.success = false
      this.error = false
    }
  }
}
</script>