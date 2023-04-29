import React, { useEffect, useState } from 'react';
import {ImSpinner3} from 'react-icons/im'
// import { pedirProductos } from '../../helpers/pedirProductos';

// Importamos el funcion getFirestore para consumir nuestra base de datos
import {getFirestore} from '../../firebase/config'
import { ItemList } from '../ItemList/ItemList';
import './itenlistcontainer.css';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)
  
  // iniciamos el efecto montaje, con un loading en "true"
      // setLoading(true)
      // pedirProductos()
        // .then((res) =>{
        //   // Imprimos la respuesta y la guardamos en el hook
        //   if(categoryId){
        //     setItems(res.filter(prod => prod.category === categoryId)  )
        //   }else{
        //     setItems(res)
        //   }
        //   // console.log(res)
        // })
        // // Consologueamos errores
        // .catch((error) => console.log(error))
        // .finally(() =>{setLoading(false)})
  const {categoryId} = useParams()


  useEffect(() =>{
    setLoading(true)

    const db =getFirestore();

    const productos = db.collection('productos')

    if(categoryId){
      const filtrado = productos.where("category", "==", categoryId)
      filtrado.get()
          .then((res) =>{
            const newItem = res.docs.map((doc) =>{
              return{id: doc.id, ...doc.data()}
            })
            setItems(newItem)
          })
          .catch((err) => console.log(err))
          .finally(() =>{
            setLoading(false)
          })

    }else{
      productos.get()
      .then((res) =>{
        const newItem = res.docs.map((doc) =>{
          return {id: doc.id, ...doc.data()}
        })
        console.table(newItem)
        setItems(newItem)
      })
      .catch((error) => console.log(error))
      .finally(() =>{
        setLoading(false)
      })
    }
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
