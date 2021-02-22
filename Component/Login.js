import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

import API from '../Function/useAPI'


import { useRecoilState } from 'recoil';
import { IsLoginState, IsAdminState } from '../Recoil';

import Badge from '../images/Login/Badge.png'
import Login_Bottons from '../images/Login/Login_Bottons.png'
import Password_Botton from '../images/Login/Password_Botton.png'
import Username_Botton from '../images/Login/Username_Botton.png'

function Login(props) {

    const [IsLogin, setIsLogin] = useRecoilState(IsLoginState);
    const [IsAdmin, setIsAdmin] = useRecoilState(IsAdminState);

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    useEffect(() => {
        console.log(Username);
    }, [Username])

    function SubmitLogin() {

        setIsAdmin(true)
        setIsLogin(true)
        /*API.Authentication(Username,Password)
        .then(response => {
            console.log(response);
            setIsAdmin(true)
            setIsLogin(true)
        })*/
    }

    return (
        <Form className='form-bg mx-auto'>
            <h2>Login</h2>
            <Form.Group className="mx-auto">
                <div className="username-input">
                    <Form.Control type='text' placeholder='Enter Username' value={Username} onChange={(e) => { setUsername(e.target.value) }} />
                </div>
            </Form.Group>
            <Form.Group >
                <div className="password-input">
                    <Form.Control type='text' placeholder='Enter Password' value={Password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
            </Form.Group>
            <div onClick={() => { SubmitLogin() }} className="login-btn mx-auto"></div>
        </Form>
    )
}

export default Login