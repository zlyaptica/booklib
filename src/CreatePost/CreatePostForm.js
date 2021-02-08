import classes from "./CreatePost.module.css";
import {Field} from "redux-form";

const CreatePostForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div className={classes.createpost__name}>
                <h3 className={classes.createpost__headerName}>Заголовок</h3>
                <Field className={classes.createpost__inputText}
                       name="newPostHeader" type="text"
                       required maxLength="80" component="input"/>
            </div>
            <div className={classes.createpost__text}>
                <h3 className={classes.createpost__headerName}>Контент</h3>
                <Field className={classes.createpost__textAreaText}
                       name="newPostText"
                       required maxLength="5000" component="textarea"/>
            </div>
            <button className={classes.createpost__button}>Опубликовать</button>
        </form>
    )
}

export {CreatePostForm}