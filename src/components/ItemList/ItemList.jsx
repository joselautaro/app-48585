import React from 'react'
import {Item} from '../Item/Item'

export const ItemList = ({productos=[]}) => {

  // Pasamos mediante props todo el array a este componente y mapeamos cada item de los objetos y los recorremos con el spread operador
  return (
    <div>

        <h3>Nuestros productos</h3>
        {productos.map((item) => <Item {...item} key={item.id}/>)}
    </div>
  )
}
