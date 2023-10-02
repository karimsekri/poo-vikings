import { Metier } from "../Metier"
import { Personnage } from "../Personnage";

export class Magicien extends Personnage {

  
  constructor(nom:string, monMetier:Metier = new Metier('Magicien',5, 1, 1, 5, 45, 0,'Incantation')) {
    super(nom,monMetier);
    
    
}

    
}