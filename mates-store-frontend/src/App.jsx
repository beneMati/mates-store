import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CartProvider } from "./context/CartContext";
import NavBar from './components/NavBar/NavBar';
import MenuBar from "./components/MenuBar/MenuBar";
import Contact from './components/NavBar/Contact';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartView from './components/CartView/CartView';
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <MenuBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/category/:id' element={<ItemListContainer />}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/cart' element={<CartView />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path="*" element={<ItemListContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
