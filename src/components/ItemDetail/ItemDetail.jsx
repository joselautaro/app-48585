import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({ id, description, price, image, category }) => {
  // Pasamos mediante props, cada propiedad de nuestro productos(objetos) y lo colocamos por props en nuestro return
  return (
    <div className='item'>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Title>{description}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea error totam quibusdam doloribus, alias aperiam exercitationem laboriosam illum similique eos, delectus vitae odit maxime, repellendus iusto quisquam placeat blanditiis. Cupiditate! </p>
          <Card.Title>Categoria: {category}</Card.Title>
          <ItemCount />
          <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  )
}