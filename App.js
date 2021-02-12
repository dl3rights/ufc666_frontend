import React, { useState,useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from 'react-helmet'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import NavBarComponent from './Component/NavBarComponent'
import AdminNavBarComponent from './Component/AdminNavBarComponent'
import HomeEditor from './Component/HomeEditor'
import MenuEditor from './Component/MenuEditor'
import Home from './Component/Home'
import Contact from './Component/Contact'
import ImageContent from './Component/ImageContent'

import API from './Function/useAPI'

import { useRecoilState } from 'recoil';
import { IsLoginState, IsAdminState, OpenAdminState } from './Recoil';


function App(props) {

    let location = window.location;
    let history = useHistory();

    const [IsLogin, setIsLogin] = useRecoilState(IsLoginState);
    const [IsAdmin, setIsAdmin] = useRecoilState(IsAdminState);

    const [OpenAdmin, setOpenAdmin] = useRecoilState(OpenAdminState)

    async function CheckAuth(){
        try {
          await API.CheckAuth()
          .then( response => {
            //console.log('response',response);
            if(response){
              //console.log(response.permission);
              if(response.permission >= 99){
                setIsLogin(true)
                setIsAdmin(true)
              }
              
            }else{
    
            }
          })
        } catch (error) {
          
        }
      }


    useEffect(() => {
    
        CheckAuth()

    }, [])

    function ToggleOpenAdmin(){
        setOpenAdmin(!OpenAdmin)
        console.log(OpenAdmin);
        if(!OpenAdmin){
            history.push('/HomeEditor')
        }else{
            history.push('/Home')
        }
    }

    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Test Title</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            {IsAdmin && <div className='admin-btn' onClick={()=> { ToggleOpenAdmin() }}>
                {OpenAdmin ? 'Change to User' : 'Change to Admin'}
            </div>}

            {OpenAdmin ? 
                (
                    <AdminNavBarComponent/>
                )
            :
                (
                    <NavBarComponent/>
                )}
            

            <Container fluid>
                <Row>
                    <Col>
                        <Switch>
                            <Route
                                key='AppRoute001'
                                exact
                                path='/'
                                render={() => {
                                    return (
                                        <Redirect to='/Home' />
                                    )
                                }}
                            />
                            <Route path={'/Contact'} component={Contact} />
                            <Route path={'/HomeEditor'} component={HomeEditor} />
                            <Route path={'/MenuEditor'} component={MenuEditor} />
                            <Route path={'/:routename'} component={Home} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App;