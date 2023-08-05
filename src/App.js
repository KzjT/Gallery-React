import React from 'react';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Gallery from './Components/Gallery/Gallery';
import Error404 from './Components/Error404/Error404';
import Footer2 from './Components/Footer2/Footer2';


function App() {

  return (

    

      <BrowserRouter>



        <NavBar />

        <ItemListContainer greeting="ola k ase soy un prop" />

        <Routes>

          <Route path="/" element={<Home/> } />

          <Route path="/" element={<ItemListContainer greeting="ola k ase" />} />

          <Route path='*' element = {<Error404/> } />

          <Route path="/AboutUs" element={<AboutUs/>} />

          <Route path="/Gallery" element={<Gallery/>} />


        </Routes>



        <Footer2/>
      


      </BrowserRouter>

  );
}

export default App;
