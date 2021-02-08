import React from 'react'
import classes from './PostTemplate.module.css'
import {NavLink} from "react-router-dom";
import star from './../../img/Star.svg'

const PostTemplate = (props) => {
    return (
        <div className={classes.postTemplate}>
            <div className={classes.wrapper}>
                <div className={classes.postTemplateWrapper}>
                    <div className={classes.postTemplateHeader}>
                        <div className={classes.postTemplateInfo}>
                            <h1 className={classes.postTemplateHead}>{props.header}</h1>
                            <div className={classes.postTemplateRate}>
                                <p>5</p>
                                <img src={star} alt="star"/>
                            </div>
                        </div>
                        <div className={classes.postTemplateMoreInfo}>
                            <NavLink className={classes.postTemplateCreator} to="/profile">creator</NavLink>
                            <div className={classes.postTemplateDate}>5 минут назад</div>
                        </div>
                    </div>
                    <p className={classes.postTemplateText}>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export {PostTemplate}