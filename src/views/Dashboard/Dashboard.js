import React, { useState } from 'react'
import { Row, Col, Button, Label, Input, Container } from 'reactstrap'

import CCarousel from '../../components/Carousel/Carousel.js';
import BestSeller from '../../components/BestSeller/BestSeller.js';
import Newsletter from '../../components/Newsletter/Newsletter.js';

import './styles.css';

function Dashboard() {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12} className="px-0">
                    <CCarousel />
                </Col>
            </Row>
            <Row className="my-5 mx-auto cont-bestSeller">
                <Col xs={12}>
                    <Label className={'bs-title'}>Más Vendidos</Label>
                    <hr className={'my-1'}/>
                </Col>
                <Col xs={12} className={'mt-3'}>
                    <BestSeller />
                </Col>
            </Row>
            <Row className={'py-3 cont-newsletter'}>
                <Col xs={12}>
                    <Label className={'nl-title text-center d-block'}>¡Únete a nuestras novedades y promociones!</Label>
                </Col>
                <Col xs={12} md={{size: 6, offset: 3}} lg={{size: 4, offset: 4}} className={'my-3'}>
                    <Newsletter />
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard
