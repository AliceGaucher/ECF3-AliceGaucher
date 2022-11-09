import React, { useState } from 'react'
import { Client } from '../../modele/modeleClient'

type clientContainerProps = {
  client : Client
  supprimerClient : Function
  miseAJourClient : Function
}

const ContenantClient = (props : clientContainerProps) => {

    /**
     * Permet de définir si le mode modification des infos est actif ou non
     */
    const [updating, setUpdating] = useState(false);

    /**
     * Permet de mettre à jour les informations du client
     */
    const [client, setClient] = useState({id: 0, nom: "", prenom: "", telephone: "", naissance: "", email: ""})

    /**
     * Permet d'envoyer l'id du client à supprimer
     */
    const supprimerClient = () => {
      props.supprimerClient(props.client.id)
    }

    /**
     * Permet d'enregistrer les modifications des entrées et 
     * mettre à jour les informations du client
     * @param event les modifications des entrées
     */
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      setClient((client) => ({...client, [event.target.name]: event.target.value}))
    }

    /**
     * Permet d'afficher les entrées de mise à jour des infos 
     * du client et envoie ces infos pour les mettre à jour
     */
    const miseAJourClient = () => {
        setUpdating(true);
    }

    /**
     * Stop la mise à jour du client et et remet la mise à jour à 'faux'
     */
    const cancel = () => {
        setUpdating(false);
    }

    const validationMisAJourClient = (event : any) => {
        event.preventDefault();
        props.miseAJourClient(props.client.id, client)
        cancel()
    }

  return (
    <>
    <div className='divFormClient'>
      {(!updating) ? 
        <div>
          <span>{props.client.id}</span>
          <span>{props.client.nom}</span>
          <span>{props.client.prenom}</span>
          <span>{props.client.telephone}</span>
          <span>{props.client.naissance}</span>
          <span>{props.client.email}</span>
          <div>
            <button onClick={supprimerClient}>Supprimer</button>
            <button onClick={miseAJourClient}>Modifier</button>
          </div>
        </div> :
        <div>
          <span>{props.client.id}</span>
          <input placeholder={props.client.nom} name="nom" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.client.prenom} name="prenom" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.client.telephone} name="telephone" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.client.naissance} name="naissance" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.client.email} name="email" onChange={(event) => handleChange(event)}></input>
          <div>
            <button onClick={cancel}>Annuler</button>
            <button onClick={validationMisAJourClient}>Valider</button>
          </div>
        </div>}
    </div>
    </>
  )
}

export default ContenantClient