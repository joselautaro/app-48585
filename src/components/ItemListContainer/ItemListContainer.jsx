import React, { useEffect, useState } from 'react';
import {ImSpinner3} from 'react-icons/im'
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
    {/* Nuestro componente arranca con el loading en "true" y cuando resulve, imprime en pantalla todo nuestro componente ItemList (donde mapeamos cada uno de los productos) */}
      {
        loading
        ?<ImSpinner3/>
        :<ItemList productos={items}/>
      }
    </>
  )}
