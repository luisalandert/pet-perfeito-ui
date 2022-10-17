<template>
  <v-container id="landing-page">
      <v-row d-flex justify="space-around" class="pa-6 ma-15">
        <v-col md="4" class="mr-10">
          <h3 id="text" class="black--text my-4" >LOGIN DE USUÁRIO</h3>
          <v-text-field v-model="nomeUser" label="Nome"></v-text-field>
          <v-text-field v-model="idUser" label="Id"></v-text-field>
          <v-text-field
            v-model="passwordUser"
            label="Password"
            :append-icon="showUser ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showUser ? 'text' : 'password'"
            @click:append="showUser= !showUser"
          ></v-text-field>
          <v-btn
            rounded
            large 
            depressed 
            color="#5fddd5" 
            class="white--text my-4" 
            @click="login"
            >Login</v-btn>
          </v-col>
        <v-col md="4" class="ml-10" offset-md="4">
          <h3 id="text" class="black--text my-4">LOGIN DE ONG</h3>
          <v-text-field v-model="nomeOng" label="Nome"></v-text-field>
          <v-text-field v-model="idOng" label="Id"></v-text-field>
          <v-text-field
            v-model="passwordOng"
            label="Password"
            :append-icon="showOng ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showOng ? 'text' : 'password'"
            @click:append="showOng = !showOng"
          ></v-text-field>
          <v-btn
            rounded
            large 
            depressed 
            color="#5fddd5" 
            class="white--text my-4" 
            @click="login"
            >Login</v-btn>
        </v-col>
      </v-row>

      <v-flex class="d-flex justify-center">
        <v-alert
            v-model="success"
            type="success"
            max-width=400
            dismissible
        >Login feito com sucesso</v-alert>
        <v-alert
            v-model="error"
            type="error"
            max-width=400
            dismissible
        >Erro ao fazer login
        </v-alert>
    </v-flex>
    </v-container>
</template>

<script>

import userService from '../services/userService'
import ongService from '../services/ongService'

export default {
  name: 'Login',

  data() {
    return {
      success: false,
      error: false,
      nomeUser: '',
      idUser: '',
      passwordUser: '',
      nomeOng: '',
      idOng: '',
      passwordOng: '',
      showUser: false,
      showOng: false,
    }
  },

  methods: {
    async getUser() {
      console.log(await userService.find(this.idUser))
    },

    async getOng() {
      console.log(await ongService.find(this.idOng))
    },

    async login() {
      try {
        
        //if (this.idUser) this.$store.commit('updateUser', await userService.find(this.idUser))
        if (this.idUser) this.$store.commit('updateUser', 1)
        /*
        if (this.idOng) {
          this.$store.commit('updateOng', await ongService.find(this.idOng))
          this.$store.commit('updateOngId', this.idOng)
        }
        */
        if (this.idOng) {
          this.$store.commit('updateOng',1)
          this.$store.commit('updateOngId', this.idOng)
          this.$store.commit('updateUser', null)
        }
        
        this.success = true
        this.$router.push({path: '/'})
      } catch(e) {
        this.error = true
      }

    },
  }

}
</script>
<style scoped>
  .v-alert {
  position: fixed;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  }
</style>
