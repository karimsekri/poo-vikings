import { Arme } from "./Arme";

export class Epee extends Arme {
    longueur: number;

    constructor(monNomArme: string,monPrix: number, monPoids: number,monNiveau: number, manLongueur: number) {
        super(monNomArme,monPrix, monPoids, monNiveau);
        this.longueur = manLongueur;
    }
}
