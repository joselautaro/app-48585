import React from 'react'
import {Item} from '../Item/Item'

export const ItemList = ({productos=[]}) => {
  return (
    <div>

        <h3>Nuestros productos</h3>
        {productos.map((item) => <Item {...item} key={item.id}/>)}
    </div>
  )
}
