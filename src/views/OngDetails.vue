<template>
  <v-container class="py-6 pl-3">
    <div>
      <v-flex class="d-flex flex-row py-6 pl-3">
        <h2 id="title" class="orange--text">Instituto Amparo Animal</h2>
      </v-flex>
      <h3 class="text-left black--text mb-3">Sobre a ONG</h3>
      <p class="text-justify black--text">
        Lorem ipsum dolor sit amet. Vel corrupti maxime rem dolorem iste et dolorem ipsa. Aut quia molestiae 33 illum maxime aut eius corporis cum temporibus voluptatem qui quis omnis est incidunt modi? Aut obcaecati impedit in magnam consequuntur et corrupti accusantium ea sapiente voluptatum 33 minus autem qui adipisci nobis. Id aliquam consequatur et nemo cupiditate ut ducimus dolores vel accusamus nesciunt qui voluptatem expedita aut aliquid debitis ut pariatur perspiciatis.
      </p>
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
        <v-row class="mt-3"><a>https://www.amazon.com.br/Tapete-Higi%C3%AAnico-Cafun%C3%A9-Premium-unidades</a></v-row>
        <v-row class="mt-3"><a>https://www.amazon.com.br/Tapete-Higi%C3%AAnico-Cafun%C3%A9-Premium-unidades</a></v-row>
        <v-row><a>https://www.amazon.com.br/Tapete-Higi%C3%AAnico-Cafun%C3%A9-Premium-unidades</a></v-row>
        <v-row><a>https://www.amazon.com.br/Tapete-Higi%C3%AAnico-Cafun%C3%A9-Premium-unidades</a></v-row>
        <v-row><a>https://www.amazon.com.br/Tapete-Higi%C3%AAnico-Cafun%C3%A9-Premium-unidades</a></v-row>
        <v-row><a>https://www.amazon.com.br/Tapete-Higi%C3%AAnico-Cafun%C3%A9-Premium-unidades</a></v-row>
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