import { calculateAmount, calculateTotal } from "@/functions";

export default {
  ADD_ITEM: (state, item) => {
    state.TotalPositions++;
    if (item.id in state.cart) {
      state.cart[item.id].qt++;
    } else {
      let stateItem = { ...item };
      stateItem.qt = 1;
      state.cart[item.id] = stateItem;
      state.cart = {...state.cart}
    }
    state.Total = calculateAmount(state.cart);
  },
  REMOVE_ITEM: (state, id) => {
    if (state.cart[id] && state.cart[id].qt > 0) {
      state.TotalPositions--;
      state.cart[id].qt--;
    }
    if (state.cart[id] && state.cart[id].qt === 0) {
      delete state.cart[id];
    }
    state.Total = calculateAmount(state.cart);
    state.TotalPositions = calculateTotal(state.cart);
  },
  SET_PRODUCTS: (state, items) => {
    state.products = items;
  },
  TOGGLE_LOADING: (state, isLoading) => {
    state.loading = isLoading;
  },
  AUTH_SUCCESS(state, token, user){
    state.status = 'success';
    state.token = token;
    state.user = user;
  },
  AUTH_ERROR(state){
    state.status = 'error';
  },
  LOGOUT(state){
    state.status = '';
    state.token = '';
  },
};
