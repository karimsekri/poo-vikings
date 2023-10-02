import { IObjet } from "./IObjet";

export abstract class Equipement implements IObjet {
    prix: number;
    poids: number;
    niveau : number;

    constructor(monPrix: number, monPoids: number, monNiveau: number) {
        this.prix = monPrix;
        this.poids = monPoids;
        this.niveau = monNiveau;
    }
    
    use(): void {
        throw new Error("Method not implemented.");
    }
        
    equipe() : void {
        console.log('permet aux personnage de porter équipement.');
    }
}


