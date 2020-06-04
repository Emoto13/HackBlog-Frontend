import React from 'react';
import './styles-blog.css'

function Blog(props){
    const content = props.content.slice(0, 350)
    const link = `http://127.0.0.1:3000/${props.type}/${props.id}`

    return (
    <div className="div">
        <a href={link} className="title"><h1 className="title">{props.title}</h1></a>
        <div className="date">Published on {props.date}</div>
        <p className="content">{content}...</p>
        <a href={link}><img className="image" src={props.image} alt={props.title}/></a>
    </div> 
    )
}

export default Blog