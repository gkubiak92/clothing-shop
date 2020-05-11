import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";
import {
  removeItemFromCart,
  addItemToCart,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  cartItem,
  addItemToCart,
  removeItem,
  removeItemFromCart,
}) => {
  const { id, imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItemFromCart(id)}>
        &#10005;
      </div>
    </div>
  );
};

export const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItem: (id) => dispatch(removeItem(id)),
  removeItemFromCart: (id) => dispatch(removeItemFromCart(id)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
