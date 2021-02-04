import React from 'react'
import classes from './PostTemplate.module.css'

const PostTemplate = (props) => {
    return (
        <div>
            Hello
            {props.header}
            {props.text}
        </div>
    )
}

export {PostTemplate}