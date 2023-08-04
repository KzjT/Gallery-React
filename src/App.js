import React from 'react';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';


function App() {

  return (

    <>
      <NavBar />

      <ItemListContainer  greeting="ola k ase"/>

    </>

  );
}

export default App;
