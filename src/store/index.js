import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    musicState:false
  },
  getters: {},
  mutations: {
    musicOn(state){
      state.musicState = true
    },
    musicOff(state){
      state.musicState = false
    }
  },
  actions: {},
  modules: {},
});
