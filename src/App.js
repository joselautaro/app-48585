import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer"
import { NavBar } from "./components/NavBar/NavBar";
import {ItemCount} from './components/ItemCount/ItemCount';
import {Pika} from './components/Pika/Pika';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'

function App() {


  return (

      <div className='App'>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/counter' element={<ItemCount/>}/>
            <Route path='/pika' element={<Pika/>}/>
            <Route path='*' element={<Navigate to='/'/>} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
