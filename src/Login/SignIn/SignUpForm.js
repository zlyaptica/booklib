import classes from "../SignUp/SignUp.module.css";
import {Field} from "redux-form";

const SignUpForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={classes.signUpInput} name="name" type="text" placeholder="Имя" component="input" />
            <Field className={classes.signUpInput} name="email" type="text" placeholder="Почта" component="input" />
            <Field className={classes.signUpInput} name="password" type="password" placeholder="Пароль" component="input" />
            <Field className={classes.signUpInput} name="repeatPassword"  type="password" placeholder="Повторите пароль" component="input" />
        </form>
    )
}

export {SignUpForm}