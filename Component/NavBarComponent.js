import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';

import NavButton from './NavButton'

import API from '../Function/useAPI'

import socket from '../Socket'

function NavBarComponent(props){

    const [MenuList, setMenuList] = useState()

    function LoadMenuList(){
        API.GetAll('Menu')
        .then(respond => {
            console.log(respond);
            setMenuList(respond)
        })
    }

    useEffect(() => {
        socket.on('RefreshLoadMenuList',() => {
            LoadMenuList()
        })
        LoadMenuList()
    }, [])

    return (
        <div className='navBarDivider shadow-sm'>
            <NavButton src='' alt='Home' to='/Home'/>
            {MenuList && 
                MenuList.map((v,i) => {
                    return (
                        <NavButton key={'NavBar-00'+i} src={v.image} alt={v.name} to={'/'+v.name}/>
                    )
                })
            }
        </div>
    )
}

export default NavBarComponent