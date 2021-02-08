import classes from "../SignIn/SignIn.module.css";
import {Field} from "redux-form";

const SignInForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <Field className={classes.signInInputMail} name="email" type="text" placeholder="Почта" component="input"/>
            <Field className={classes.signInInputPassword} name="password" type="password" placeholder="Пароль"
                   component="input"/>
            <Field name="rememberMe" type="checkbox" component="input"/>
            <button className={classes.signInButton}>Войти</button>
        </form>
    )
}

export {SignInForm}