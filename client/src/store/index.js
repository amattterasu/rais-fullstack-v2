import Vue from 'vue'

import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: {},
    delItem: {},
    TotalPositions: 0,
    Total: 0,
    products: [],
    loading: false,

    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  getters,
  actions,
  mutations,
  plugins: [
    createPersistedState({
      key: "cart",
      paths: ["cart", "TotalPositions", "Total"]
    })
  ]
});

export default store;
