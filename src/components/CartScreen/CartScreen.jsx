import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from '../context/CartContext';
import './CartScreen.css'

export const CartScreen = () => {

  const {carrito, precioTotal, removerItem, vaciarCarrito} = useContext(CartContext)


  return (
    <div className='container'>
      <h3>Resumen de compras</h3>
      <hr />
    {
      carrito.map((prod) =>(
        <>
        <div className='listado'>
          <p>Producto: {prod.description}</p>
          <p>${prod.price}</p>
          <p>cantidad: {prod.counter}</p>
        </div>
        <Button onClick={() => removerItem (prod.id)}>
          <BsFillTrashFill/>
        </Button>
        </>
      ))
    }
    <hr />
    <strong>Precio total: $ {precioTotal()}</strong>
    <hr />
    <Button className='btn btn-danger' onClick={vaciarCarrito}> Vaciar Carrito </Button>
    </div>
  )
}
