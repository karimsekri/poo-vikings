import { Arme } from "../Arme"
import { Metier } from "../Metier"

export class Viking extends Metier {
    
    
    constructor() {
        super(25, 4, 2, 0, 0, 0.08);
        this.nomMetier = 'Viking';
        this.capacitéSpecial = 'vol de vie'
        
    }   

}