import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
  } from 'reactstrap';

import './styles.css'

import Logo from './logo-corebiz-black.svg'

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const onSubmit = () => {
        // Realizar Busqueda
        console.log('Buscando '+search+'...')
        setSearch('');
    }
    
    return (
        <Navbar light expand={'md'} className={''}>
            <NavbarToggler onClick={toggle} />
            <NavbarBrand href="/">
                <img src={Logo} width={181} height={41} className="d-inline-block align-top nb-logo"/>
            </NavbarBrand>
            
            <Nav style={{marginLeft: 'auto'}}>
                <NavItem className={''}>
                    <form className="form-inline f-search">
                        <i className="fa fa-search i-inp-search" onClick={onSubmit}/>
                        <Input className="inp-search" placeholder="¿Qué estás buscando?" value={search} onChange={handleChange}/>
                    </form>
                </NavItem>

                <Collapse isOpen={isOpen} navbar>
                    <NavItem>
                        <NavLink><i className={'fa fa-user-o mr-2'} />Mi cuenta</NavLink>
                    </NavItem>
                </Collapse>
                
                <NavItem>
                    <NavLink><i className={'fa fa-shopping-cart mr-2'} /><div className={'prod-count'}>1</div></NavLink>
                </NavItem>
            </Nav>

        </Navbar>
    )
}

export default Navigation