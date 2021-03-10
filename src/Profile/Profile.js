import classes from './Profile.module.css'
import avatarBig from './img/AvatarBig.png'
import {PostTemplate} from "../CreatePost/PostTemplate/PostTemplate";
import React from "react";
import {useSelector} from "react-redux";

const Profile = (props) => {
    const posts = useSelector(state => state.createPost.posts)
    const user = useSelector(state => state.auth)

    return (
        <div className={classes.profile}>
            <div className={classes.wrapper}>
                <div className={classes.profileMain}>
                    <div className={classes.profileMainLeft}>
                        <h3 className={classes.profileName}>{user.username}</h3>
                        <img src={avatarBig} alt="avatar" className={classes.profileImg}/>
                        <p className={classes.profileInfo}>{posts.length} постов | 10 звезд</p>
                    </div>
                    <div className={classes.profileMainRight}>

                    </div>
                </div>
                <div className={classes.profilePosts}>
                    {posts.map(post => <PostTemplate key={post.id} header={post.header}
                                                     text={post.text_post}
                                                     date={post.created_at}/>)}
                </div>
            </div>
        </div>
    )
}

export {Profile}
