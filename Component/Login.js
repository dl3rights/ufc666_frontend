import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

import API from '../Function/useAPI'


import { useRecoilState } from 'recoil';
import { IsLoginState, IsAdminState } from '../Recoil';

function Login(props){

    const [IsLogin, setIsLogin] = useRecoilState(IsLoginState);
    const [IsAdmin, setIsAdmin] = useRecoilState(IsAdminState);

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    useEffect(() => {
        console.log(Username);
    }, [Username])

    function SubmitLogin(){

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
        <Form>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' placeholder='Enter Username' value={Username} onChange={(e) => {setUsername(e.target.value)}} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='text' placeholder='Enter Password' value={Password} onChange={(e) => {setPassword(e.target.value)}} />
            </Form.Group>
            <Button variant="primary" onClick={()=>{SubmitLogin()}}>
                Login to {props.goto}
            </Button>
        </Form>
    )
}

export default Login