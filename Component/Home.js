import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import Login from './Login'

import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { IsLoginState, IsAdminState, OpenAdminState } from '../Recoil';
import Banner01 from '../images/Banners/Banner01.png'
import Banner02 from '../images/Banners/Banner02.png'

function Home(props) {

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
                    <div>
                        <Container>

                            <Row>
                                <Col>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <img src={Banner01} alt={'Picture1'} className='mt-4' />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <img src={Banner02} alt={'Picture2'} className='mt-4' />
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
                                            <Login goto={routename} />
                                        )}
                                </Col>
                            </Row>
                        </Container>

                    </div>
                )}

        </div>
    )
}

export default Home