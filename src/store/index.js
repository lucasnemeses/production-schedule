import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dialogOrder: false,
  },
  getters: {
  },
  mutations: {
    toggleDialogOrder(state) {
      state.dialogOrder = !state.dialogOrder
    }
  },
  actions: {
    toggleDialogOrder({ commit }) {
      commit('toggleDialogOrder')
    }
  },
  modules: {
  }
})
