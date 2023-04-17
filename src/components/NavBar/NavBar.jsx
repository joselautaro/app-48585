import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <div className="menu">
            {/* <Link to='/'>Logo</Link> */}
            <Link className='link' to="/">Inicio</Link>
            <Link className='link' to='/productos/electrodomestico'>Electrodomesticos</Link>
            <Link className='link' to='/productos/ropa'>Ropa</Link>
            {/* <Link to="/counter">Contador</Link>
            <Link className='link' to="/pika">Pokemons</Link> */}
            <Link className='link' to='/cart'><CartWidget/></Link>
        </div>
    )
}
