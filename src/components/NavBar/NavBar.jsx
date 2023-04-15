import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <div className="menu">
            {/* <Link to='/'>Logo</Link> */}
            <Link to="/">Inicio</Link>
            <Link to='/productos/electrodomestico'>Electrodomesticos</Link>
            <Link to='/productos/ropa'>Ropa</Link>
            {/* <Link to="/counter">Contador</Link>
            <Link to="/pika">Pokemons</Link> */}
            <Link to='/cart'><CartWidget/></Link>
            
        </div>
    )
}
