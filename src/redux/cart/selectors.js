export const selectCartListLength = state => Object.values(state.cart.list).flat().length;

export const selectCartList = state => state.cart.list;