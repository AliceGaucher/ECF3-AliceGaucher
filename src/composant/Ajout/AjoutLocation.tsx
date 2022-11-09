import React, { useState }  from "react";
import { Location } from '../../modele/modeleLocation';

export const AjoutLocation = (props : any) => {
    const [location, setLocation] = useState<Location>({id :0, debut: "", fin: ""});

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setLocation((location) => ({...location, [event.target.id]: event.target.value}))
    }

    const ajoutNouvelleLocation = (event :any) => {
        event.preventDefault();
        props.ajoutNouvelleLocation(location);
    }
}