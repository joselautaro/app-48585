import React from 'react'
import './navbar.css'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <div className="menu">
            <p>Ecommerce</p>
            <p>Enlace 1</p>
            <p>Enlace 2</p>
            <p>Enlace 3</p>
            <CartWidget/>
        </div>
    )
}
