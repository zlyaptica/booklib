import classes from "./SignIn.module.css";
import {Field} from "redux-form";
import {Input} from "../../components/FormsControls/FormsControls";
import {maxLength, minLength, required} from "../../utils/validators/validators";

const minLengthPassword8 = minLength(8)
const maxLengthPassword30 = maxLength(30)

const SignInForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={classes.input} name="email" type="text" placeholder="Почта" component={Input}
                   validate={[required]}/>
            <Field className={classes.input} name="password" type="password" placeholder="Пароль"
                   component={Input} validate={[required, minLengthPassword8, maxLengthPassword30]}/>
            <Field name="rememberMe" type="checkbox" component={Input}/> Запомнить меня <br></br>
            <button className={classes.signInButton}>Войти</button>
        </form>
    )
}

export {SignInForm}