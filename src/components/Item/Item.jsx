import React from 'react'

export const Item = ({id, description, price, image}) => {
  // Pasamos mediante props, cada propiedad de nuestro productos(objetos) y lo colocamos por props en nuestro return
  return (
    <div>
        <h3>Id:{id}</h3>
        <p>Descripcion:{description}</p>
        <p>Precio ${price} </p>
        <img src={image} alt={image} />
    </div>
  )
}
