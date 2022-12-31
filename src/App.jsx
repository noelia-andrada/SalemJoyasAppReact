import './App.css'
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import MainTitle from "./components/MainTitle/MainTitle.jsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import { createContext } from 'react';
import { CartContextProvider } from './context/CartContext/CartContext';
import CartContainer from './container/CartContainer/CartContainer';

export const AppContext = createContext()

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <MainTitle/>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a la tienda"}/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/details/:productId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartContainer/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App;