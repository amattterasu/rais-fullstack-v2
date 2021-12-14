import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import createPersistedState from "vuex-persistedstate";

export default {
  state: {
    cart: {},
    delItem: {},
    TotalPositions: 0,
    Total: 0,
    products: [],
    loading: false
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
};
