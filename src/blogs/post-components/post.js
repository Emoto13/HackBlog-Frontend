import React from "react";
import "./styles.css"


function Post(props){
    return (
    <div className="div_post">
        <h1 className='title_post'>{props.title}</h1>
        <div className='date_post'>Published on: {props.date}</div>
        <div className='author_name_post'>Author: {props.author_name}</div>
        <img src={props.image} alt={props.title} className='image_post'/>
        <p className='p_post'>{props.content}</p>
    </div>
    )
}

export default Post