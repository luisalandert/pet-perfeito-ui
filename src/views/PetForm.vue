<template>
  <v-container>
    <v-flex class="d-flex flex-row py-6 pl-3">
      <h2 id="title" class="black--text">Cadastro de Pet</h2>
    </v-flex>

    <v-form class="px-3">
      <v-file-input
        :rules="rules"
        accept="image/png, image/jpeg"
        placeholder="Escolha uma foto para o seu pet"
        prepend-icon="mdi-camera"
        v-model="image"
        label="Escolha uma foto para o seu pet"
      ></v-file-input>
      <v-text-field v-model="nome" label="Nome"></v-text-field>
      <v-text-field v-model="descricao" label="Descrição"></v-text-field>
      <v-text-field v-model="especie" label="Espécie"></v-text-field>
      <v-text-field v-model="sexo" label="Sexo"></v-text-field>
      <v-text-field
        v-model="dataNascimento"
        label="Data de Nascimento"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-flex class="d-flex flex-row-reverse">
        <v-btn
          rounded
          depressed
          color="#5fddd5"
          class="white--text"
          :loading="loading"
          @click="createPet"
        >
          Cadastrar
        </v-btn>
      </v-flex>
    </v-form>
    <v-alert v-model="success" type="success" max-width="400" dismissible
      >Cadastro realizado com sucesso</v-alert
    >
    <v-alert v-model="error" type="error" max-width="400" dismissible
      >Erro ao fazer cadastro</v-alert
    >
  </v-container>
</template>

<script>
import petService from "../services/petService";
import imageService from "../services/imageService";

export default {
  name: "PetForm",

  data() {
    return {
      success: false,
      error: false,
      loading: false,
      nome: "",
      descricao: "",
      especie: "",
      sexo: "",
      dataNascimento: "",
    };
  },

  methods: {
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },

    async uploadPetImage() {
      const formData = new FormData();
      fetch(this.image)
        .then((res) => res.blob())
        .then(async (blob) => {
          console.log(blob);
          let imageName = `${this.nome}-${this.dataNascimento.replaceAll(
            "/",
            ""
          )}.jpg`;
          formData.append("image", blob, imageName);
          await imageService.create(formData);
        });
    },

    async downloadImage() {
      console.log("downloading image");
      let imageName = `${this.nome.replaceAll(
        " ",
        ""
      )}-${this.dataNascimento.replaceAll("/", "")}.jpg`;
      console.log(imageName);
      let base64 = await this.getBase64(this.image);
      console.log(base64);
      window.localStorage.setItem(imageName, JSON.stringify(base64));

      console.log("file saved successfully");
    },

    async createPet() {
      this.loading = true;
      this.resetAlerts();
      try {
        // await this.uploadPetImage();
        await this.downloadImage();
        let dateParts = this.dataNascimento.split("/");

        // month is 0-based, that's why we need dataParts[1] - 1
        var dateObject = new Date(
          +dateParts[2],
          dateParts[1] - 1,
          +dateParts[0]
        );
        await petService.create(
          this.nome,
          this.descricao,
          this.especie,
          this.sexo,
          dateObject
        );
        this.success = true;
      } catch (e) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },

    resetAlerts() {
      this.success = false;
      this.error = false;
    },
  },
};
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
