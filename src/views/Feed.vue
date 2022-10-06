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
          <p class="text-left">Tem experiência com animais?</p>
          <v-radio-group v-model="pergunta1" column>
            <v-radio
              label="sim"
              value="3"
            ></v-radio>
            <v-radio
              label="não"
              value="1"
            ></v-radio>
          </v-radio-group>
          <p class="text-left">Mora em casa ou apartamento?</p>
          <v-radio-group v-model="pergunta2" column>
            <v-radio
              label="casa"
              value="1"
            ></v-radio>
            <v-radio
              label="apartamento"
              value="2"
            ></v-radio>
          </v-radio-group>
          <p class="text-left">Já possui os materiais necessários para receber o animal? (coleira, casinha, etc)</p>
          <v-radio-group v-model="pergunta3" column>
            <v-radio
              label="sim"
              value="2"
            ></v-radio>
            <v-radio
              label="não"
              value="1"
            ></v-radio>
          </v-radio-group>
          <p class="text-left">Existem outros animais na casa?</p>
          <v-radio-group v-model="pergunta4" column>
            <v-radio
              label="sim"
              value="1"
            ></v-radio>
            <v-radio
              label="não"
              value="2"
            ></v-radio>
          </v-radio-group>
          <p class="text-left">Tem filhos?</p>
          <v-radio-group v-model="pergunta5" column>
            <v-radio
              label="sim"
              value="1"
            ></v-radio>
            <v-radio
              label="não"
              value="3"
            ></v-radio>
          </v-radio-group>
          <p class="text-left">Qual o clima do local onde reside? (quente, frio, meio-termo)</p>
          <v-radio-group v-model="pergunta6" column>
            <v-radio
              label="quente"
              value="2"
            ></v-radio>
            <v-radio
              label="frio"
              value="1"
            ></v-radio>
             <v-radio
              label="ameno"
              value="3"
            ></v-radio>
          </v-radio-group>
          <p class="text-left">Está empregado?</p>
          <v-radio-group v-model="pergunta7" column>
            <v-radio
              label="sim"
              value="4"
            ></v-radio>
            <v-radio
              label="não"
              value="1"
            ></v-radio>
          </v-radio-group>
          <p class="text-left">Em que faixa está sua renda?</p>
          <v-radio-group v-model="pergunta8" column>
            <v-radio
              label="até 3 salários mínimos"
              value="1"
            ></v-radio>
            <v-radio
              label="3 a 5 salários mínimos"
              value="2"
            ></v-radio>
            <v-radio
              label="5 a 10 salários mínimos"
              value="3"
            ></v-radio>
            <v-radio
              label="mais de 10 salários mínimos"
              value="0"
            ></v-radio>
          </v-radio-group>
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
      dialog: false,
      pergunta1: null,
      pergunta2: null,
      pergunta3: null,
      pergunta4: null,
      pergunta5: null,
      pergunta6: null,
      pergunta7: null,
      pergunta8: null
    };
  },

  created() {
    this.loading = true;
    this.loadData();
  },

  methods: {
    async loadData() {
      this.pets = await petService.findAll()
      this.pets.map(this.addAvatar);
      this.loading = false;
    },

    resetAlerts() {
      this.success = false;
      this.error = false;
    },

    addAvatar(pet) {
      switch (pet.especie) {
        case "Cachorro":
          pet.avatar = "https://placedog.net/640/480?random"
          break;
        case "Gato":
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

    async showInterest() {
      this.buttonLoading = true
      this.resetAlerts();
      try {
        /*
       await interesseService.create(
        this.selectedPet.id,
        this.user,
        this.pergunta1,
        this.pergunta2,
        this.pergunta3,
        this.pergunta4,
        this.pergunta5,
        this.pergunta6,
        this.pergunta7,
        this.pergunta8
        )
        */
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
