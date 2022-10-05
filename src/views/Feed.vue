<template>
  <div>
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
                  <img :src="pet.avatar" />
                </v-avatar>
                <div class="d-flex flex-column justify-start align-start">
                  {{ pet.nome }}<br />
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
                  @click="openDialog(pet)"
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

    <v-dialog  v-model=dialog v-if=dialog max-width="500px">
      <v-card>
        <v-card-title>
          Formulário de interesse em {{ this.selectedPet.nome }}
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="nome" label="Nome"></v-text-field>
          <v-text-field v-model="cpf" label="CPF"></v-text-field>
          <v-text-field v-model="telefone" label="Telefone"></v-text-field>
          <v-text-field v-model="cep" label="CEP"></v-text-field>
          <v-text-field v-model="dataNascimento" label="Data de Nascimento"></v-text-field>
          <v-text-field v-model="moradia" label="Mora em casa ou apartamento?"></v-text-field>
          <v-text-field v-model="moradia" label="A moradia é telada?"></v-text-field>
          <v-text-field v-model="moradia" label="Já existem outros animais na casa?"></v-text-field>
          <v-text-field v-model="moradia" label="Quantas pessoas moram na casa?"></v-text-field>
          <v-text-field v-model="moradia" label="Tem crianças pequenas?"></v-text-field>
          <v-text-field v-model="moradia" label="O animal ficará sozinho em casa?"></v-text-field>
        </v-card-text>
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
            color="#5fddd5"
            text
            @click=showInterest
          >
            Aplicar para adoção
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      dialog: false
    };
  },

  created() {
    this.loading = true;
    this.loadData();
  },

  methods: {
    async loadData() {
      // this.pets = await petService.findAll()
      this.pets = this.getMockPets();
      this.pets.map(this.addAvatar);
      this.loading = false;
    },

    getMockPets() {
      let pets = [];
      for (let i = 0; i < 100; i++) {
        const pet = {
          nome: "Gatinho rock",
          descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit iaculis libero, vitae fringilla enim aliquam vitae.`,
          sexo: "Masculino",
          dataNascimento: "07/03/2001",
          especie: "Gato",
        };
        pets.push(pet);
      }
      return pets;
    },

    resetAlerts() {
      this.success = false;
      this.error = false;
    },

    addAvatar(pet) {
      switch (pet.especie) {
        case "Cachorro":
          pet.avatar = "/dogIcon2.png";
          break;
        case "Gato":
          pet.avatar = "/catIcon2.png";
          pet.avatar = "https://cataas.com/cat?size=600";
          break;
        case "Ave":
          pet.avatar = "/birdIcon2.png";
          break;
        default:
          pet.avatar = "/pawIcon2.png";
      }
    },

    goToPetProfile(pet) {
      this.$store.commit("updateSelectedPet", pet);
      this.$router.push({ path: "/pet/profile" });
    },

    openDialog(pet) {
    this.selectedPet = pet
    this.dialog = true
    },

    closeDialog() {
      this.dialog = false
    },

    async showInterest() {
      this.buttonLoading = true
      this.resetAlerts();
      try {
       // await interesseService.create(pet.id, this.$store.state.user.id);
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
