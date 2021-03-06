import classes from "./CreatePost.module.css";
import {Field} from "redux-form";
import {maxLength, minLength, required} from "../utils/validators/validators";
import {Input, Textarea} from "../components/FormsControls/FormsControls";

const minLengthHeaderPost8 = minLength(8)
const maxLengthHeaderPost256 = maxLength(256)

const minLengthTextPost5 = minLength(5)
const maxLengthTextPost10000 = maxLength(10000)

const CreatePostForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div className={classes.createpost__name}>
                <h3 className={classes.createpost__headerName}>Заголовок</h3>
                <Field className={classes.createpost__inputText}
                       name="newPostHeader" type="text"
                       required maxLength="80" component={Input}
                       validate={[required, minLengthHeaderPost8, maxLengthHeaderPost256]}
                />
            </div>
            <div className={classes.createpost__text}>
                <h3 className={classes.createpost__headerName}>Контент</h3>
                <Field className={classes.createpost__textAreaText}
                       name="newPostText"
                       required component={Textarea}
                       validate={[required, minLengthTextPost5, maxLengthTextPost10000]}
                />
            </div>
            <button className={classes.createpost__button}>Опубликовать</button>
        </form>
    )
}

export {CreatePostForm}