import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Form, Table } from 'react-bootstrap';
import Login from './Login'

import { useRecoilState } from 'recoil';
import { IsLoginState, IsAdminState, OpenAdminState } from '../Recoil';

import API from '../Function/useAPI'

import socket from '../Socket'

function MenuEditor(props){

    const [IsLogin, setIsLogin] = useRecoilState(IsLoginState);
    const [IsAdmin, setIsAdmin] = useRecoilState(IsAdminState);

    const [OpenAdmin, setOpenAdmin] = useRecoilState(OpenAdminState)

    const [MenuList, setMenuList] = useState([])

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

    function MoveUp(Id){
        API.MoveLeft(Id)
        .then(response => {
            if(response){
                console.log('<')
                socket.emit('LoadMenuList','MoveLeft')
            }
        })
    }

    function MoveDown(Id){
        API.MoveRight(Id)
        .then(response => {
            if(response){
                console.log('>')
                socket.emit('LoadMenuList','MoveRight')
            }
        })
    }


    
    return (
        <Container fluid>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {MenuList && MenuList.map((v,i) => {
                        return (
                            <tr key={'MenuList-00'+i}>
                                <td>{i+1}</td>
                                <td>{v.name}</td>
                                <td>
                                    {v.index-1 >= 1 && <Button onClick={()=> {MoveUp(v.menu_id)}}>Up</Button>}
                                    {v.index+1 <= MenuList.length && <Button onClick={()=> {MoveDown(v.menu_id)}}>Down</Button>}
                                    <Button>Edit</Button>
                                    <Button>Remove</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default MenuEditor