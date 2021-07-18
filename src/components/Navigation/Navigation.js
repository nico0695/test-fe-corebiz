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
import store from '../../store';

import './styles.css'

import Logo from './logo-corebiz-black.svg'

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [search, setSearch] = useState('')
    const [cantProducts, setCantProducts] = useState(0)

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const onSubmit = () => {
        // Realizar Busqueda
        console.log('Buscando '+search+'...')
        setSearch('');
    }

    const unsubscribe = store.subscribe(() => {
        let products = store.getState().products;
        setCantProducts(products.length)
        unsubscribe();
    })

    return (
        <Navbar light expand={'md'} className={''}>
            <NavbarToggler onClick={toggle} />
            <NavbarBrand href="/">
                <img src={Logo} width={181} height={41} className="d-inline-block align-top nb-logo"/>
            </NavbarBrand>
            
            <Collapse isOpen={isOpen} navbar>
                <Nav style={{marginLeft: 'auto'}}>
                    <NavItem className={''}>
                        <form className="form-inline f-search">
                            <i className="fa fa-search i-inp-search" onClick={onSubmit}/>
                            <Input className="inp-search" placeholder="¿Qué estás buscando?" value={search} onChange={handleChange}/>
                        </form>
                    </NavItem>

                    <NavItem>
                        <NavLink><i className={'fa fa-user-o mr-2'} />Mi cuenta</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            <Nav>
                <NavItem>
                    <NavLink><i className={'fa fa-shopping-cart mr-2'} /><div className={'prod-count'}>{cantProducts}</div></NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Navigation