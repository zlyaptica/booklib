import classes from "./SignIn.module.css";
import {Field} from "redux-form";
import {Input} from "../../components/FormsControls/FormsControls";
import {maxLength, minLength, required} from "../../utils/validators/validators";

const minLengthPassword4 = minLength(4)
const maxLengthPassword20 = maxLength(20)

const minLengthPassword8 = minLength(8)
const maxLengthPassword30 = maxLength(30)

const SignInForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={classes.signInInput} name="username" type="text" placeholder="Имя пользователя"
                   component={Input} validate={[required, minLengthPassword4, maxLengthPassword20]}/>
            <Field className={classes.signInInput} name="email" type="text" placeholder="Почта" component={Input} validate={[required]}/>
            <Field className={classes.signInInput} name="password" type="password" placeholder="Пароль"
                   component={Input} validate={[required, minLengthPassword8, maxLengthPassword30]}/>
            <Field name="rememberMe" type="checkbox" component={Input} />
            <button className={classes.signInButton}>Войти</button>
        </form>
    )
}

export {SignInForm}