
export class Metier {

    private _nomMetier : string
    private _santebonus: number
    private _forcebonus: number
    private _vitessebonus: number
    private _intelligencebonus: number
    private _pointsManabonus : number
    private _chanceCoupCritiquebonus : number
    private _capaciteSpecial: string;
  
    constructor(nomMetier: string, maSanteBonus : number, maForceBonus: number, maVitesseBonus: number, maIntelligenceBonus: number, 
                maPointsManabonus: number, maChanceCoupCritiqueBonus: number, capaciteSpecial:string){ 
      this._nomMetier = nomMetier;
      this._santebonus = maSanteBonus;
      this._forcebonus= maForceBonus;
      this._vitessebonus = maVitesseBonus;
      this._intelligencebonus = maIntelligenceBonus;
      this._pointsManabonus = maPointsManabonus;
      this._chanceCoupCritiquebonus = maChanceCoupCritiqueBonus;
      this._capaciteSpecial = capaciteSpecial;     
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
    public get capaciteSpecial(): string {
        return this._capaciteSpecial;
    }
    public set capaciteSpecial(value: string) {
        this._capaciteSpecial = value;
    }
    
   
}