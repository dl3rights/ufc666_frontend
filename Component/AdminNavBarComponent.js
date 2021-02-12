import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';

import NavButton from './NavButton'

import API from '../Function/useAPI'


function AdminNavBarComponent(props){

    const [MenuList, setMenuList] = useState()

    return (
        <div className='navBarDivider shadow-sm'>
            <NavButton src='' alt='Home Editor' to='/HomeEditor'/>
        </div>
    )
}

export default AdminNavBarComponent
//<NavButton src='' alt='Menu Editor' to='/MenuEditor'/>