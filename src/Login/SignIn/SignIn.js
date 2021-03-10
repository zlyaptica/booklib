import React from 'react'
import classes from './SignIn.module.css'
import {NavLink, useHistory} from "react-router-dom";
import {reduxForm} from "redux-form";
import {SignInForm} from "./SignInForm";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/authReducer';

const SignIn = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    
    const signIn = ({email, password}) => {
        dispatch(login(email, password))
    }
    
    if (isAuthenticated){
        history.push('/')
    }
    return (
        <div className={classes.signIn}>
            <div className={classes.wrapper}>
                <div className={classes.signInWrapper}>
                    <div className={classes.signInHeader}>Войти</div>
                    <SignInReduxForm onSubmit={signIn}/>
                    <p className={classes.signInChoose}>или</p>
                    <NavLink to="/signup" className={classes.signInToSignUp}>Зарегистрироваться</NavLink>
                </div>
            </div>
        </div>
    )
}

const SignInReduxForm = reduxForm({form: 'signIn'})(SignInForm)

export {SignIn}