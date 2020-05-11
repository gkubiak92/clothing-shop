import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItem = (id) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: id,
});

export const removeItemFromCart = (id) => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: id,
});
