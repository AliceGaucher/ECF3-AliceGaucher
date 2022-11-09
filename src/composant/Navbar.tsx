import React from 'react'
import '../asset/style/Stylenavbar.css'
import Logo from '../asset/image/localibLogo.png'
import { Link } from 'react-router-dom';

function Navbar(props : any) {

  console.log(props);
  

  return (
    <section className='barreNavigation'>
        <div className='navbar'>
            <Link to="/" className="boxTop">
            <img className='Logo' src={Logo} alt=""/>
            </Link>
            <section className='gridBoxHome2'>
          <section className='cadreBox'>
            <Link to="/GestionVehicule" className='boxLeft'>
              <div className='boxTitle'>
                <h2 className='titles'>Gestion des véhicules</h2>
              </div>
            </Link>
          </section>
          <section className='cadreBox'>
            <Link to="/GestionClient" className='boxRight'>
              <div className='boxTitle'>
                <h2 className='titles'>Gestion des clients</h2>
              </div>
            </Link>
          </section>
          <section className='cadreBox'>
            <Link to="/GestionLocation" className='boxRight'>
              <div className='boxTitle'>
                <h2 className='titles'>Gestion des locations</h2>
              </div>
            </Link>
          </section>
          <section className='cadreBox'>
            <Link to="/LocationVehicule" className='boxLeft'>
              <div className='boxTitle'>
                <h2 className='titles'>Location des véhicules</h2>
              </div>
            </Link>
          </section>
        </section>
          </div>
    </section>
  )
}

export default Navbar