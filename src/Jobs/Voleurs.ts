import { Arme } from "../Arme"
import { Metier } from "../Metier"

export class Voleur extends Metier {

  
  constructor() {
    super(5, 1, 1, 5, 45, 0);
    this.nomMetier = 'Voleur';
    this.capacitéSpecial = 'Attaque surprise'
    
}

    
}