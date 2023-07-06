import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './routes/MainRouter';
import { CartContext } from './context/CartContext';
import { useState } from 'react';

function App() {

  const [carrito, setCarrito] = useState([]);

  const cantidadCarrito = () => {

    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

  }


  return (
    <div className="App">
      <CartContext.Provider value={{ carrito, setCarrito, cantidadCarrito }}>
        <MainRouter />
      </CartContext.Provider>
    </div>
  );
}

export default App;


