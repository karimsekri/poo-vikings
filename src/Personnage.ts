import { Equipement } from "./Objets/Equipement"
import { Metier } from "./Metier"
import { IObjet } from "./Objets/IObjet"


export abstract class Personnage {

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
    private _equipement: Equipement[]

     
    constructor(nom: string, monMetier:Metier, niveau = 1, nbrePointExperience = 0,sante = 50, force = 10, vitesse = 10, 
        intelligence = 10, pointsMana = 50, chanceCoupCritique = 0.02, equipement : Equipement[] ) {
                     
        this._nom = nom;
        this._niveau = niveau;
        this._nbrePointExperience = nbrePointExperience;
        this._type = monMetier;
        this._sante = sante;
        this._force = force;
        this._vitesse = vitesse;
        this._intelligence = intelligence;
        this._pointsMana = pointsMana;
        this._chanceCoupCritique = chanceCoupCritique;
        this._equipement = equipement;       
    }

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
       return this._sante + this._type.santebonus;
   }

   public  set sante(v : number) {
       this._sante = v
   }

   public  get force() {
       return this._force + this._type.forcebonus;
   }
   public  set force(v : number) {
       this._force = v ;
   }

   public  get vitesse() {
       return this._vitesse + this._type.vitessebonus;
   }
   public  set vitesse(v : number) {
       this._vitesse = v ;
   }
   public  get intelligence() {
       return this._intelligence + this._type.intelligencebonus;
   }
   public  set intelligence(v : number) {
       this._intelligence = v ;
   }
   public  get pointsMana() {
       return this._pointsMana + this._type.pointsManabonus;
   }
   public  set pointsMana(v : number) {
       this._pointsMana = v ;
   }
   public  get chanceCoupCritique() {
       return this._chanceCoupCritique  + this._type.chanceCoupCritiquebonus;
   }
   public  set chanceCoupCritique(v : number) {
       this._chanceCoupCritique = v ;
   }
   public  get equipement() {
       return this._equipement;
   }
   public  set equipement(v : Equipement) {
       this._equipement = v;
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