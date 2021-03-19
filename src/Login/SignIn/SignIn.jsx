import React from 'react'
import classes from './SignIn.module.css'
import {NavLink, useHistory} from 'react-router-dom'
import {reduxForm} from 'redux-form'
import {SignInForm} from './SignInForm'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../redux/authReducer'

const SignIn = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)


    const signIn = ({email, password, rememberMe}) => {
        dispatch(login(email, password, rememberMe))
    }

    if (isAuthenticated) {
        history.push('/')
    }
    return (
        <div className={classes.signIn}>
            <div className={classes.wrapper}>
                <div className={classes.header}>Войти</div>
                <SignInReduxForm onSubmit={signIn}/>
                <p>или</p>
                <NavLink to="/signup" className={classes.toSignUp}>Зарегистрироваться</NavLink>
            </div>
        </div>
    )
}

const SignInReduxForm = reduxForm({form: 'signIn'})(SignInForm)

export {SignIn}