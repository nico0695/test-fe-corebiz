import React from 'react'
import './styles.css'

import Logo from './logo-corebiz-black.svg'

function Navigation() {
    return (
        <nav className="navbar navbar-light">
            <a className="navbar-brand">
                <img src={Logo} width={181} height={41} className="d-inline-block align-top nb-logo"/>
            </a>
            <form className="w-50 form-inline">
                <div className="">
                    <input className="inp-search" type="search" placeholder="¿Qué estás buscando?"/>
                    {/* <div className="input-group-append"> */}
                        <button className="btn btn-outline-secondary" type="button"><i className={'fa fa-envelope-open'} /></button>
                    {/* </div> */}
                </div>
            </form>
            
            <button>asd</button>
        </nav>
    )
}

export default Navigation

