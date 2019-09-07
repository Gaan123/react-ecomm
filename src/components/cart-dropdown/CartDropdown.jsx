import React from 'react';
import CustomButton from "../button/CustomButton";
import './cart-dropdown.scss';
const CartDropdown = (props) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items"></div>
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    )
};

export default CartDropdown;