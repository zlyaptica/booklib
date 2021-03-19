import classes from './SignUp.module.css'
import {Field} from 'redux-form'
import {Input} from '../../components/FormsControls/FormsControls'
import {maxLength, minLength, required} from '../../utils/validators/validators'

const minLengthUsername6 = minLength(6)
const maxLengthUsername20 = maxLength(20)

const minLengthPassword8 = minLength(8)
const maxLengthPassword30 = maxLength(30)

const SignUpForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={classes.input} name="username" type="text" placeholder="Имя" component={Input}
                   validate={[required, minLengthUsername6, maxLengthUsername20]}/>
            <Field className={classes.input} name="email" type="text" placeholder="Почта" component={Input}
                   validate={[required]}/>
            <Field className={classes.input} name="password" type="password" placeholder="Пароль" component={Input}
                   validate={[required, minLengthPassword8, maxLengthPassword30]}/>
            <button className={classes.signUpButton}>Регистрация</button>
        </form>
    )
}

export {SignUpForm}