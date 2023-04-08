import React from 'react';
import './item.css'
import {Card, Button} from 'react-bootstrap'

export const Item = ({id, description, price, image}) => {
  // Pasamos mediante props, cada propiedad de nuestro productos(objetos) y lo colocamos por props en nuestro return
  return (
  <div className='item'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
      <Card.Title>{id}</Card.Title>
        <Card.Title>{description}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Button variant="primary">Lo quiero</Button>
      </Card.Body>
    </Card>
  </div>
    
  )
}
