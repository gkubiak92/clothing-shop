import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartItemsTotalPrice,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const checkoutPage = ({ cartItems, cartItemsTotalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${cartItemsTotalPrice}</span>
    </div>
    <StripeCheckoutButton
      price={cartItemsTotalPrice}
      className="stripe-button"
    />
  </div>
);

export const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotalPrice: selectCartItemsTotalPrice,
});

export default connect(mapStateToProps)(checkoutPage);
