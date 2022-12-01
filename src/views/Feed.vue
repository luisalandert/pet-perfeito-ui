<template>
  <div>
    <div class="text-center" v-if="loading">
      <v-progress-circular
        class="my-16"
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    <v-row class="d-flex justify-center">
      <v-col class="d-flex justify-center align-center col-md-9">
        <span class="filter-preffix">
          Estou procurando por:
        </span>
        <v-btn
          v-bind:class="{
            'filter-btn-selected': clickedFilter,
            'filter-btn': !clickedFilter,
          }"
          v-on:click="clickedFilter = !clickedFilter"
        >
          Gatos
        </v-btn>
        <v-btn
          v-bind:class="{
            'filter-btn-selected': clickedFilter,
            'filter-btn': !clickedFilter,
          }"
          v-on:click="clickedFilter = !clickedFilter"
        >
          Cachorros
        </v-btn>
        <template>
          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <div class="filter-btn" v-bind="attrs" v-on="on">
                  <v-icon class="filter-icon">mdi-filter-outline</v-icon>
                </div>
              </template>

              <v-card>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">
                    Aplicar filtros
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </template>
      </v-col>
    </v-row>
    <v-row class="pa-6 my-8 mx-16 d-flex justify-center">
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
        >Erro ao registrar interesse</v-alert
      >
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
      clickedFilter: false,
      user: this.$store.state.user,
      ong: this.$store.state.ong,
      pets: [],
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

    async showInterest(pet) {
      this.buttonLoading = true;
      this.resetAlerts();
      try {
        await interesseService.create(pet.id, this.$store.state.user.id);
        this.success = true;
      } catch (e) {
        this.error = true;
      } finally {
        this.buttonLoading = false;
      }
    },

    selectFilter(value) {},
  },
};
</script>
<style scoped>
.filter-btn {
  padding: 10px;
  margin: 0px 5px;
  background-color: #f0f0f0;
  border-radius: 10px;
}

.filter-preffix {
  margin-right: 20px;
}

.filter-btn-selected {
  padding: 10px;
  margin: 0px 5px;
  background-color: #c97a43 !important;
  border-radius: 10px;
}

.filter-btn:hover {
  background-color: #c97a43;
  color: #f0f0f0;
  transition: 0.2s;
}
.filter-btn:hover .filter-icon {
  filter: invert(1);
  transition: 0.2s;
}

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
