import Vue from 'vue'
import Vuex from 'vuex'
import Cats from '@/services/cats'
import Dogs from '@/services/dogs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Cats,
    Dogs
  },
  mutations: {
    appendPet: (state, payload) => {
      state[payload.species].push(payload)
    },
    removePet: (state, payload) => {
      state[payload.species].splice(payload.index, 1)
    },
    updatePet: (state, payload) => {
      if (payload.pet && payload.pet.species) { state[payload.pet.species][payload.index] = payload.pet }
    }
  },
  actions: {
    addPet: (context, payload) => {
      context.commit('appendPet', payload)
    },
    deletePet: (context, payload) => {
      context.commit('removePet', payload)
    },
    editPet: (context, payload) => {
      context.commit('updatePet', payload)
    }
  }
})
