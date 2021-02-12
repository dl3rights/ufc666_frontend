import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Form, Card } from 'react-bootstrap';
import Login from './Login'

import { useRecoilState } from 'recoil';
import { IsLoginState, IsAdminState, OpenAdminState } from '../Recoil';
import API from '../Function/useAPI';

function HomeEditor(props){

    const [IsLogin, setIsLogin] = useRecoilState(IsLoginState);
    const [IsAdmin, setIsAdmin] = useRecoilState(IsAdminState);

    const [OpenAdmin, setOpenAdmin] = useRecoilState(OpenAdminState)

    const [Banner1, setBanner1] = useState()
    const [Banner2, setBanner2] = useState()

    useEffect(() => {
        
    }, [IsLogin])


    function UploadBanner1(file){
        if(file && file.length > 0){
            const data = new FormData()
            data.append('files', file[0])

            API.UploadBanner1(data)
            .then( response  => {
                if(response){
                    //console.log(response);
                    //document.getElementById('InputUploadLoad').value = ''
                }else{
                }
            })
        }
    }

    function UploadBanner2(file){
        if(file && file.length > 0){
            const data = new FormData()
            data.append('files', file[0])

            API.UploadBanner2(data)
            .then( response  => {
                if(response){
                    //console.log(response);
                    //document.getElementById('InputUploadLoad').value = ''
                }else{
                }
            })
        }
    }

    return (
        <Container>
            <Card className="text-center">
                <Card.Header>Home Editor.</Card.Header>
                <Card.Body>
                    <Card.Title>Upload Banner 1</Card.Title>
                    <div className="mb-3">
                        <Form.File id="formcheck-api-custom" custom>
                        <Form.File.Input isValid onChange={(e) => {setBanner1(e.target.files)}}/>
                        <Form.File.Label data-browse="Browse Image">
                            .jpg .png .gif
                        </Form.File.Label>
                        </Form.File>
                    </div>
                    <Button variant="primary" onClick={()=> {UploadBanner1(Banner1)}}>Upload Banner 1</Button>
                    <hr />
                    <Card.Title>Upload Banner 2</Card.Title>
                    <div className="mb-3">
                        <Form.File id="formcheck-api-custom" custom>
                        <Form.File.Input isValid onChange={(e) => {setBanner2(e.target.files)}}/>
                        <Form.File.Label data-browse="Browse Image">
                            .jpg .png .gif
                        </Form.File.Label>
                        </Form.File>
                    </div>
                    <Button variant="primary" onClick={()=> {UploadBanner2(Banner2)}}>Upload Banner 2</Button>
                </Card.Body>
                <Card.Footer className="text-muted">^_^</Card.Footer>
            </Card>
        </Container>
    )
}

export default HomeEditor