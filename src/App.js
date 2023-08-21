import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Gallery from './Components/Gallery/Gallery';
import Error404 from './Components/Error404/Error404';
import Footer2 from './Components/Footer2/Footer2';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Gallery" element={<Gallery />} />
        {/* Corrige la ruta para ItemDetailContainer con los parámetros */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} /> {/* Corrige el formato del comentario */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer2 />
    </BrowserRouter>
  );
}


export default App;
