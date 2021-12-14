import {API_BASE} from '@/utils/const'

export default {
  addToItems: ({ commit }, product) => commit("ADD_ITEM", product),
  removeItem: ({ commit }, item) => commit("REMOVE_ITEM", item),
  chengeQt: ({ commit }) => commit("CHENGE_QT"),
  revivalItem: ({ commit }) => commit("REVIVA"),
  async getProducts({commit}) {
    commit("TOGGLE_LOADING", true)
    const response = await fetch(API_BASE + '/products');
    const data = await response.json();

    if (data.status === 200) {
      commit("SET_PRODUCTS", data.result)
    }
    commit("TOGGLE_LOADING", false)
  },
  toggleLoading: ({commit}) => commit("TOGGLE_LOADING", isLoading)
};
