import { Archer } from "../Jobs/Archers";
import { Viking } from "../Jobs/Viking";
import { Personnage } from "../Personnage";

export class CombatHandler {
    
    private _personnage1 : Personnage
    private _personnage2 : Personnage

    constructor(monPersonnage1: Personnage, monPersonnage2: Personnage) {
        this._personnage1 = monPersonnage1;
        this._personnage2 =monPersonnage2;
    }

    
    public get personnage1() : Personnage {
        return this._personnage1
    }
    
    public set personnage1(v : Personnage) {
        this._personnage1 = v;
    }

    public get personnage2() : Personnage {
        return this._personnage2
    }
    
    public set personnage2(v : Personnage) {
        this._personnage2 = v;
    }

    
    public combattre() {
        let attaquant = this._personnage1.vitesse > this._personnage2.vitesse ? this._personnage1 : this._personnage2
        let defenseur = this._personnage1.vitesse < this._personnage2.vitesse ? this._personnage2 : this._personnage1

        while (this._personnage1.sante > 0 && this._personnage2.sante > 0) {       
            attaquant.attaque(defenseur, defenseur.chanceCoupCritique)

            const intermediaire = attaquant
            attaquant = defenseur
            defenseur = attaquant
        } 
               
    }

    // public combattre(monPersonnage1: Personnage, monPersonnage2: Personnage) {
    //     let attaquant = this.comparaisonVitesse(monPersonnage1, monPersonnage2);
    //     attaquant[0].attaque(attaquant[1],attaquant[0].chanceCoupCritique);
    // }

    // public comparaisonVitesse(monPersonnage1: Personnage, monPersonnage2: Personnage) : Personnage[]{
    //     let attaquant = this._personnage1.vitesse > this._personnage2.vitesse ? this._personnage1 : this._personnage2
    //     let cible = this._personnage1.vitesse < this._personnage2.vitesse ? this._personnage1 : this._personnage2
    //     return [attaquant,cible]
    // }
    
}

