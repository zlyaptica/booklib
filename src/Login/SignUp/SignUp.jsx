import React from 'react'
import classes from './SignUp.module.css'
import {reduxForm} from 'redux-form'
import {SignUpForm} from './SignUpForm'
import {useDispatch, useSelector} from 'react-redux'
import {signup} from '../../redux/authReducer'
import {useHistory} from 'react-router'

const SignUp = () => {
    const history = useHistory()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const dispatch = useDispatch()

    const signUp = ({username, email, password}) => {
        dispatch(signup(username, email, password))
    }

    if (isAuthenticated) {
        history.push('/')
    }

    return (
        <div className={classes.signUp}>
            <div className={classes.wrapper}>
                <div className={classes.header}>Регистрация</div>
                <SignUpReduxForm onSubmit={signUp}/>
            </div>
        </div>
    )
}

const SignUpReduxForm = reduxForm({form: 'signUp'})(SignUpForm)

export {SignUp}