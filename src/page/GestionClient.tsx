import React from 'react'
import ListeClient  from '../composant/liste/ListeClient'
import Navbar from '../composant/Navbar'
import { useLocation } from 'react-router-dom'

function PageClient() {

  return (
    <>
      <Navbar data={"Gestion Client"}/>
      <ListeClient/>
    </> 
  )
  
}

export default PageClient