import React from 'react'
import { Link } from  'react-router-dom'
import './styles.css'


function NavigationBar(){ 
    return (
    <div className="navbar">
        <Link to="">Home</Link>
        <Link to="/politics">Politics</Link>
        <Link to="/sport">Sport</Link>
        <Link to="/tech">Tech</Link>
        <Link to="/opinion">Opinion</Link>
        <Link to="/other">Other</Link>
    </div>
    )
}

export default NavigationBar