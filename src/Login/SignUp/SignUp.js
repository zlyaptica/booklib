import React from 'react'
import classes from './SignUp.module.css'
import {reduxForm} from "redux-form";
import {SignUpForm} from "../SignIn/SignUpForm";

const SignUp = () => {
    return (
        <div className={classes.signUp}>
            <div className={classes.wrapper}>
                <div className={classes.signUpWrapper}>
                    <div className={classes.signUpHeader}>Регистрация</div>
                    <SignUpReduxForm />
                    <button className={classes.signUpButton}>Регистрация</button>
                </div>
            </div>
        </div>
    )
}

const SignUpReduxForm = reduxForm({form: 'signUp'})(SignUpForm)

export { SignUp }