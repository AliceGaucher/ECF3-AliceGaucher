import React from 'react'
import { useEffect, useState } from 'react'
import ListeVehicule from '../composant/liste/ListeVehicule'
import Navbar from '../composant/Navbar'
import { Vehicule } from '../modele/modeleVehicule'
import { serviceVehicule } from '../service/ServiceVehicule'

function GestionVehicule() {
    return (
        <>
        <Navbar data={"Gestion Vehicule"}/>
        <ListeVehicule/>
        </>
    )
}

export default GestionVehicule