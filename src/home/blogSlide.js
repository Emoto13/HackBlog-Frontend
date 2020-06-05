import React from 'react'
import './styles-home.css'
import { Link } from 'react-router-dom'

function BlogSlide(props){
    const linkTo = `/sport-post/${props.id}`
    return (
        <Link to={linkTo} >
            <div className="each-slide">
                <div className="miniBlogImg" style={{'backgroundImage': `url(${props.image})`}}>
                <span>{props.title}</span>
            </div>
        </div>
      </Link>
    )
}

export default BlogSlide