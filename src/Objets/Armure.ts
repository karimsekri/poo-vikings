import { Equipement } from "./Equipement";

export abstract class Armure extends Equipement {
    constructor(monPrix: number, monPoids: number,monNiveau: number) {
        super(monPrix, monPoids, monNiveau);
    }
}