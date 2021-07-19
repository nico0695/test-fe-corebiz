import React, { useState, useEffect } from 'react'
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input, 
    Popover,  
    PopoverBody,
    Button,
  } from 'reactstrap';
import store from '../../store';
import { cleanProduct, restoreProduct } from "../../actions";

import './styles.css'

import Logo from './logo-corebiz-black.svg'

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [isOpenPopover, setIsOpenPopover] = useState(false
        )
    const togglePopover = () => setIsOpenPopover(!isOpenPopover)

    const [search, setSearch] = useState('')
    const [cantProducts, setCantProducts] = useState(0)

    useEffect(() => {
        // Al renderizar el componente si hay productos en el localStorage los cargo en el store
        if(localStorage.getItem('products')!=null && localStorage.getItem('products')!="")
            store.dispatch(restoreProduct(JSON.parse(localStorage.getItem('products'))));
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const onSubmit = () => {
        // Realizar Busqueda
        console.log('Buscando '+search+'...')
        setSearch('');
    }

    // Cuando se modifique la store actualiza el estado de productos.
    const unsubscribe = store.subscribe(() => {
        let products = store.getState().products;
        setCantProducts(products.length)
        // Guardo el store de products en localStorage
        localStorage.setItem('products', (products.length==0) ? "" : JSON.stringify(products))
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
                    <NavItem>
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
                    <NavLink onClick={() => togglePopover()}><i className={'fa fa-shopping-cart mr-2'} id={'pop-prod'}/><div className={'prod-count'}>{cantProducts}</div></NavLink>
                    <Popover
                        trigger="legacy"
                        placement={'bottom'}
                        isOpen={isOpenPopover}
                        target={'pop-prod'}
                        toggle={togglePopover}
                    >
                        <PopoverBody>
                            <div className="d-block text-center">
                                {`Hay ${cantProducts} articulos en el carrito.`}
                            </div>
                            <div>
                                <Button color={'danger'} block onClick={() => store.dispatch(cleanProduct())} className={'mt-2 px-2 w-100'}>Eliminar</Button>
                            </div>
                        </PopoverBody>
                    </Popover>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Navigation