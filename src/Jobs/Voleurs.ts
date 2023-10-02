import { Metier } from "../Metier";
import { Personnage } from "../Personnage";

export class Voleur extends Personnage {

  
  constructor(nom : string, monMetier:Metier = new Metier('Voleur', 5, 1, 1, 5, 45, 0, 'vol de vie')) {
    super(nom, monMetier);
    
    
}

    
}