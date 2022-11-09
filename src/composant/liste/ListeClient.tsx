import React from 'react'
import { useEffect, useState } from "react"
import { AjoutClient } from '../Ajout/AjoutClient'
import { Client } from '../../modele/modeleClient'
import { serviceClient } from '../../service/ServiceClient'
import ContenantClient from '../contenant/ContenantClient'


function ListeClient() {
    const [client, setClient] = useState<Client>({id: 0, nom: "", prenom: "", telephone: "", naissance: "", email: ""})

    const [clients, setClients] = useState<Client[]>([])
  
    /**
     * Permet de récupèrer la liste de clients à l'initialisation du contenant
     */
    useEffect(() => {
      prendreToutClient()
    }, [])
  
    /**
     * Fonction qui permet de récuperer tous les clients depuis le serviceclient
     */
    const prendreToutClient = () => {
    serviceClient.trouverToutClient().then(data => setClients(data))
    }
  
    /**
     * Fonction qui permet de supprimer un client par son id depuis le serviceclient
     * @param id l'id du client à supprimer
     */
    const supprimerClient = (id : number) => {
        serviceClient.supprimerClient(id).then(() => prendreToutClient())
    }
  
    /**
     * Fonction qui permet d'ajouter un client depuis le serviceclient
     * @param user les informations du client à créer
     */
    const ajoutNouveauClient = (client : Client) => {
        serviceClient.creerClient(client).then(() => prendreToutClient())
    }
  
    /**
     * Fonction qui permet de mettre à jour un client
     * @param id  l'id d client
     * @param user les infos du client à mettre à jour
     */
    const miseAJourClient = (id : number, client : Client) => {
        serviceClient.misAJourToutClient(id, client).then(() => prendreToutClient())
    }
  
    return (
      <>
        <section className='clientPage'>
          <div className='boxAdd'>
            <AjoutClient ajoutNouveauClient={ajoutNouveauClient}/>
          </div>
          <div className='boxList'>
            {(clients) && clients.map((client : Client, index : number) => {
              return <ContenantClient key={index} client={client} supprimerClient={supprimerClient} miseAJourClient={miseAJourClient}/>})}
          </div>
        </section>
      </> 
    )
}

export default ListeClient