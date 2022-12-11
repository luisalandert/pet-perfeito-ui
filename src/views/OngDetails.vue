<template>
    <v-container class="py-6 pl-3">
      <div>
        <v-flex class="d-flex flex-row py-6 pl-3">
          <h2 id="title" class="orange--text">Instituto Amparo Animal</h2>
        </v-flex>
        <h3 class="text-left black--text mb-3">Sobre a ONG</h3>
        <p class="text-justify black--text">
            O Instituto Amparo Animal, localizado em Santana (SP), é formada por veterinários, biólogos, advogados, administradores, designers, terapeutas e jornalistas que acreditam em um mundo melhor para todos os seres. Nós atuamos, portanto, em três frentes de cura: animal, vegetal e humana.
Apesar da inauguração recente, mais exatamente em 16 de fevereiro de 2016, já resgatamos centenas de cães e gatos ― além de alguns coelhos, hamsters, aves e outros animais esporádicos. A maioria desses bichos hoje dorme em um lugar quentinho, com comida à vontade e amor em forma de cuidados.
Os atendimentos realizados na nossa clínica ultrapassaram 1,4 mil. E as castrações estão chegando aos quatro dígitos ― se considerarmos os animais operados fora da ONG, essa meta já foi batida. Também participamos de feiras de adoção aos finais de semana e organizamos brechós mensais para ajudar a pagar os boletos que os bichanos adoram mastigar.
Vem somar?
Doe tempo: seja voluntário.
Faça a diferença: adote.        </p>
        <h2 class="text-left orange--text mb-3">Como ajudar?</h2>
        <h3 class="text-left black--text mb-3">Cupons Disponíveis</h3>
        <v-col
          v-for="parceria in parcerias"
          :key="parceria.loja"
          class="d-flex justify-center col-md-3"
        >
          <v-card
          class="d-flex flex-row mb-6"
          width="800"
          height="150"
          >
            <v-col>
              <v-row>
                <v-card-title> {{ parceria.loja }} </v-card-title>
              </v-row>
              <v-row>
                <v-card-text class="mb-2"> {{ parceria.text }} </v-card-text>
              </v-row>
            </v-col>
          </v-card>
        </v-col>
  
        <h3 class="text-left black--text mb-3">Links Afiliados</h3>
        <p class="text-left black--text mb-3">Abaixo listamos os produtos que utilizamos em nossa ONG no cuidado de nossos animais. Ao comprar pelos links abaixo você ajuda nossa ONG com uma porcentagem das vendas.</p>
        <div class="mt-3">
          <v-row class="mt-3"><a>https://www.amazon.com.br/Tapetes-Higi%C3%AAnicos-Premium-PuppyPets-UNIDADES/dp/B08KKP8DCH/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3J75T0CJ5LVHN&keywords=tapete+higienico&qid=1670776753&sprefix=tapete%2Caps%2C1576&sr=8-7</a></v-row>
          <v-row class="mt-3"><a>https://www.amazon.com.br/Ra%C3%A7%C3%A3o-Premier-F%C3%B3rmula-Adultos-Grandes/dp/B07ZR2CVSX/ref=sr_1_1?keywords=racao+premier&qid=1670776841&sprefix=racao+%2Caps%2C395&sr=8-1&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74</a></v-row>
          <v-row><a>https://www.amazon.com.br/Coleira-Peitoral-para-Gatos-Regulagem/dp/B0B36NPB9X/ref=sr_1_2_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=LV4ERXIZR3QD&keywords=coleira&qid=1670776922&sprefix=coleira%2Caps%2C992&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyQVNGS1RNVEJRSlRQJmVuY3J5cHRlZElkPUEwOTYxNTEwMTVENUdYNTNYQ1RVJmVuY3J5cHRlZEFkSWQ9QTAwMzMxNDYyM0o2RDdXVk5ZSVgmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl</a></v-row>
          <v-row><a>https://www.amazon.com.br/Caminha-Quadrada-Estampada-Cachorro-Patinha/dp/B0B7CFCXRD/ref=sr_1_8?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2FU1TAJQN02QF&keywords=caminha+cachorros&qid=1670776962&sprefix=caminha+cachorro%2Caps%2C387&sr=8-8</a></v-row>
        </div>
      </div>
    </v-container>
  </template>
  <script>
  export default {
    name: 'OngDetails',
  
    data() {
      return {
        parcerias: [
          {
            "loja": "Amazon",
            "text": "10% de desconto em itens pet.",
            "image": "../assets/amazon.png"
          },
          {
            "loja": "Cobasi",
            "text": "5% de desconto em rações.",
            "image": "../assets/cobasi.png"
          }
        ]
      }
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