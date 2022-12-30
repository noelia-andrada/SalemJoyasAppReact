import './App.css'
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import TituloPrincipal from "./components/Titulo/Titulo.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import { createContext } from 'react';
import { CartContextProvider } from './context/CartContext/CartContext';
import CartContainer from './container/CartContainer/CartContainer';

export const AppContext = createContext()

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <TituloPrincipal/>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a la tienda"}/>}/>
            <Route path="/categoria/:id" element={<ItemListContainer/>}/>
            <Route path="/detalles/:productId" element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
          </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App;