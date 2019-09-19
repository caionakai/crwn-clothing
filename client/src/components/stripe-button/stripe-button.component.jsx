import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishabeKey = "pk_test_RWQ7gBEmAMGJlhsKOomznOP900qrFA3Ct2";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("Payment Successful");
      })
      .catch(error => {
        console.log("Payment error", error);
        alert(
          "There was an issue with your payment. Please make sure you used the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishabeKey}
    />
  );
};

export default StripeCheckoutButton;
