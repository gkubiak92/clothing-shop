import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { stripeApi } from "../../data/api-config";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = stripeApi.publishableKey;

  const onToken = (token) => {
    console.log(token);
    alert("Payment successfull");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Clothing shop"
      billingAddress
      shippingAddress
      description={`Your total is ${price}$`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
