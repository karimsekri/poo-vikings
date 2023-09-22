import { Arme } from "../Arme"
import { Metier } from "../Metier"

export class Archer extends Metier{
    
    constructor() {
        super(15, 2, 3, 1, 10, 0.05);
        this.nomMetier = 'Archers';
        this.capacitéSpecial = 'pose de piège'
        
    }

}