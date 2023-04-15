import React from 'react';
import { Card, Button } from 'react-bootstrap'

export const ItemDetail = ({ id, description, price, image, category }) => {
  // Pasamos mediante props, cada propiedad de nuestro productos(objetos) y lo colocamos por props en nuestro return
  return (
    <div className='item'>
      <Card style={{ width: '19rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Title>{description}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aut tempora perspiciatis soluta sint nihil error deserunt at, nemo quas nobis. Ducimus, mollitia accusantium autem quia ullam tempore sint laboriosam?</p>
          <Card.Title>Categoria: {category}</Card.Title>
            <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  )
}