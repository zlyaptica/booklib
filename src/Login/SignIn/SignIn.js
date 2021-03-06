import React from 'react'
import classes from './SignIn.module.css'
import {NavLink} from "react-router-dom";
import {reduxForm} from "redux-form";
import {SignInForm} from "./SignInForm";
import { useSelector, useDispatch } from 'react-redux';
import { usersAPI } from '../../api/api';

const SignIn = () => {
    const authentication = useSelector(state => state.auth)
    const dispatch = useDispatch()

    React.useEffect(() => {
        usersAPI.signIn().then(data => {
            debugger
            
        })
    }, [dispatch])

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