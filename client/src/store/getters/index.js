export default {
  cart: ({ cart }) => cart,
  delItem: ({ delItem }) => delItem,
  Total: ({ Total }) => Total,
  TotalPositions: ({ TotalPositions }) => TotalPositions,
  products: ({ products }) => products,
  loading: ({loading}) => loading,
  isLoggedIn: ({ token }) => !!token,
  authStatus: ({ status }) => status,
};
