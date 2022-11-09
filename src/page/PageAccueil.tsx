import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../composant/Navbar'
import '../asset/style/StylePageAccueil.css'
import VehiculeImg from '../asset/image/vehicule.jpg'
import ClientImg from '../asset/image/client.jpg'
import LocationImg from '../asset/image/location.png'
import GestionLocationImg from '../asset/image/gestionLocation.jpg'

function PageAccueil() {
    return (
      <>
        <Navbar data={"ACCUEIL"}/>
        <section className='gridBoxHome'>
          <section className='cadreBox'>
            <Link to="/GestionVehicule" className='boxLeft'>
              <div className='boxTitle'>
                <h2 className='titles'>Gestion des véhicules</h2>
                <img className='VehiculeImg' src={VehiculeImg} alt="" />

              </div>
            </Link>
          </section>
          <section className='cadreBox'>
            <Link to="/GestionClient" className='boxRight'>
              <div className='boxTitle'>
                <h2 className='titles'>Gestion des clients</h2>
                <img className='ClientImg' src={ClientImg} alt="" />
              </div>
            </Link>
          </section>
          <section className='cadreBox'>
            <Link to="/GestionLocation" className='boxRight'>
              <div className='boxTitle'>
                <h2 className='titles'>Gestion des locations</h2>
                <img className='GestionLocationImg' src={GestionLocationImg} alt="" />
              </div>
            </Link>
          </section>
          <section className='cadreBox'>
            <Link to="/LocationVehicule" className='boxLeft'>
              <div className='boxTitle'>
                <h2 className='titles'>Location des véhicules</h2>
                <img className='LocationImg' src={LocationImg} alt="" />
              </div>
            </Link>
          </section>
        </section>
      </>
    )
  }
  export default PageAccueil