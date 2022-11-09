import React, { useState } from 'react'
import '../../asset/style/StyleContenant.css'

export const AjoutVehicule = (props : any) => {

  const [vehicule, setVehicule] = useState({id: 0, immatriculation:"", marque:"", modele:"", etat: "", type: "", prix: "", disponibilite: ""})

   /**
  * Permet d'enregistrer les modifications des entrées de création d'un vehicule
  * @param event les modifications des entrées
  */
  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setVehicule((vehicule) => ({...vehicule, [event.target.name]: event.target.value}))
   }

   /**
    * Permet d'envoyer les datas des entrées pour les sauvegarder en BDD
    * @param event les modifications des entrées
    */
   const ajoutNouveauVehicule = (event : any) => {
     event.preventDefault();
     props.ajoutNouveauVehicule(vehicule);
     setVehicule({id: 0, immatriculation:"", marque:"", modele:"", etat: "", type: "", prix: "", disponibilite: ""})
   }

  return (
    <>
      <div>
        <h3>Ajouter un vehicule</h3>
        <div>
        <form onSubmit={(event) => ajoutNouveauVehicule(event)}  className='formVehicule'>
          <input type="text" name="immatriculation" placeholder="Immatriculation" onChange={(event) => handleChange(event)} className="divFormulaireVehicule2"/>
          <input type="text" name="marque" placeholder="Marque" onChange={(event) => handleChange(event)} className="divFormulaireVehicule3"/>
          <input type="text" name="modele" placeholder="Modele" onChange={(event) => handleChange(event)} className="divFormulaireVehicule4"/>
          <input type="text" name="etat" placeholder="Etat" onChange={(event) => handleChange(event)} className="divFormulaireVehicule5"/>
          <input type="text" name="type" placeholder="Type" onChange={(event) => handleChange(event)} className="divFormulaireVehicule6"/>
          <input type="text" name="prix" placeholder="Prix" onChange={(event) => handleChange(event)} className="divFormulaireVehicule7"/>
          <input type="checkbox" name="disponibilite" placeholder="Disponible" onChange={(event) => handleChange(event)} />
          <button type="submit">Valider</button>
        </form>
        </div>
      </div>
    </>
  )
}