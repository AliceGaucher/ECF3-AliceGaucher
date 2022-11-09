import React from 'react'
import Navbar from '../composant/Navbar'
import '../asset/style/StyleGestionLocation.css'

function GestionLocation() {
  return (
    <>
      <Navbar data={"Gestion location"}/>
      <h1 className='premierTitre'>Gestion Locations</h1>
      <h2>Récapitulatif de la location</h2>
      

    </>
  )
}

export default GestionLocation