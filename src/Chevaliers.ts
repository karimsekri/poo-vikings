import { Arme } from "./Arme";
import { Metier } from "./Metier";

export class Chevaliers extends Metier {
     
   constructor() {
      super(40, 5, 1, 1, 5, 0.03);
      this.nomMetier = 'Chevaliers';
      
  }
    
}