import React from 'react'
import classes from './SignIn.module.css'
import {NavLink} from "react-router-dom";
import {reduxForm} from "redux-form";
import {SignInForm} from "../SignUp/SignInForm";

const SignIn = () => {
    return (
        <div className={classes.signIn}>
            <div className={classes.wrapper}>
                <div className={classes.signInWrapper}>
                    <div className={classes.signInHeader}>Войти</div>
                    <SignInReduxForm />
                    <p className={classes.signInChoose}>или</p>
                    <NavLink to="/signup" className={classes.signInToSignUp}>Зарегистрироваться</NavLink>
                </div>
            </div>
        </div>
    )
}

const SignInReduxForm = reduxForm({form: 'signIn'})(SignInForm)

export {SignIn}