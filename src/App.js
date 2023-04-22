import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import {CartScreen} from './components/CartScreen/CartScreen'
import { NavBar } from "./components/NavBar/NavBar";
import { ItemCount } from './components/ItemCount/ItemCount';
import { Pika } from './components/Pika/Pika';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'
import { CartContext } from './components/context/CartContext'
import { useState } from 'react';

function App() {

  const [carrito, setCarrito] = useState([])

  console.log(carrito)

  const addToCart = (item) =>{
    setCarrito([...carrito, item])
  }
  const calcularCantidad = () =>{
    return carrito.reduce((acc, prod) => acc + prod.counter, 0)
  }

  const precioTotal = () =>{
    return carrito.reduce((acc, prod) => acc + prod.price * prod.counter, 0)
  }

  const removerItem = (itemId) =>{
      const newCart = carrito.filter((prod) => prod.id !== itemId)
      setCarrito(newCart)
  }
  const vaciarCarrito = () =>{
    setCarrito([])
  }



  return (
    <CartContext.Provider value={{
      addToCart,
      calcularCantidad,
      precioTotal,
      removerItem,
      carrito,
      vaciarCarrito
    }}>
      <div className='App'>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route path='/counter' element={<ItemCount />} />
            <Route path='/cart' element={<CartScreen/>}/>
            <Route path='/pika' element={<Pika />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Router>
      </div>
    </CartContext.Provider>
  );
}

export default App;
