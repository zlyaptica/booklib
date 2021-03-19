import classes from './Profile.module.css'
import avatarBig from './img/AvatarBig.png'
import {PostTemplate} from '../CreatePost/PostTemplate/PostTemplate'
import React from 'react'
import {useSelector} from 'react-redux'

const Profile = () => {
    const posts = useSelector(state => state.createPost.posts)
    const user = useSelector(state => state.auth)
    const userPosts = posts.filter((post) => post.author.id === user.id)

    return (
        <div className={classes.profile}>
            <div className={classes.wrapper}>
                <div className={classes.main}>
                    <h3 className={classes.name}>{user.username}</h3>
                    <img src={avatarBig} alt="user photo" className={classes.photo}/>
                    <p className={classes.info}>{posts.length} постов | 10 звезд</p>
                </div>
                <div className={classes.posts}>
                    {userPosts.map(post => <PostTemplate
                        key={post.id}
                        header={post.header}
                        text={post.text}
                        date={post.created_at}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export {Profile}
