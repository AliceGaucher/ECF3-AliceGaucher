import React from 'react';
import { Client } from '../modele/modeleClient'

const URL : string = 'http://localhost:3000/clients'

class ServiceClient {

    /**
    * Permet de récupérer tous les clients en DB
    * @return liste de client
    */
    trouverToutClient = () => {
        return fetch(URL)
        .then(res => res.json())
    }

    /**
    * Permet de créer un client
    * @param client les informations du client à créer
    * @return un nouveau client
    */
    creerClient = (client : Client) => {
        return fetch(URL, {
            method: 'POST',
            body: JSON.stringify(client),
            headers: { 'content-Type': 'application/json' }
        })
        .then((res) => res.json())
    }
    /**
    * Permet de supprimr un client par son id
    * @param id l'id du client a supprimer
    * @return ok si le client a été supprimé
    */
    supprimerClient = (id : number) => {
        return fetch(`${URL}/${id}`, {
            method: "DELETE",
        }).then(res => res.json())
    }

    /**
    * Permet de mettre à jour les informations d'un client
    * @param id l'id du client à mettre à jour
    * @param client les informations du client à modifier
    * @return le client avec ses informations mises à jour
    */
    misAJourToutClient = (id : number, client : Client) => {
    return fetch(`${URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(client),
        headers: {"content-type": "application/json"}
    })
    .then(res => res.json())
   }
}

export const serviceClient = Object.freeze(new ServiceClient())