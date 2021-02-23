import classes from "./SignUp.module.css";
import {Field} from "redux-form";
import {Input} from "../../components/FormsControls/FormsControls";
import {maxLength, minLength, required} from "../../utils/validators/validators";

const minLengthName6 = minLength(6)
const maxLengthName20 = maxLength(20)

const minLengthPassword8 = minLength(8)
const maxLengthPassword30 = maxLength(30)

const SignUpForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={classes.signUpInput} name="name" type="text" placeholder="Имя" component={Input} validate={[required, minLengthName6, maxLengthName20]} />
            <Field className={classes.signUpInput} name="email" type="text" placeholder="Почта" component={Input} validate={[required]} />
            <Field className={classes.signUpInput} name="password" type="password" placeholder="Пароль" component={Input} validate={[required, minLengthPassword8, maxLengthPassword30]} />
            <Field className={classes.signUpInput} name="repeatPassword"  type="password" placeholder="Повторите пароль" component={Input} validate={[required, minLengthPassword8, maxLengthPassword30]} />
        </form>
    )
}

export {SignUpForm}