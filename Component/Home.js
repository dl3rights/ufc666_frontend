import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import Login from './Login'

import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { IsLoginState, IsAdminState, OpenAdminState } from '../Recoil';

function Home(props){

    let { routename } = useParams();
    
    const [IsLogin, setIsLogin] = useRecoilState(IsLoginState);
    const [IsAdmin, setIsAdmin] = useRecoilState(IsAdminState);

    const [OpenAdmin, setOpenAdmin] = useRecoilState(OpenAdminState)
    useEffect(() => {
        
    }, [IsLogin])


    return (
        <div>
            {OpenAdmin ? (
                <Container>
                    Admin Page.
                </Container>
            )
        :
            (
                <Container>
                    <Row>
                        <Col>
                            <Container>
                                <Row>
                                    <Col>
                                        <img src={''} alt={'Picture1'} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <img src={''} alt={'Picture2'} />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col>
                        {IsLogin ? (
                                <div>Already Login {routename}</div>
                            )
                        :
                            (
                                <Login goto={routename}/>
                            )}
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    )
}

export default Home