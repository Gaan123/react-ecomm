import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";

import './header.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from "./Header.styles";

const Header = ({currentUser,hidden}) => {

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>Shop</OptionLink>
                <OptionLink to='/shop'>Contact</OptionLink>
                {
                    currentUser?
                        <OptionLink as="div" onClick={()=>auth.signOut()} style={{ cursor:"pointer" }}>Sign out</OptionLink>
                        :
                        <OptionLink to="signIn">Sign In </OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {
                hidden? null: <CartDropdown/>
            }

        </HeaderContainer>
    )
};
const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden

});
export default connect(mapStateToProps)(Header);