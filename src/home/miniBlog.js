import React from 'react'

function MiniBlog(props){
    return (
        <div onClick="">
            <h4>{props.title}</h4>
            <img src={props.image} alt={props.title} />
        </div>
    )
}


export default MiniBlog