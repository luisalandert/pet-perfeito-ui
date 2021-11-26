<template>
<v-container fill-height>
    <v-row class="d-inline-flex pa-2">
        <v-col>
            <v-img src="../assets/user.jpg" contain height="400"></v-img>
            <v-btn 
                rounded 
                large 
                depressed 
                color="#5fddd5" 
                class="white--text" 
                width="120" 
                to="/signUp/user"
            >
            Usuário
            </v-btn>
        </v-col>
        <v-col>
            <v-img src="../assets/ong.jpg" contain height="400"></v-img>
            <v-btn 
                rounded 
                large 
                depressed 
                color="#5fddd5" 
                class="white--text" 
                width="120" 
                to="/signUp/ong"
            >
            ONG
            </v-btn>
        </v-col>
    </v-row>
</v-container>
</template>