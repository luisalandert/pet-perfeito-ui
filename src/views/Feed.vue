<template>
    <v-row class="pa-6 my-8 mx-16">
        <v-col
        v-for="pet in pets"
        :key="pet.nome"
        cols="4"
        >
            <v-card height="300">
                <v-card-title class="d-flex justify-start m-6">
                    <v-avatar class="d-flex justify-start mr-4">
                        <v-img src="../assets/pawIcon2.png"/>
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
                        rounded 
                        text
                        color=#B387CC
                        @click="reserve"
                    >
                        <v-icon color=#B387CC class="mr-2">mdi-heart</v-icon>
                        Mostrar interesse
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        </v-row>
</template>

<script>
//import petService from '../services/petService'

export default {

  name: 'Feed',

  data() {
    return {
        test: '../assets/dogIcon2.png',
        pets: [
            { nome: 'Luna', 
              descricao: 'Cachorrinha muito amorosa que gosta de carinhos e passeios.', 
              especie: 'Cachorro', 
              sexo: 'Fêmea', 
              dataNascimento: '11/05/2017' 
            },
            { nome: 'Hades', 
              descricao: 'Hades é muito tranquilo e gosta de ficar no seu cantinho.', 
              especie: 'Gato', 
              sexo: 'Macho', 
              dataNascimento: '17/11/2019' 
            },
            { nome: 'Oswaldo', 
              descricao: 'Pomba resgatada com a patinha machucada, está curada mas não voa mais.', 
              especie: 'Ave', 
              sexo: 'Macho', 
              dataNascimento: '09/08/2020' 
            },
            { nome: 'Mickey', 
              descricao: 'Camundongo resgatado de pet shop.', 
              especie: 'Roedor', 
              sexo: 'Macho', 
              dataNascimento: '01/10/2021' 
            },
            { nome: 'Lune', 
              descricao: 'Cachorrinha muito amorosa que gosta de carinhos e passeios.', 
              especie: 'Cachorro', 
              sexo: 'Fêmea', 
              dataNascimento: '11/05/2017' 
            },
            { nome: 'Handes', 
              descricao: 'Hades é muito tranquilo e gosta de ficar no seu cantinho.', 
              especie: 'Gato', 
              sexo: 'Macho', 
              dataNascimento: '17/11/2019' 
            },
            { nome: 'Oswald', 
              descricao: 'Pomba resgatada com a patinha machucada, está curada mas não voa mais.', 
              especie: 'Ave', 
              sexo: 'Macho', 
              dataNascimento: '09/08/2020' 
            },
            { nome: 'Mick', 
              descricao: 'Camundongo resgatado de pet shop.', 
              especie: 'Roedor', 
              sexo: 'Macho', 
              dataNascimento: '01/10/2021' 
            },
            { nome: 'Mike', 
              descricao: 'Camundongo resgatado de pet shop.', 
              especie: 'Roedor', 
              sexo: 'Macho', 
              dataNascimento: '01/10/2021' 
            }
        ]
    }
  },

  methods: {
      image(pet) {
          let img;
            switch (pet.especie) {
                case "Cachorro":
                    img = "../assets/dogIcon2.png"
                    break
                case "Gato":
                    img = "../assets/catIcon2.png"
                    break
                case "Ave":
                    img = "../assets/birdIcon2.png"
                    break
                default:
                    img = "../assets/pawIcon2.png"
            }
            return img
      }
  }
}
</script>