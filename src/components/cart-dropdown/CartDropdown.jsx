import React from 'react';
import CustomButton from "../button/CustomButton";
import {connect} from 'react-redux';
import CartItem from "../cart-item/CartItem";
import './cart-dropdown.scss';
const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)
                }
            </div>
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    )
};
const mapStateToProps=({cart:{cartItems}})=>({
    cartItems
});
export default connect(mapStateToProps)(CartDropdown);