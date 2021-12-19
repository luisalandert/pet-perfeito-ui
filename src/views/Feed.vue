<template>
  <div>
    <div class="text-center" v-if=loading>
      <v-progress-circular
        class="my-16"
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    <v-row class="pa-6 my-8 mx-16" v-else>
        <v-col
        v-for="pet in pets"
        :key="pet.nome"
        cols="4"
        >
            <v-card height="300">
                <v-card-title class="d-flex justify-start m-6">
                    <v-avatar class="d-flex justify-start mr-4">
                        <img :src="pet.avatar"/>
                    </v-avatar>
                    {{ pet.nome }}
                </v-card-title>
                <v-card-text class="d-flex justify-start m-6">
                    descrição: {{ pet.descricao }}
                    <br>
                    espécie: {{ pet.especie }}
                    <br>
                    sexo: {{ pet.sexo }}
                    <br>
                    data de nascimento: {{ pet.dataNascimento }}
                </v-card-text>
                <v-card-actions class="d-flex justify-center mb-6">
                    <v-btn
                      v-if="ong"
                      rounded
                      text
                      color=#B387CC
                      @click="goToPetProfile(pet)"
                    >
                        Ver perfil
                    </v-btn>
                    <v-btn
                      v-else
                      rounded 
                      text
                      color=#B387CC
                      :loading=buttonLoading
                      @click="showInterest(pet)"
                    >
                      <v-icon color=#B387CC class="mr-2">mdi-heart</v-icon>
                        Mostrar interesse
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    <v-alert
      v-model="success"
      type="success"
      dismissible
    >Interesse registrado com sucesso</v-alert>
    <v-alert
      v-model="error"
      type="error"
      dismissible
    >Erro ao mostrar interesse</v-alert>
  </div>
</template>

<script>
import petService from '../services/petService'
import interesseService from '../services/interesseService'

export default {

  name: 'Feed',

  data() {
    return {
      success: false,
      error: false,
      loading: false,
      buttonLoading: false,
      user: this.$store.state.user,
      ong: this.$store.state.ong,
      pets: []
    }
  },

  created() {
    this.loading = true
    this.loadData()
  },

  methods: {

    async loadData() {
      this.pets = await petService.findAll()
      this.pets.map(this.addAvatar)
      this.loading = false
    },

    resetAlerts() {
      this.success = false
      this.error = false
    },

    addAvatar(pet) {
      switch (pet.especie) {
        case "Cachorro":
          pet.avatar = '/dogIcon2.png'
          break
        case "Gato":
          pet.avatar = '/catIcon2.png'
          break
        case "Ave":
          pet.avatar = "/birdIcon2.png"
          break
        default:
          pet.avatar = "/pawIcon2.png"
      }
    },

    goToPetProfile(pet) {
      this.$store.commit('updateSelectedPet', pet)
      this.$router.push({path: '/pet/profile'})
    },

    async showInterest(pet) {
      this.buttonLoading = true
      try {
        await interesseService.create(this.toPet(pet), this.$store.state.user)
        this.success = true
      } catch {
        this.error = true
      } finally {
        this.buttonLoading = false
        this.resetAlerts()
      }
    },

    toPet(pet) {
      return {
        id: pet.id,
        nome: pet.nome, 
        descricao: pet.descricao, 
        especie: pet.especie, 
        sexo: pet.sexo, 
        dataNascimento: pet.dataNascimento
      }
    }

  },
}
</script>