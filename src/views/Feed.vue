<template>
  <div>
    <h1 v-if=!allPets >Pets indicados para seu perfil</h1>
    <div class="d-flex justify-center mb-6">
      <v-switch
        v-model="allPets"
        label='Mostrar todos os pets'
        @change="loadPets"
      ></v-switch>
    </div>

    <div class="text-center" v-if="loading">
      <v-progress-circular
        class="my-16"
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    <v-row class="pa-6 my-8 mx-16 d-flex justify-center" v-else>
      <v-col
        v-for="pet in pets"
        :key="pet.nome"
        class="d-flex justify-center col-md-3"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 6 : 2"
            :class="{ 'on-hover': hover }"
            id="pet-card"
            class="md-6"
            width="300"
            height="300"
          >
            <v-img
              id="pet-image"
              :src="pet.avatar"
              height="300px"
              width="300px"
            ></v-img>
            <div id="pet-info" :class="{ 'on-hover': hover }">
              <v-card-title class="d-flex justify-center m-6">
                <v-avatar class="d-flex justify-start mr-4">
                  <v-img :src="pet.avatar"></v-img>
                </v-avatar>
                <div class="d-flex flex-column justify-start align-start">
                  {{ pet.nome }}
                  <span class="text-body-1">
                    {{ pet.especie }} · {{ pet.sexo }}</span
                  >
                </div>
              </v-card-title>
              <v-card-text class="d-flex justify-center m-6">
                {{ pet.descricao }} <br /><br />
                Data de nascimento: {{ pet.dataNascimento }}
              </v-card-text>
              <v-card-actions class="d-flex justify-center mb-6">
                <v-btn
                  v-if="ong"
                  rounded
                  text
                  color="#B387CC"
                  @click="goToPetProfile(pet)"
                >
                  Ver perfil
                </v-btn>
                <v-btn
                  v-else
                  rounded
                  text
                  color="primary"
                  :loading="buttonLoading"
                  @click="showInterest(pet)"
                >
                  <v-icon color="primary" class="mr-2">mdi-heart</v-icon>
                  Mostrar interesse
                </v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-flex class="d-flex justify-center">
      <v-alert v-model="success" type="success" max-width="400" dismissible
        >Interesse registrado com sucesso</v-alert
      >
      <v-alert v-model="error" type="error" max-width="400" dismissible
        >Erro ao registrar interesse</v-alert>
    </v-flex>

  
  </div>
</template>
<script>
import petService from "../services/petService";
import interesseService from "../services/interesseService";

export default {
  name: "Feed",

  data() {
    return {
      success: false,
      error: false,
      loading: false,
      buttonLoading: false,
      user: this.$store.state.user,
      ong: this.$store.state.ong,
      pets: [],
      selectedPet: null,
      allPets: false
    };
  },

  created() {
    this.loading = true;
    this.loadData();
  },

  methods: {
    async loadData() {
      this.loading = true
      this.pets = await petService.findMatches(this.user.id)
      this.pets.map(this.addAvatar)
      this.loading = false
    },

    async loadPets() {
      if (this.allPets) {
        this.loading = true
        this.pets = await petService.findAll()
        this.pets.map(this.addAvatar)
        this.loading = false
      }
      else {
        this.loadData()
      }
    },

    resetAlerts() {
      this.success = false;
      this.error = false;
    },

    addAvatar(pet) {
      for (let i = 0; i < pet.dataNascimento.length; i++) {
        if (pet.dataNascimento[i] < 10) {
          pet.dataNascimento[i] = `0${pet.dataNascimento[i]}`;
        }
      }
      let currentDate = `${pet.dataNascimento[2]}/${pet.dataNascimento[1]}/${pet.dataNascimento[0]}`;
      pet.dataNascimento = currentDate;
      let imageName = `${pet.nome.replaceAll(
        " ",
        ""
      )}-${pet.dataNascimento.replaceAll("/", "")}.jpg`;
      let base64 = JSON.parse(window.localStorage.getItem(imageName));
      let petImage = new Image();
      petImage.src = base64;
      pet.avatar = petImage;
    },

    goToPetProfile(pet) {
      //this.$store.commit("updateSelectedPet", pet);
      this.$router.push({ path: `/pet/profile/${pet.id}`});
    },

    openDialog(pet) {
    this.selectedPet = pet
    this.dialog = true
    },

    closeDialog() {
      this.dialog = false
    },

    async showInterest(selectedPet) {
      this.buttonLoading = true
      this.resetAlerts();
      try {
       await interesseService.create(
        selectedPet.id,
        this.user.id
        )
        this.success = true
      } catch (e) {
        this.error = true
      } finally {
        this.buttonLoading = false
        this.dialog = false
      }
    },
  },
};
</script>
<style scoped>
#pet-info {
  position: relative;
  top: -300px;
  transition: opacity 0.4s ease-in-out;
  height: 300px;
  /* background-color: rgba(201, 122, 67, 0.5); */
}

#pet-info:not(.on-hover) {
  opacity: 0;
}

#pet-info.on-hover {
  opacity: 1;
}
#pet-card.on-hover #pet-image {
  opacity: 0.15;
}

#pet-image {
  transition: opacity 0.4s ease-in-out;
}

.v-alert {
  position: fixed;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}

html,
body {
  height: 100% !important;
}
</style>

<style scoped lang="scss">
::v-deep .v-application--wrap {
  min-height: fit-content;
}
</style>
