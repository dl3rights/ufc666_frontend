import React, { useState, useEffect } from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';

import NavButton from './NavButton'

import API from '../Function/useAPI'

import socket from '../Socket'

import HomeLogo from '../images/Menu/Logo_Small.png'
import Sport from '../images/Menu/Sport.png'
import SlotGame from '../images/Menu/SlotGame.png'
import Casino from '../images/Menu/Casino.png'
import Lotto from '../images/Menu/Lotto.png'
import Contact from '../images/Menu/Contact.png'
import HeaderBorder from '../images/Menu/Header_Border.png'

function NavBarComponent(props) {

    const [MenuList, setMenuList] = useState()

    function LoadMenuList() {
        API.GetAll('Menu')
            .then(respond => {
                console.log(respond);
                setMenuList(respond)
            })
    }

    useEffect(() => {
        socket.on('RefreshLoadMenuList', () => {
            LoadMenuList()
        })
        LoadMenuList()
    }, [])

    return (
        <div>
            <img src={HeaderBorder} className='header' />
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
                <Navbar.Brand ><NavButton src={HomeLogo} alt='Home' to='/Home' className='mx-auto' /></Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav ">
                    <Nav className="nav-menu ml-auto">
                        <NavButton src={Sport} alt='Sport' to='/Sport' />
                        <NavButton src={SlotGame} alt='SlotGame' to='/SlotGame' />
                        <NavButton src={Casino} alt='Casino' to='/Casino' />
                        <NavButton src={Lotto} alt='Lotto' to='/Lotto' />
                        <NavButton src={Contact} alt='Contact' to='/Contact' />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBarComponent

/*
{MenuList &&
                MenuList.map((v,i) => {
                    return (
                        <NavButton key={'NavBar-00'+i} src={v.image} alt={v.name} to={'/'+v.name}/>
                    )
                })
            }
*/