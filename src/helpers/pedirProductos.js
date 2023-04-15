import {stock} from '../data/stock'

export const pedirProductos = () =>{
  // Establecemos una nueva promesa para resuelve o rechace en un tiempo de dos segundos, nuevo stock
    return new Promise ((resolve, reject) =>{
      setTimeout(() =>{
        resolve(stock)
        reject("Rechazado")
      }, 500)
    })
}