import { Arme } from "../Arme";
import { Metier } from "../Metier";

export class Chevalier extends Metier {
     
   constructor() {
      super(40, 5, 1, 1, 5, 0.03);
      this.nomMetier = 'Chevaliers';
      this.capacitéSpecial = 'bouclier';
      
  }
    
}