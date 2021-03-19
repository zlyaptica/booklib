import React from 'react'
import classes from './PostTemplate.module.css'
import {NavLink} from 'react-router-dom'
import star from './../../img/Star.svg'
import unStar from './../../img/UnStar.svg'
import {like, unLike} from '../../redux/createPostReducer'
import {useDispatch} from 'react-redux'

const PostTemplate = (props) => {
    const date = new Date(props.date)
    const dispatch = useDispatch()

    return (
        <div className={classes.postTemplate}>
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <div className={classes.info}>
                        <h1 className={classes.head}>{props.header}</h1>
                        <div className={classes.rate}>
                            <p>5</p>
                            {props.liked ?
                                <button onClick={() => dispatch(unLike(props.id))}><img src={unStar} alt="star"/>
                                </button>
                                :
                                <button onClick={() => dispatch(like(props.id))}><img src={star} alt="star"/>
                                </button>
                            }
                        </div>
                    </div>
                    <div className={classes.moreInfo}>
                        <NavLink className={classes.creator} to="/profile">{props.author}</NavLink>
                        <div className={classes.date}>{date.toLocaleString('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: '2-digit',
                            weekday: 'long'
                        })}</div>
                    </div>
                </div>
                <p className={classes.text}>{props.text}</p>
            </div>
        </div>
    )
}

export {PostTemplate}