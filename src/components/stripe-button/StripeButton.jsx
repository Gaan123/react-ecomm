import React from 'react';
import StripeCheckout from "react-stripe-checkout";


const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_iENllqQkk5nk6fEYopqZWipn00Azq4lIZU';
    const onToken=token=>{
        console.log(token)
        alert('payment succesful')
    }
    return <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            img="http://svgshare.com/i/CUz.svg"
            description={`Your Total price is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            />
}

export default StripeButton;