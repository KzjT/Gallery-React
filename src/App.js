import React from 'react';
import NavBar from './layout/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import AboutUs from './views/AboutUs/AboutUs';
import Gallery from './views/Gallery/Gallery';
import Error404 from './views/Error404/Error404';
import Footer2 from './layout/Footer2/Footer2';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
//import Footer from './Components/Footer1/Footer';
import Contact from './views/Contact/Contact';
import { CartProvider } from './contexts/CartContext';
import Checkout from './views/Checkout/Checkout';

function App({onAdd, stock}) {

  return (
    <CartProvider >

      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout onAdd={onAdd} stock={stock} />}/>
          <Route path="*" element={<Error404 />} />
        </Routes>
        {/*<Footer />*/}
        <Footer2 />
      </BrowserRouter>
    </CartProvider>
  );
}


export default App;
