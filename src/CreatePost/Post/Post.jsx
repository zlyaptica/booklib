import React from 'react'
import {PostTemplate} from "../PostTemplate/PostTemplate";

const Post = (props) => {
    debugger
    let postsElements = props.posts.map(post => <PostTemplate header={props.header} text={props.text} />)

    return (
        <div>
            {postsElements}
        </div>
    )
}

export {Post}