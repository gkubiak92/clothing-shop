export const addItemToCart = (cartItems, cartItemToAdd) => {
  const itemExists = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (itemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, id) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === id);
  console.log(existingItem);
  if (existingItem.quantity === 1) {
    console.log("jest jeden item");
    return cartItems.filter((cartItem) => cartItem.id !== id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const removeItemFromCart = (cartItems, id) => {
  return cartItems.filter((cartItem) => cartItem.id !== id);
};
