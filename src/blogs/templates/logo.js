import React from 'react'
import textLogo from './images/textLogo.png'
import './styles.css'

function Logo(){
    return (
        <img className="logo" src={textLogo} alt="Text logo" />
    )
}

export default Logo