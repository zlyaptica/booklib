import classes from './Profile.module.css'
import avatarBig from './img/AvatarBig.png'
import {PostTemplate} from "../CreatePost/PostTemplate/PostTemplate";
import React from "react";

const Profile = (props) => {

    let postsElements = props.posts.map(post => <PostTemplate header={post.headerPost} text={post.textPost} />)

    return (
        <div className={classes.profile}>
            <div className={classes.wrapper}>
                <div className={classes.profileMain}>
                    <div className={classes.profileMainLeft}>
                        <p className={classes.profileName}>Максим Красавцев</p>
                        <img src={avatarBig} alt="avatar" className={classes.profileImg}/>
                        <p className={classes.profileInfo}>8 публикаций | 10 звезд</p>
                    </div>
                    <div className={classes.profileMainRight}>

                    </div>
                </div>
                <div className={classes.profilePosts}>
                    { postsElements }
                </div>
            </div>
        </div>
    )
}

export {Profile}
