import React from 'react';
import CustomButton from "../button/CustomButton";
import {connect} from 'react-redux';
import CartItem from "../cart-item/CartItem";
import {selectCartItems} from "../../redux/cart/cart.selectors";
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
const mapStateToProps=(state)=>({
    cartItems:selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropdown);