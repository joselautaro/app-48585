import React from 'react';
import './item.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Item = ({ id, description, price, image, category }) => {
  // Pasamos mediante props, cada propiedad de nuestro productos(objetos) y lo colocamos por props en nuestro return
  return (
    <div className='item'>
      <Card style={{ width: '19rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Title>{description}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <Card.Title>Categoria: {category}</Card.Title>
          <Link to={`/detail/${id}`}>
            <Button variant="primary">Ver más detalles</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}
