import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavButton(props) {

    const { src, alt, to } = props

    const style = {
        cursor:'pointer'
    }
    
    return (
        <Link to={to}><img style={style} src={src} alt={alt} /></Link>
    )
}

export default NavButton;