import React, { useState, useEffect } from 'react'
import {pedirProductos} from '../../helpers/pedirProductos'
import {ImSpinner3} from 'react-icons'
import {ItemDetail} from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(false)

    useEffect(() =>{

        setLoading(true)
        pedirProductos()
            .then(res =>{
                setItem(res)
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    },[])


  return (
    <section>
        {
            loading
            ?<ImSpinner3/>
            :<ItemDetail/>
        }
    </section>
  )
}
