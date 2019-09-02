import React, {Component} from 'react';
import FormInput from '../form/FormInput';
import CustomButton from '../button/CustomButton';
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import './signup.scss';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
    handleSubmit=async (e)=>{
    e.preventDefault();
    console.log('v');
        const {displayName, email, password, confirmPassword} = this.state;
        if (password!==confirmPassword){
        alert('passwords do not match')
        }
        try{
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,displayName);
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
        });
        }catch (e) {
            console.error(e);
        }
    }
    handleChange=e=>{
    const {name,value}=e.target;
    this.setState({[name]:value});
    }
    render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" action="" onSubmit={this.handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
            < /div>)
        ;
    }
}

export default SignUp;
