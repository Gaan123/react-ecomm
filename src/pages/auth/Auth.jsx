import React from 'react';
import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signup/SignUp";
import './auth.scss'
const Auth = (props) => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
};

export default Auth;