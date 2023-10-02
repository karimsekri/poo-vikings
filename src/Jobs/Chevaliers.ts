
import { Metier } from "../Metier";
import { Personnage } from "../Personnage";

export class Chevalier extends Personnage {
     
   constructor(nom:string, monMetier:Metier = new Metier('Chevaliers',40, 5, 1, 1, 5, 0.03,'bouclier')) {
      super(nom,monMetier);
     
      
  }
    
}