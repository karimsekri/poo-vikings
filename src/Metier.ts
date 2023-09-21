
import { Viking } from "./Viking";

export class Metier {

    private _nomMetier : string
    private _santebonus: number
    private _forcebonus: number
    private _vitessebonus: number
    private _intelligencebonus: number
    private _pointsManabonus : number
    private _chanceCoupCritiquebonus : number
  
    constructor( maSanteBonus : number, maForceBonus: number, maVitesseBonus: number, maIntelligenceBonus: number, 
                maPointsManabonus: number, maChanceCoupCritiqueBonus: number){ 
      this._nomMetier = '';
      this._santebonus = maSanteBonus;
      this._forcebonus= maForceBonus;
      this._vitessebonus = maVitesseBonus;
      this._intelligencebonus = maIntelligenceBonus;
      this._pointsManabonus = maPointsManabonus;
      this._chanceCoupCritiquebonus = maChanceCoupCritiqueBonus;     
    }
    
    public get nomMetier() : string {
        return this._nomMetier
    }
    
    public set nomMetier(v : string) {
        this._nomMetier = v;
    }

    
    public get santebonus() : number {
        return this._santebonus
    }
    
    public set santebonus(v : number) {
        this._santebonus = v;
    }
    
    public get forcebonus() : number {
        return this._forcebonus
    }
    
    public set forcebonus(v : number) {
        this._forcebonus = v;
    }

    public get vitessebonus() : number {
        return this._vitessebonus
    }
    public set vitessebonus(v : number) {
        this._vitessebonus = v;
    }
    public get intelligencebonus() : number {
        return this._intelligencebonus
    }
    public set intelligencebonus(v : number) {
        this._intelligencebonus = v;
    }
    public get pointsManabonus() : number {
        return this._pointsManabonus
    }
    public set pointsManabonus(v : number) {
        this._pointsManabonus = v;
    }
    public get chanceCoupCritiquebonus() : number {
        return this._chanceCoupCritiquebonus
    }
    public set chanceCoupCritiquebonus(v : number) {
        this._chanceCoupCritiquebonus = v;
    }
    
    public attaque(vikingCible : Viking){
        const isCoupCritique = Math.random() < 0.1
        let forceCombat = this.forcebonus
        
        if(isCoupCritique){
            forceCombat = this.forcebonus * 2
        }
        
        vikingCible.santebonus -= forceCombat
          
        if (this.santebonus < 0) {
            vikingCible.santebonus = 0
        }        
    }
}