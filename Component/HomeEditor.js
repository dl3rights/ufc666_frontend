import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Form, Card } from 'react-bootstrap';
import Login from './Login'

import { useRecoilState } from 'recoil';
import { IsLoginState, IsAdminState, OpenAdminState } from '../Recoil';

function HomeEditor(props){

    const [IsLogin, setIsLogin] = useRecoilState(IsLoginState);
    const [IsAdmin, setIsAdmin] = useRecoilState(IsAdminState);

    const [OpenAdmin, setOpenAdmin] = useRecoilState(OpenAdminState)
    useEffect(() => {
        
    }, [IsLogin])


    return (
        <Container>
            <Card className="text-center">
                <Card.Header>Home Editor.</Card.Header>
                <Card.Body>
                    <Card.Title>Upload Banner 1</Card.Title>
                    <div className="mb-3">
                        <Form.File id="formcheck-api-custom" custom>
                        <Form.File.Input isValid />
                        <Form.File.Label data-browse="Browse Image">
                            .jpg .png .gif
                        </Form.File.Label>
                        </Form.File>
                    </div>
                    <Button variant="primary">Upload Banner 1</Button>
                    <hr />
                    <Card.Title>Upload Banner 2</Card.Title>
                    <div className="mb-3">
                        <Form.File id="formcheck-api-custom" custom>
                        <Form.File.Input isValid />
                        <Form.File.Label data-browse="Browse Image">
                            .jpg .png .gif
                        </Form.File.Label>
                        </Form.File>
                    </div>
                    <Button variant="primary">Upload Banner 2</Button>
                </Card.Body>
                <Card.Footer className="text-muted">^_^</Card.Footer>
            </Card>
        </Container>
    )
}

export default HomeEditor