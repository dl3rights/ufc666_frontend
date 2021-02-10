import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import API from '../Function/useAPI'


function ImageContent(props){

    let { routename } = useParams();

    const style = {
        weight:'100%',
        height:'100%'
    }

    const [ImageInfo, setImageInfo] = useState()

    useEffect(() => {
        setImageInfo()
        API.GetMenuByName(routename)
        .then(response => {
            console.log(routename,response);
            setImageInfo({
                src:response.image,
                alt:response.name
            })
        })
    }, [routename])

    return (
        <Container fluid>
            {ImageInfo && <img style={style} src={ImageInfo.src} alt={ImageInfo.alt} />}
        </Container>
    )
}

export default ImageContent