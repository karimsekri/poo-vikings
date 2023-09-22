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

    
    // public combattre(monViking1: Viking, monViking2: Viking) {
    //     let attaquant = this._viking1.force < this._viking2.force ? this.viking1 : this._viking2
    //     let defenseur = this._viking1.force < this._viking2.force ? this.viking2 : this._viking1

    //     while (monViking1.sante > 0 && monViking2.sante > 0) {       
    //         attaquant.attaque(defenseur)

    //         const intermediaire = attaquant
    //         attaquant = defenseur
    //         defenseur = attaquant
    //     }        
    // }

    public combattre(monPersonnage1: Personnage, monPersonnage2: Personnage) {
        let ordreAttaque = this.comparaisonVitesse(monPersonnage1, monPersonnage2);
        ordreAttaque[0].attaque(ordreAttaque[1],ordreAttaque[0].chanceCoupCritique);
    }

    public comparaisonVitesse(monPersonnage1: Personnage, monPersonnage2: Personnage) : Personnage[]{
        let attaquant = this._personnage1.vitesse > this._personnage2.vitesse ? this._personnage1 : this._personnage2
        let cible = this._personnage1.vitesse < this._personnage2.vitesse ? this._personnage1 : this._personnage2
        return [attaquant,cible]
    }
    
}

