import React, { useEffect, useState } from 'react';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';
import './itenlistcontainer.css';

export const ItemListContainer = ({greating}) => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)


  useEffect(() =>{
// iniciamos el efecto montaje, con un loading en "true"
    setLoading(true)
    pedirProductos()
      .then((res) =>{
        // Imprimos la respuesta y la guardamos en el hook
        setItems(res)
        // console.log(res)
      })
      // Consologueamos errores
      .catch((error) => console.log(error))
      .finally(() =>{setLoading(false)})
  }, [])




  return (
    <>
      {
        loading
        ?<h2>Cargando...</h2>
        :<ItemList productos={items}/>
      }
    </>
  )}
