import React from 'react'
import { Row, Col, Container, Label, Button } from 'reactstrap'
import './styles.css';

import LogoCorebiz from './logo-corebiz-white.svg'
import LogoVtex from './logo-vtex-white.svg'

function Footer() {
    return (
        <footer>
            <Container className={'cont-footer'}>
            <Row className="justify-content-between py-4">
                <Col xs={12} md={3} >
                    <Label className={'address-title'}>Ubicación</Label>
                    <hr className={'my-3'}/>
                    <p className={'pt-2'}>Avenida Andrômeda, 2000. Bloco 6 e 8 </p> <p> Alphavile SP </p> <p> brasil@corebiz.ag </p> <p> +55 11 3090 1039</p>
                </Col>
                <Col xs={12} md={3} className="d-flex align-items-center px-4">
                    <div>
                        <Button className={'w-100 px-4 py-2 mb-3'}><i className={'fa fa-envelope'} />CONTÁCTANOS</Button>
                        <Button className={'w-100 px-4 py-2'}><i class="fa fa-headphones" />HABLA CON UN CONSULTOR</Button>
                    </div>
                </Col>
                <Col xs={12} md={3} className="d-flex align-items-center px-4">
                    <div className={''}>
                        <Label className={'by-text pb-3'}>Desarrollado por</Label>
                        <img src={LogoCorebiz} width={82} height={19} className="d-inline-block align-top nb-logo"/>
                    </div>
                    <div className={''}>
                        <Label className={'by-text pt-3 pb-2'}>Powered by</Label>
                        <img src={LogoVtex} width={82} height={19} className="d-inline-block align-top nb-logo"/>
                    </div>
                </Col>
            </Row>
        </Container>
        </footer>
    )
}

export default Footer
