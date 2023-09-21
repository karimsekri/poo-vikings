import { Arme } from "./Arme"

export class Viking extends Metier {
  
    private _nom : string
    private _sante: number
    private _force: number
    private _arme: Arme
  
    constructor(monNom: string, maSante : number, maForce: number, monArme : Arme) {
      this._nom = monNom;
      this._sante = maSante;
      this._force = maForce 
      this._arme = monArme;
    }

    
    public get nom() : string {
        return this._nom
    }
    
    public set nom(v : string) {
        this._nom = v;
    }

    
    public get sante() : number {
        return this._sante
    }
    
    public set sante(v : number) {
        this._sante = v;
    }
    
    public get force() : number {
        return this._force + this._arme.force;
    }
    
    public set force(v : number) {
        this._force = v;
    }

    public get arme() : Arme {
        return this._arme
    }
    
    public set arme(v : Arme) {
        this._arme = v;
    }
    
    public attaque(vikingCible : Viking){
        const isCoupCritique = Math.random() < 0.1
        let forceCombat = this.force
        
        if(isCoupCritique){
            forceCombat = this.force * 2
        }
        
        vikingCible.sante -= forceCombat
          
        if (this.sante < 0) {
            vikingCible.sante = 0
        }        
    }
  }