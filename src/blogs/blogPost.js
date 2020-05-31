import React from "react";


function BlogPost(props){
    return (
    <div>
        <h1>{props.title}</h1>
        <img src={props.image} alt={props.title}/>
        <p>{props.content}</p>
        <div>{props.date}</div>
        <div>{props.author_name}</div>
    </div>
    )
}

export default BlogPost