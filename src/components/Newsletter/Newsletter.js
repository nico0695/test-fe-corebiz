import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Label, Input
} from "reactstrap";
import axios from "axios";

import "./styles.css";


const Newsletter = () => {
    const [data, setData] = useState({
        email: "",
        name: "",
    })

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('onSubmit data= ',data)
        let url = "https://corebiz-test.herokuapp.com/api/v1/newsletter"
        axios.post(url, data)
        .then(response => {
            console.log('response= ',response)
        })
        .catch(e => {
            // console.log('error= ',e)
        })
    }

    return (
        <form className="row" onSubmit={onSubmit}>
            <Col xs={12} md={5} className="px-1">
                <Input 
                    type="text" 
                    placeholder="Ingresa tu nombre" 
                    // className="form-control" 
                    onChange={handleInputChange} 
                    name="name"
                    required={true} />
            </Col>
            <Col xs={12} md={5} className="px-1">
                <Input 
                    type="email" 
                    placeholder="Ingresa tu mail" 
                    // className="form-control" 
                    onChange={handleInputChange} 
                    name="email"
                    required={true} />
            </Col>
            <Col xs={12} md={2}>
                <Button type="submit" className="btn btn-primary">Suscribirme</Button>
            </Col>
        </form>
    );
};

export default Newsletter;
