import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageAccueil from './page/PageAccueil';
import GestionVehicule from './page/GestionVehicule';
import GestionLocation from './page/GestionLocation';
import LocationVehicule from './page/LocationVehicule';
import GestionClient from './page/GestionClient';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageAccueil/>} />
        <Route path='/gestionvehicule' element={<GestionVehicule/>} />
        <Route path='/gestionlocation' element={<GestionLocation/>} />
        <Route path='/locationvehicule' element={<LocationVehicule/>} />
        <Route path='/gestionclient' element={<GestionClient/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
