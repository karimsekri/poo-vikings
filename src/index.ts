// import { Viking } from "./Viking";
// import { Arme } from "./Arme";
// import { Combat } from "./Combat";

import { Readline } from "readline/promises";
import { Personnage } from "./Personnage";
import { Viking } from "./Jobs/Viking";
import { CombatHandler } from "./Combats/CombatHandler";
import { Metier } from "./Metier";
import { Chevalier } from "./Jobs/Chevaliers";
import { Archer } from "./Jobs/Archers";
import { Magicien } from "./Jobs/Magiciens";
import { Voleur } from "./Jobs/Voleurs";
import { Epee } from "./Objets/Epee";
// import { ReadLine } from "readline";


// const arme1 = new Arme("Arme1",10);
// const arme2 = new Arme("Arme2",20);

// const viking1 = new Viking("viking1",100,5,arme1);
// const viking2 = new Viking("viking2",50,5,arme2);

// console.log("Santé et Force Initial")
// console.log(viking1.nom,"Santé : ",viking1.sante, "Force : ",viking1.force);
// console.log(viking2.nom,"Santé : ",viking2.sante, "Force : ",viking2.force);

// const combat1 = new Combat(viking1,viking2);
// combat1.combattre(viking1,viking2);

// console.log("Santé et Force apres le combat 1")
// console.log(viking1.nom,"Santé : ",viking1.sante, "Force : ",viking1.force);
// console.log(viking2.nom,"Santé : ",viking2.sante, "Force : ",viking2.force);

// let nomDuPersonnage1 = '';
// let nomMetierDuPersonnage1 = '';

// const readline = require('readline');
// const rl = readline.createInterface(process.stdin, process.stdout);
// rl.question('quel est le nom du personnage? ', (name:string) => {
//     nomDuPersonnage1 = name;
//     console.log('Nom du personnage est ' + name);
//     rl.close();
    
//     const rl2 = readline.createInterface(process.stdin, process.stdout);
//     rl2.question('quel est le metier du personnage? ', (sonMetier : string) => {
//     nomMetierDuPersonnage1 = sonMetier;
//     //console.log('Metier du personnage est ' + sonMetier);
//     rl2.close();

//     // Une fois que les deux réponses ont été obtenues, affichez-les ici
//     console.log('Nom du personnage : ' + nomDuPersonnage1);
//     console.log('Métier du personnage : ' + nomMetierDuPersonnage1);


//     switch (nomMetierDuPersonnage1) {
//         case 'viking':
//             const viking1 = new Viking();
//             const personnageViking = new Personnage(viking1);
//             personnageViking.nom = nomDuPersonnage1;
//             console.log(personnageViking);
//             break;
    
//         case 'archer':
//             const archer1 = new Archer();
//             const personnageArcher = new Personnage(archer1);
//             personnageArcher.nom = nomDuPersonnage1;
//             console.log(personnageArcher);
//             break;
//         case 'chevalier':
//             const chevalier1 = new Chevalier();
//             const personnageChevalier = new Personnage(chevalier1);
//             personnageChevalier.nom = nomDuPersonnage1; 
//             console.log(personnageChevalier);
//             break;
//         case 'magicien':
//             const magicien1 = new Magicien();
//             const personnageMagicien = new Personnage(magicien1);
//             personnageMagicien.nom = nomDuPersonnage1; 
//             console.log(personnageMagicien);
//         default:
//             break;
//     }

//     });
// });

const unViking = new Viking('Le Viking');
const unArcher = new Archer('Le Archer');

//console.log(unViking, unArcher);

// const combat1 = new CombatHandler(unViking,unArcher);
// combat1.combattre();

// console.log(unViking,unArcher);

const epee1 = new Epee('epee1',10,45,1,80);
console.log(epee1);

unViking.utiliser(epee1);







