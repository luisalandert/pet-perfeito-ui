import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  name: 'store',
  state: {
    user: null,
    ong: null,
    ongId: null,
    selectedPet: {}
  },
  mutations: {
    updateUser(state, user) {
      state.user = user
    },
    updateOng(state, ong) {
      state.ong = ong
    },
    updateOngId(state, ongId) {
      state.ongId = ongId
    },
    updateSelectedPet(state, pet) {
      state.selectedPet = pet
    },
  },
  getters: {
    user: state => state.user,
    ong: state => state.ong,
    ongId: state => state.ongId,
    selectedPet: state => state.selectedPet
  }
})
