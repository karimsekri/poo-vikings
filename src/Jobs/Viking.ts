
import { Metier } from "../Metier";
import { Personnage } from "../Personnage";

export class Viking extends Personnage {
    
    constructor(nom: string, monMetier:Metier = new Metier('Viking', 25, 4, 2, 0, 0, 0.08, 'Attaque surprise')) {
        super(nom, monMetier);
    }

}