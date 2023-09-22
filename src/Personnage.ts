import { Equipement } from "./Equipement"
import { Metier } from "./Metier"


export class Personnage {

    private _nom : string 
    private _niveau : number
    private _nbrePointExperience : number
    private _type : Metier
    private _sante: number
    private _force: number
    private _vitesse: number
    private _intelligence: number
    private _pointsMana : number
    private _chanceCoupCritique : number
    //private _equipement : Equipement



	public  get nom() {
		return this._nom;
	}

    public  set nom(v : string) {
        this._nom = v;
    }
    public  get niveau() {
        return this._niveau;
    }
   public  set niveau(v : number) {
       this._niveau = v;
   }

   public  get nbrePointExperience() {
       return this._nbrePointExperience;
   }
   public  set nbrePointExperience(v : number) {
       this._nbrePointExperience = v;
   }

   public  get type() {
       return this._type;
   }
   public  set type(v : Metier) {
       this._type = v;
   }

   public  get sante() {
       return this._sante;
   }

   public  set sante(v : number) {
       this._sante = v;
   }

   public  get force() {
       return this._force;
   }
   public  set force(v : number) {
       this._force = v;
   }

   public  get vitesse() {
       return this._vitesse;
   }
   public  set vitesse(v : number) {
       this._vitesse = v;
   }
   public  get intelligence() {
       return this._intelligence;
   }
   public  set intelligence(v : number) {
       this._intelligence = v;
   }
   public  get pointsMana() {
       return this._pointsMana;
   }
   public  set pointsMana(v : number) {
       this._pointsMana = v;
   }
   public  get chanceCoupCritique() {
       return this._chanceCoupCritique;
   }
   public  set chanceCoupCritique(v : number) {
       this._chanceCoupCritique = v;
   }
//    public  get equipement() {
//        return this._equipement;
//    }
//    public  set equipement(v : Equipement) {
//        this._equipement = v;
//    }

//    constructor( equipement : Equipement){ 
    constructor(monMetier:Metier){ 
        this._nom = '';
        this._niveau = 1;
        this._nbrePointExperience = 0;
        this._type = monMetier;
        this._sante = 50 + this._type.santebonus;
        this._force = 10 + this._type.forcebonus;
        this._vitesse = 10 + this._type.vitessebonus;
        this._intelligence = 10 + this._type.intelligencebonus;
        this._pointsMana = 50 + this._type.pointsManabonus;
        this._chanceCoupCritique = 0.02 + this._type.chanceCoupCritiquebonus; 
        //this._equipement = equipement;       
    }

    public attaque(personnageCible : Personnage, maChanceCoupCritique : number){
        const isCoupCritique = Math.random() < maChanceCoupCritique
        let forceCombat = this.force
        
        if(isCoupCritique){
            forceCombat = this.force * 2
        }
        
        personnageCible.sante -= forceCombat
          
        if (this.sante < 0) {
            personnageCible.sante = 0
        }        
    }
  
}