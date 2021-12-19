import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  name: 'store',
  state: {
    user: null,
    ong: null,
    selectedPet: {}
  },
  mutations: {
    updateUser(state, user) {
      state.user = user
    },
    updateOng(state, ong) {
      state.ong = ong
    },
    updateSelectedPet(state, pet) {
      state.selectedPet = pet
    }
  },
  getters: {
    user: state => state.user,
    ong: state => state.ong,
    selectedPet: state => state.selectedPet
  }
})
