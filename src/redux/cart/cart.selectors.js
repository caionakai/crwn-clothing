import { createSelector } from "reselect";

const selecCart = state => state.cart;

export const selectCartItem = createSelector(
  [selecCart],
  cart => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItem],
  cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);
