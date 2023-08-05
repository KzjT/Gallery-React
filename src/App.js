import React from 'react';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer1/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Gallery from './Components/Gallery/Gallery';


function App() {

  return (

    

      <BrowserRouter>



        <NavBar />



        <Routes>

          <Route path="/" element={<Home/>} />

          <Route path="/AboutUs" element={<AboutUs/>} />

          <Route path="/Gallery" element={<Gallery/>} />

          <Route path="/" element={<ItemListContainer greeting="ola k ase" />} />

        </Routes>




        <Footer />


      </BrowserRouter>

  );
}

export default App;
