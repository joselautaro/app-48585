import React, { useEffect, useState } from 'react';
import {ImSpinner3} from 'react-icons/im'
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';
import './itenlistcontainer.css';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greating}) => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)

  const {categoryId} = useParams()


  useEffect(() =>{
// iniciamos el efecto montaje, con un loading en "true"
    setLoading(true)
    pedirProductos()
      .then((res) =>{
        // Imprimos la respuesta y la guardamos en el hook
        if(categoryId){
          setItems(res.filter(prod => prod.category === categoryId)  )
        }else{
          setItems(res)
        }
        // console.log(res)
      })
      // Consologueamos errores
      .catch((error) => console.log(error))
      .finally(() =>{setLoading(false)})
  }, [categoryId])




  return (
    <>
    {/* Nuestro componente arranca con el loading en "true" y cuando resulve, imprime en pantalla todo nuestro componente ItemList (donde mapeamos cada uno de los productos) */}
      {
        loading
        ?<div className='spinner'><ImSpinner3/></div>
        : <ItemList productos={items}/>
      }
    </>
  )}
