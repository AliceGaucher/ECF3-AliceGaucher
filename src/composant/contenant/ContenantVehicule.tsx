import React, { useState } from 'react'
import { Vehicule } from '../../modele/modeleVehicule'
import '../../asset/style/StyleContenant.css'

type vehiculeContainerProps = {
  vehicule : Vehicule
  supprimerVehicule : Function
  miseAJourVehicule : Function
}

const ContenantVehicule = (props : vehiculeContainerProps) => {

  /**
   * Permet de définir si le mode modification des infos est actif ou non
   */
  const [updating, setUpdating] = useState(false)

  /**
   * Permet de mettre à jour les informations du vehicule
   */
  const [vehicule, setVehicule] = useState({id: 0, immat:"", brand:"", model:"", state: "", type: "", priceDay: 0, available: true})

  /**
   * Permet d'envoyer l'id du vehicule à supprimer
   */
  const supprimerVehicule = () => {
      props.supprimerVehicule(props.vehicule.id)
  }

  /**
   * Permet d'enregistrer les modifications des inputs et 
   * mettre à jour les informations du vehicule
   * @param event les modifications des entrées
   */
  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.name, event.target.value);
      setVehicule((vehicule) => ({...vehicule, [event.target.name]: event.target.value}))
  }

  /**
   * Permet d'afficher les entrées de mise à jour des infos 
   * du vehicule et envoie ces infos pour les mettre à jour
   */
  const miseAJourVehicule = () => {
      setUpdating(true);
  }

  /**
   * Stop la mise à jour du vehicule et remet la mise à jour à 'faux'
   */
  const cancel = () => {
      setUpdating(false);
  }

  const validerMisAJourVehicule = (event : any) => {
      event.preventDefault();
      props.miseAJourVehicule(props.vehicule.id, vehicule)
      cancel()
  }

  return (
    <>
      <div className='divFormVehicule'>
      {(!updating) ? 
      <div>
        <div>
          <span>{props.vehicule.id}</span>
          <span>{props.vehicule.immatriculation}</span>
          <span>{props.vehicule.marque}</span>
          <span>{props.vehicule.modele}</span>
          <span>{props.vehicule.etat}</span>
          <span>{props.vehicule.type}</span>
          <span>{props.vehicule.prix}</span>
          <span>{props.vehicule.disponibilite}</span>
          <div>
            <button onClick={supprimerVehicule}>Supprimer</button>
            <button onClick={miseAJourVehicule}>Modifier</button>
          </div>
        </div>
        </div>
         :
        <div>
          <span>{props.vehicule.id}</span>
          <input placeholder={props.vehicule.immatriculation} name="immatriculation" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.vehicule.marque} name="marque" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.vehicule.modele} name="modele" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.vehicule.etat} name="etat" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.vehicule.type} name="type" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.vehicule.prix} name="prix" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.vehicule.disponibilite} name="disponibilite" onChange={(event) => handleChange(event)}></input>
          <div>
            <button onClick={cancel}>Annuler</button>
            <button onClick={validerMisAJourVehicule}>Valider</button>
          </div>
        </div>}
    </div>
    </>
  )
}

export default ContenantVehicule