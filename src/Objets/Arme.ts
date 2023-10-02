import { Equipement } from "./Equipement";

export abstract class Arme extends Equipement {
    nom : string;

    constructor(monNomArme: string,monPrix: number, monPoids: number,monNiveau: number) {
        super(monPrix, monPoids, monNiveau);
        this.nom = monNomArme;
    }
}