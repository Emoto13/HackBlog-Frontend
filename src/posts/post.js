import React from "react";
import "./styles-post.css"
import { Link } from "react-router-dom";


function Post(props){
    return (
    <div className="divPost">
        <h1 className='titlePost'>{props.title}</h1>
        <div className='datePost'>Published on: {props.date}</div>
        <div className='authorNamePost'>Author: {props.author_name}</div>
        <img src={props.image} alt={props.title} className='imagePost'/>
        <div className='contentPost'>{props.content}</div>
        <Link to="/create-post"><button className="buttonPost" type="button">Create your own page</button></Link>
    </div>
    )
}

export default Post