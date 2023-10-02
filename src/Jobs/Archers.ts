
import { Metier } from "../Metier"
import { Personnage } from "../Personnage";

export class Archer extends Personnage{
    
    constructor(nom:string,monMetier:Metier = new Metier('Archer',15, 2, 3, 1, 10, 0.05,'pose de piège')) {
        super(nom, monMetier);
           
    }

}