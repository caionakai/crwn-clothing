import { createSelector } from "reselect";

const selecCart = state => state.cart;

export const selectCartItem = createSelector(
  [selecCart],
  cart => cart.cartItems
);

export const selecCartHidden = createSelector(
  [selecCart],
  cart => cart.hidden
);

export const selectCartItemCount = createSelector(
  [selectCartItem],
  cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItem],
  cartItems =>
    cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
