import React, {Component} from 'react';
import FormInput from "../form/FormInput";
import CustomButton from "../button/CustomButton";
import './signin.scss';
import  {signInWithGoogle} from "../../firebase/firebase.utils";
import {auth} from "../../firebase/firebase.utils";

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=async e=>{
        e.preventDefault();
        const {email,password}=this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }catch (e) {
            console.error(e);
        }

    }
    handleChange=e=>{
        const {value,name}=e.target;
        this.setState({[name]:value});
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already Have an account</h2>
                <span>Sign with your email and password</span>
                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" handleChange={this.handleChange} label="email" value={this.state.email} required/>
                    <FormInput type="password" name="password" handleChange={this.handleChange} label="password" value={this.state.password} required/>
                    <div className="buttons">
                        <CustomButton type="submit" >SignIn</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SignIn with google</CustomButton>
                    </div>
                </form>
               
            </div>
        );
    }
}

export default SignIn;