export class Arme{
    
    private _nom : string
    private _force : number

    constructor(monNom: string, maForce:number){
        this._nom = monNom;
        this._force = maForce;
    }

    
    public get nom() : string {
        return this._nom
    }
    
    public set nom(v : string) {
        this._nom = v;
    }

    
    public get force() : number {
        return this._force
    }
    
    public set force(v : number) {
        this._force = v;
    }
    
    
    
    
}