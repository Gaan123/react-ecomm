import CartActionTypes from "./cart.type";
export const toggleCartHidden=()=>({
    type:CartActionTypes.TOOGLE_CART_HIDDEN
})

export const addItem = item=>({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})