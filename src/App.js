import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {NavBar} from "./components/NavBar/NavBar";
import {ItemCount} from './components/ItemCount/ItemCount';
// import {Pika} from './components/Pika/Pika';

function App() {


  return (
      <>
      <div>
      <NavBar/>
      <ItemListContainer greating="Hola Mundo"/>
      <ItemCount/>
      <hr />
      {/* <Pika/> */}
      <hr />
      </div>
      </>
  );
}

export default App;
