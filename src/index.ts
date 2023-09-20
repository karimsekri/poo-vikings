import { Viking } from "./Viking";
import { Arme } from "./Arme";
import { Combat } from "./Combat";


const arme1 = new Arme("Arme1",10);
const arme2 = new Arme("Arme2",20);

const viking1 = new Viking("viking1",100,5,arme1);
const viking2 = new Viking("viking2",50,5,arme2);

console.log("Santé et Force Initial")
console.log(viking1.nom,"Santé : ",viking1.sante, "Force : ",viking1.force);
console.log(viking2.nom,"Santé : ",viking2.sante, "Force : ",viking2.force);

const combat1 = new Combat(viking1,viking2);
combat1.combattre(viking1,viking2);

console.log("Santé et Force apres le combat 1")
console.log(viking1.nom,"Santé : ",viking1.sante, "Force : ",viking1.force);
console.log(viking2.nom,"Santé : ",viking2.sante, "Force : ",viking2.force);

