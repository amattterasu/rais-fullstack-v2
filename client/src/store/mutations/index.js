import { calculateAmount, calculateTotal, copyFunc } from "@/functions";

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
    console.log(state.Total);
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
    // state.delItem = {};
    // state.delItem = copyFunc(state.cart, state.delItem, item);
    // delete state.cart[item];
    // state.Total = calculateAmount(state.cart);
    // state.TotalPositions = calculateTotal(state.cart);
  },
  CHENGE_QT: state => {
    state.TotalPositions = calculateTotal(state.cart);
    state.Total = calculateAmount(state.cart);
  },
  REVIVA: state => {
    state.cart = Object.assign(state.delItem, state.cart);
    state.Total = calculateAmount(state.cart);
    state.TotalPositions = calculateTotal(state.cart);
  },
  SET_PRODUCTS: (state, items) => {
    state.products = items;
  },
  TOGGLE_LOADING: (state, isLoading) => {
    state.loading = isLoading;
  },
};
