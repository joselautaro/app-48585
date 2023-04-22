import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import {CartContext} from '../context/CartContext'

export const ItemDetail = ({ id, description, price, image, category, stock }) => {
  // Pasamos mediante props, cada propiedad de nuestro productos(objetos) y lo colocamos por props en nuestro return


  const navigate = useNavigate()

  const volverHaciaAtras = () =>{
    navigate(-1)
  }

  // ______________________

  // Empezamos a consumir las funcionalidades del contexto

  const {addToCart} = useContext(CartContext)

  // __________________________________

  const [counter, setCounter] = useState(0)

  const sumarAlCarrito = () =>{
        const newItem = {
          id,
          description,
          image,
          price,
          category,
          counter
        }
        console.log(newItem)
        addToCart(newItem)
  }



  return (
    <div className='item'>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Title>{description}</Card.Title>
          <Card.Title>${price}</Card.Title>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea error totam quibusdam doloribus, alias aperiam exercitationem laboriosam illum similique eos, delectus vitae odit maxime, repellendus iusto quisquam placeat blanditiis. Cupiditate! </p>
          <Card.Title>Categoria: {category}</Card.Title>
          <ItemCount max={stock} modify={setCounter} cantidad={counter}/>
          <Button onClick={sumarAlCarrito}>Agregar al carrito</Button>
        </Card.Body>
        <Button onClick={volverHaciaAtras} className='btn btn-sucess'>Volver atras</Button>
      </Card>
    </div>
  )
}