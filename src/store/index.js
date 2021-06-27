import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    iso: '',
  },
  mutations: {
    SET_ISO(state,iso){
      state.iso = iso;
    },
  },
  actions: {
    async FETCH_ISO({commit}) {
      let isoTime = await axios.get('https://info.sasuke.ir/api/time').then(res => res.data['isoTime']);
      commit('SET_ISO',isoTime);
    }
  },
})