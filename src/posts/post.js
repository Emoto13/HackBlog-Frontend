import React from "react";
import "./styles-post.css"


function Post(props){
    return (
    <div className="divPost">
        <h1 className='titlePost'>{props.title}</h1>
        <div className='datePost'>Published on: {props.date}</div>
        <div className='authorNamePost'>Author: {props.author_name}</div>
        <img src={props.image} alt={props.title} className='imagePost'/>
        <div className='contentPost'>{props.content}</div>
    </div>
    )
}

export default Post