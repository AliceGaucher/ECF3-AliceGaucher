import React from 'react';
import { Vehicule } from '../modele/modeleVehicule';

const URL : string = 'http://localhost:3000/vehicules'

class ServiceVehicule {

    /**
    * Permet de récupérer tous les vehicules en DB
    * @return liste de vehicule
    */
    trouverToutVehicule = () => {
    return fetch(URL)
    .then(res => res.json())
    }

    /**
    * Permet de créer un vehicule
    * @param vehicule les informations du vehicule à créer
    * @return un nouveau vehicule
    */
   creerVehicule = (vehicule : Vehicule) => {
   return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(vehicule),
    headers: { 'Content-Type': 'application/json'}
   })
   .then((re) => re.json())
    }
    /**
    * Permet de supprimr un vehicule par son id
    * @param id l'id du vehicule a supprimer
    * @return ok si le vehicule a été supprimé
    */
   supprimerVehicule = (id : number) => {
    return fetch(`${URL}/${id}`, {
        method: "DELETE",
    }).then(res => res.json())
   }

    /**
    * Permet de mettre à jour les informations d'un vehicule
    * @param id l'id du vehicule à mettre à vehicule
    * @param vehicule les informations du client à modifier
    * @return le vehicule avec ses informations mises à jour
    */
     miseAJourToutVehicule = (id : number, vehicule : Vehicule) => {
        return fetch(`${URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(vehicule),
            headers: {"content-type": "application/json"}
        })
        .then(res => res.json())
       }
}

export const serviceVehicule = Object.freeze(new ServiceVehicule())