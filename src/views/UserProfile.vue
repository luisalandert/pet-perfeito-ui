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
        <v-flex class="d-flex flex-row-reverse">
            <v-btn
              rounded 
              depressed 
              color="#5fddd5" 
              class="white--text mb-6" 
              @click="updateUser"
            >
              Atualizar
            </v-btn>
            <v-btn
              rounded 
              depressed 
              color="#5fddd5" 
              class="white--text mb-6 mr-4" 
              @click="(dialog = true)"
            >
              Formulário
            </v-btn>
        </v-flex>
    </v-form>

    <v-divider></v-divider>

    <v-flex class="d-flex flex-row py-6 pl-3">
      <h2 id="title" class="black--text">Interesses do Usuário</h2>
    </v-flex>

    <v-data-table
        :headers="headers"
        :items="interesses"
        item-key="id"
    >
      <template #item.nome="{ item }">
        {{ item.pet.nome }}
      </template>

      <template #item.descricao="{ item }">
        {{ item.pet.descricao }}
      </template>

      <template #item.especie="{ item }">
        {{ item.pet.especie }}
      </template>

      <template #item.sexo="{ item }">
        {{ item.pet.sexo }}
      </template>

      <template #item.dataNascimento="{ item }">
        {{ item.pet.dataNascimento }}
      </template>

    </v-data-table>

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
              Cancelar
            </v-btn>
            <v-btn
              color="#5fddd5"
              text
              @click=closeDialog
            >
              Confirmar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

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
import interesseService from '../services/interesseService'

export default {

  name: 'UserProfile',

  data() {
    return {
      success: false,
      error: false,
      nome: '',
      cpf: '',
      telefone: '',
      cep: '',
      dataNascimento: '',
      interesses: [],
      headers: [
      { text: 'Nome do pet', value: 'nome'},
      { text: 'Descrição', value: 'descricao'},
      { text: 'Espécie', value: 'especie'},
      { text: 'Sexo', value: 'sexo'},
      { text: 'Data de nascimento', value: 'dataNascimento'},
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
    this.loadData()
  },

  methods: {
    async loadData() {
      this.id = this.$store.state.user.id
      let user = await userService.find(this.id)
      console.log('user')
      console.log(user)
      this.nome = user.nome
      this.cpf = user.cpf
      this.telefone = user.telefone
      this.cep = user.cep
      this.dataNascimento = user.dataNascimento
      this.pergunta1 = user.avaliacao.pergunta1.toString()
      this.pergunta2 = user.avaliacao.pergunta2.toString()
      this.pergunta3 = user.avaliacao.pergunta3.toString()
      this.pergunta4 = user.avaliacao.pergunta4.toString()
      this.pergunta5 =  user.avaliacao.pergunta5.toString()
      this.pergunta6 = user.avaliacao.pergunta6.toString()
      this.pergunta7 =  user.avaliacao.pergunta7.toString()
      this.pergunta8 =  user.avaliacao.pergunta8.toString()
      this.interesses = await interesseService.findByUser(this.id)
      console.log('pergunta1')
      console.log(this.pergunta1)
    },

    async updateUser() {
        this.resetAlerts()
        try{
            await userService.update(
              this.id, 
              this.nome, 
              this.cpf, 
              this.telefone, 
              this.cep, 
              this.dataNascimento
              )
            this.success = true
        } catch (e) {
            this.error = true
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
  .v-alert {
  position: fixed;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  }
</style>