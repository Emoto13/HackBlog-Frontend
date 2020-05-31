import React from 'react';
import './styles.css'

function Blog(entry){
    let props = entry.props
    const altText = props.title + "picture"
    const content = props.content.slice(0, 350)
    
    return (
    <div className="div">
        <h1 className="title">{props.title}</h1>
        <div className="date">Published on {props.date}</div>
        <p className="content">{content}...</p>
        <img className="image" src={props.image} alt={altText}/>
    </div> 
    )
}

export default Blog