import { Viking } from "./Viking";

export class Combat {
    
    private _viking1 : Viking
    private _viking2 : Viking

    constructor(monViking1: Viking, monViking2: Viking) {
        this._viking1 = monViking1;
        this._viking2 =monViking2;
    }

    
    public get viking1() : Viking {
        return this._viking1
    }
    
    public set viking1(v : Viking) {
        this._viking1 = v;
    }

    public get viking2() : Viking {
        return this._viking2
    }
    
    public set viking2(v : Viking) {
        this._viking2 = v;
    }

    
    public combattre(monViking1: Viking, monViking2: Viking) {

        while (monViking1.sante > 0 && monViking2.sante > 0) {
            monViking1.attaque(monViking2);
            monViking2.attaque(monViking1);
        }        
    }


    
}