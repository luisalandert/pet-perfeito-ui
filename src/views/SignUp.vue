<template>
<v-container fill-height>
    <v-row align="center" justify="center">
        <v-col>
            <v-img src="../assets/dog.png" contain height="300"></v-img>
            <h2>Escolha o tipo de perfil pra se inscrever no Pet Perfeito!</h2>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-btn rounded large color="red" class="white--text" to="/signUp/user">
            Usuário
        </v-btn>
        </v-col>
        <v-col>
            <v-btn rounded large color="red" class="white--text" to="/signUp/ong">
                ONG
            </v-btn>
        </v-col>
    </v-row>
</v-container>
</template>