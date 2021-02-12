import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import Login from './Login'

import { useRecoilState } from 'recoil';
import { IsLoginState, IsAdminState, OpenAdminState } from '../Recoil';

import QRCode from '../images/Login/QR.png'

function Home(props){

    const [IsLogin, setIsLogin] = useRecoilState(IsLoginState);
    const [IsAdmin, setIsAdmin] = useRecoilState(IsAdminState);

    const [OpenAdmin, setOpenAdmin] = useRecoilState(OpenAdminState)
    useEffect(() => {
        
    }, [IsLogin])


    return (
        <Container>
            <img src={QRCode} alt='QRCode' />
        </Container>
    )
}

export default Home