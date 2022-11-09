import { AjoutVehicule } from '../Ajout/AjoutVehicule';
import React, { useEffect, useState } from 'react'
import { Vehicule } from '../../modele/modeleVehicule'
import { serviceVehicule } from '../../service/ServiceVehicule'
import ContenantVehicule from '../contenant/ContenantVehicule'

const ListeVehicule = () => {

  const [vehicule, setVehicule] = useState<Vehicule>({id: 0, immatriculation:"", marque:"", modele:"", etat: "", type: "", prix: "0", disponibilite: "true"})

  const [vehicules, setVehicules] = useState<Vehicule[]>([])

  /**
   * Permet de récupèrer la liste des vehicules à l'initialisation du composant
   */
  useEffect(() => {
    prendreToutVehicule()
  }, [])
  
  /**
   * Fonction qui permet de récuperer tous les vehicules depuis le vehiculeervice
   */
  const prendreToutVehicule = () => {
    serviceVehicule.trouverToutVehicule().then(data => setVehicules(data))
  }

  /**
   * Fonction qui permet de supprimer un vehicule par son id depuis le vehiculeService
   * @param id l'id du vehicule à supprimer
   */
  const supprimerVehicule = (id: number) => {
    serviceVehicule.supprimerVehicule(id).then(() => prendreToutVehicule())
  }

  /**
   * Fonction qui permet d'ajouter un vehicule depuis le vehiculeService
   * @param user les informations du vehicule à créer
   */
  const ajoutNouveauVehicule = (vehicule : Vehicule) => {
    serviceVehicule.creerVehicule(vehicule).then(() => prendreToutVehicule())
  }

  /**
   * Fonction qui permet de mettre à jour un vehicule
   * @param id  l'id d vehicule
   * @param user les infos du vehicule à mettre à jour
   */
  const miseAJourVehicule = (id: number, vehicule : Vehicule) => {
    serviceVehicule.miseAJourToutVehicule(id, vehicule).then(() => prendreToutVehicule())
  }

  return (
    <>

    <AjoutVehicule ajoutNouveauVehicule={ajoutNouveauVehicule}/>
    {(vehicule) && vehicules.map((vehicule : Vehicule, index : number) => {
      return <ContenantVehicule key={index} vehicule={vehicule} supprimerVehicule={supprimerVehicule} miseAJourVehicule={miseAJourVehicule}/>
    })}
    </>
  )
}

export default ListeVehicule