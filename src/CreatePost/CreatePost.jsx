import React from "react"
import './../normalize.css'
import classes from './CreatePost.module.css'

const CreatePost = (props) => {

    const newPostHead = React.createRef()
    const newPostElement = React.createRef()
    const addPost = () => {
        props.addPost()
    }

    const onHeaderChange = () => {
        let header = newPostHead.current.value
        props.updateNewPostHeader(header)
    }

    const onTextChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <section className={classes.createpost}>
            <div className={classes.wrapper}>
                <div className={classes.create__wrapper}>
                    <div className={classes.createpost__name}>
                        <h3 className={classes.createpost__headerName}>Заголовок</h3>
                        <input onChange={onHeaderChange} ref={newPostHead} value={props.newPostHeader} type="text" className={classes.createpost__inputText} required maxlength="80" />
                    </div>
                    <div className={classes.createpost__text}>
                        <h3 className={classes.createpost__headerName}>Контент</h3>
                        <textarea onChange={onTextChange} ref={newPostElement} value={props.newPostText} className={classes.createpost__textAreaText} required maxlength="1500" />
                    </div>
                    <button onClick={addPost} className={classes.createpost__button}>Опубликовать</button>
                </div>
            </div>
        </section>
    )
}

export {CreatePost}