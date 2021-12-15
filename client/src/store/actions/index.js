import axios from "axios";
import { API_BASE } from "@/utils/const";

export default {
  addToItems: ({ commit }, product) => commit("ADD_ITEM", product),
  removeItem: ({ commit }, item) => commit("REMOVE_ITEM", item),
  async getProducts({ commit }) {
    commit("TOGGLE_LOADING", true);
    const response = await axios(API_BASE + "/products");
    const data = await response.data;

    if (data.status === 200) {
      commit("SET_PRODUCTS", data.result);
    }
    commit("TOGGLE_LOADING", false);
  },
  toggleLoading: ({ commit }) => commit("TOGGLE_LOADING", isLoading),

  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("TOGGLE_LOADING", true);
      axios({ url: API_BASE + "/auth/login", data: user, method: "POST" })
        .then(resp => {
          const token = resp.data.result.token;
          const user = resp.data.result.user;
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = token;
          commit("AUTH_SUCCESS", token, user);
          resolve(resp);
        })
        .catch(err => {
          commit("AUTH_ERROR");
          localStorage.removeItem("token");
          reject(err);
        })
        .finally(() => {
          commit("TOGGLE_LOADING", false);
        });
    });
  },

  register({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("TOGGLE_LOADING", true);
      axios({ url: API_BASE + "/auth/register", data: user, method: "POST" })
        .then(resp => {
          const token = resp.data.result.token;
          const user = resp.data.result.user;
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = token;
          commit("AUTH_SUCCESS", token, user);
          resolve(resp);
        })
        .catch(err => {
          commit("AUTH_ERROR", err);
          localStorage.removeItem("token");
          reject(err);
        })
        .finally(() => {
          commit("TOGGLE_LOADING", false);
        });
    });
  },

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit("LOGOUT");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      resolve();
    });
  }
};
