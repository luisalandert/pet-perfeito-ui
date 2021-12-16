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
        <v-flex class="d-flex flex-row-reverse">
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
      dataNascimento: ''
    }
  },

  methods: {

    async updateUser() {
        this.closeDialog()
        try{
            await userService.update(this.nome, this.cpf, this.telefone, this.cep, this.dataNascimento)
            this.success = true
        } catch (e) {
            this.error = true
        } finally {
            resetAlerts
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