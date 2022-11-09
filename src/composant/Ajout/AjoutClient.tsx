import React, { useState } from 'react'
import { Client } from '../../modele/modeleClient';

export const AjoutClient = (props : any) => {

  const [client, setClient] = useState<Client>({id: 0, nom: "", prenom: "", telephone: "", naissance: "", email: ""});

  /**
   * Permet d'enregistrer les modifications des entrées de création d'un client
   * @param event les modifications des entrées
   */
  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setClient((client) => ({...client, [event.target.name]: event.target.value}))
  }

  /**
   * Permet d'envoyer les donées des entrées pour les sauvegarder en BDD
   * @param event les modifications des entrées
   */
  const ajoutNouveauClient = (event : any) => {
    event.preventDefault();
    props.ajoutNouveauClient(client);
    setClient({id: 0, nom: "", prenom: "", telephone: "", naissance: "", email: ""})
  }

  return (
    <>
      <section className="boxForm">
        <div className='boxGLtitle'>
          <h3 className='GLtitle'>Ajouter un locataire</h3>
        </div>
        <form className="form" onSubmit={(event) => ajoutNouveauClient(event)}>
          <div className='form-centerblock'>
            <div className="form-body">
              <div className="form_block">
                <input className="form__input" value={client.nom} type="text" name="nom" placeholder="Entrer un nom" onChange={(event) => handleChange(event)}/>
              </div>
              <div className="form_block">
                <input className="form__input" value={client.prenom} type="text" name="prenom" placeholder="Entrer un Prenom" onChange={(event) => handleChange(event)}/>
              </div>
              <div className="form_block">
                <input className="form__input" value={client.telephone} type="text" name="telephone" placeholder="Entrer un n° de telephone" onChange={(event) => handleChange(event)}/>
              </div>
              <div className="form_block">
                <input className="form__input" value={client.naissance} type="text" name="naissance" placeholder="Entrer une date" onChange={(event) => handleChange(event)}/>
              </div>
              <div className="form_block">
                <input className="form__input" value={client.email} type="text" name="email" placeholder="Entrer un email" onChange={(event) => handleChange(event)}/>
              </div>
            </div>
            <button className='btn' type="submit">Ajouter</button>
          </div>
        </form>
      </section>
    </>
  )
}