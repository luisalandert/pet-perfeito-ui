<template>
<v-container>
    <v-flex class="d-flex flex-row py-6 pl-3">
        <h2 id="title" class="black--text">Profile do Pet</h2>
    </v-flex>

    <v-form class="px-3">
        <v-text-field v-model="nome" label="Nome"></v-text-field>
        <v-text-field v-model="descricao" label="Descrição"></v-text-field>
        <v-text-field v-model="especie" label="Espécie"></v-text-field>
        <v-text-field v-model="sexo" label="Sexo"></v-text-field>
        <v-text-field v-model="dataNascimento" label="Data de Nascimento"></v-text-field>
        <v-spacer></v-spacer>
        <v-flex class="d-flex flex-row-reverse pb-6">
            <v-btn 
              rounded 
              depressed
              color="#5fddd5" 
              class="white--text" 
              :loading=loading
              @click="updatePet"
            >
              Atualizar
            </v-btn>
        </v-flex>
    </v-form>

    <v-divider></v-divider>

    <v-flex class="d-flex flex-row py-6 pl-3">
      <h2 id="title" class="black--text">Interessados no Pet</h2>
    </v-flex>

    <v-data-table
        :headers="headers"
        :items="interesses"
        @click:row="openForm"
        item-key="id"
    >
      <template #item.nome="{ item }">
        {{ item.usuario.nome }}
      </template>

      <template #item.cpf="{ item }">
        {{ item.usuario.cpf }}
      </template>

      <template #item.telefone="{ item }">
        {{ item.usuario.telefone }}
      </template>

      <template #item.cep="{ item }">
        {{ item.usuario.cep }}
      </template>

      <template #item.dataNascimento="{ item }">
        {{ item.usuario.dataNascimento }}
      </template>

       <template #item.notaUsuario="{ item }">
        {{ item.notaUsuario }}
      </template>

    </v-data-table>

    <v-alert
      v-model="success"
      type="success"
      max-width=400
      dismissible
    >Atualização realizada com sucesso</v-alert>
    <v-alert
      v-model="error"
      type="error"
      max-width=400
      dismissible
    >Erro ao atualizar</v-alert>

    <div>
      <v-dialog  v-model=dialog v-if=dialog max-width="500px">
        <v-card>
          <v-card-title>
            Formulário para adoção
          </v-card-title>
          <v-card-text>
            <p class="text-left">Tem experiência com animais?</p>
            <v-radio-group v-model="pergunta1" column>
              <v-radio
                label="sim"
                value="10"
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
                value="10"
              ></v-radio>
            </v-radio-group>
            <p class="text-left">Já possui os materiais necessários para receber o animal? (coleira, casinha, etc)</p>
            <v-radio-group v-model="pergunta3" column>
              <v-radio
                label="sim"
                value="10"
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
                value="10"
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
                value="10"
              ></v-radio>
            </v-radio-group>
            <p class="text-left">Qual o clima do local onde reside? (quente, frio, meio-termo)</p>
            <v-radio-group v-model="pergunta6" column>
              <v-radio
                label="quente"
                value="1"
              ></v-radio>
              <v-radio
                label="frio"
                value="5"
              ></v-radio>
              <v-radio
                label="ameno"
                value="10"
              ></v-radio>
            </v-radio-group>
            <p class="text-left">Está empregado?</p>
            <v-radio-group v-model="pergunta7" column>
              <v-radio
                label="sim"
                value="10"
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
                value="3"
              ></v-radio>
              <v-radio
                label="5 a 10 salários mínimos"
                value="7"
              ></v-radio>
              <v-radio
                label="mais de 10 salários mínimos"
                value="10"
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
              Fechar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</v-container>
</template>

<script>

import petService from '../services/petService'
import interesseService from '../services/interesseService'

export default {

  name: 'PetProfile',

  props: {
    petId: String
  },  

  data() {
    return {
      success: false,
      error: false,
      loading: false,
      id: this.petId,
      nome: '',
      descricao: '',
      especie: '',
      sexo: '',
      dataNascimento: '',
      interesses: [],
      headers: [
      { text: 'Nome do usuário', value: 'nome'},
      { text: 'CPF', value: 'cpf'},
      { text: 'Telefone', value: 'telefone'},
      { text: 'CEP', value: 'cep'},
      { text: 'Data de nascimento', value: 'dataNascimento'},
      { text: 'Pontuação', value: 'notaUsuario'}
      ],

      dialog: false,
      pergunta1: null,
      pergunta2: null,
      pergunta3: null,
      pergunta4: null,
      pergunta5: null,
      pergunta6: null,
      pergunta7: null,
      pergunta8: null
    }
  },

  created() {
    this.loading = true
    this.loadData()
  },

  methods: {

    async loadData() {
      let pet = await petService.find(this.petId)
      this.id = this.petId
      this.nome = pet.nome
      this.descricao = pet.descricao
      this.especie = pet.especie
      this.sexo = pet.sexo
      this.dataNascimento = pet.dataNascimento
      this.interesses = await interesseService.findByPet(this.petId)
      this.loading = false
      console.log(this.interesses)
    },

    async updatePet() {
      this.loading = true
      this.resetAlerts()
      try{
        await petService.update(this.id, this.nome, this.descricao, this.especie, this.sexo, this.dataNascimento)
        this.success = true
      } catch (e) {
        this.error = true
      } finally {
        this.loading = false
      }
    },

    resetAlerts() {
      this.success = false
      this.error = false
    },

    openForm(interessedUser) {
      console.log('user:')
      console.log(interessedUser)

      this.pergunta1 = (interessedUser.usuario.avaliacao.pergunta1).toString()
      this.pergunta2 = (interessedUser.usuario.avaliacao.pergunta2).toString()
      this.pergunta3 = (interessedUser.usuario.avaliacao.pergunta3).toString()
      this.pergunta4 = (interessedUser.usuario.avaliacao.pergunta4).toString()
      this.pergunta5 = (interessedUser.usuario.avaliacao.pergunta5).toString()
      this.pergunta6 = (interessedUser.usuario.avaliacao.pergunta6).toString()
      this.pergunta7 = (interessedUser.usuario.avaliacao.pergunta7).toString()
      this.pergunta8 = (interessedUser.usuario.avaliacao.pergunta8).toString()
      this.dialog = true
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
<style scoped>
  .v-alert {
  position: fixed;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  }
</style>