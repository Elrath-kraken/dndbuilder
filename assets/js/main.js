// Basic info

let name = '';
let race = '';
let chaclass = '';
let level = 0;
let background = '';
let alignement = '';
let pro = 0;

// Pro Bonus Calculator

if (level <= 4) {
    pro = 2
} else if (level <= 8) {
    pro = 3
} else if (level <= 12) {
    pro = 4
} else if (level <= 16) {
    pro = 5
} else {
    pro = 6
};

// Character stats

let str = 0;
let dex = 0;
let con = 0;
let int = 0;
let wis = 0;
let cha = 0;

// Modifiers calculstor

let strmod = (str - 10) / 2;
strmod = Math.floor(strmod);
let dexmod = (dex - 10) / 2;
dexmod = Math.floor(dexmod);
let conmod = (con - 10) / 2;
conmod = Math.floor(conmod);
let intmod = (int - 10) / 2;
intmod = Math.floor(intmod);
let wismod = (wis - 10) / 2;
wismod = Math.floor(wismod);
let chamod = (cha - 10) / 2;
chamod = Math.floor(chamod);

// Saving throws proefficency

let pstr = 0;
let pdex = 0;
let pcon = 0;
let pint = 0;
let pwis = 0;
let pcha = 0;

// automate saving throws calculator

let ststr = strmod + pstr;
let stdex = dexmod + pdex;
let stcon = conmod + pcon;
let stint = intmod + pint;
let stwis = wismod + pwis;
let stcha = chamod + pcha;

// skills proefficency

let pathletics = 0;
let pacrobatics = 0;
let psleightofhand = 0;
let pstealth = 0;
let parcana = 0;
let phistory = 0;
let pinvestigation = 0;
let pnature = 0;
let preligion = 0;
let panimalhandling = 0;
let pinsight = 0;
let pmedicine = 0;
let pperception = 0;
let psurvival = 0;
let pdeception = 0;
let pintimidation = 0;
let pperformance = 0;
let ppersusasion = 0;



// automate skills calculation

let athletics = patheltics + strmod;
let acrobatics = pacrobatics + strmod;
let sleightofhand = psleightofhand + dexmod;
let stealth = pstealth + dexmod;
let arcana = parcana + intmod;
let history = phistory + intmod;
let investigaion = pinvestigation + intmod;
let nature = pnature + intmod;
let religion = preligion + intmod;
let animalhanding = panimalhandling + wismod;
let insight = pinsight + wismod;
let medicine = pmedicine + wismod;
let perception = pperception + wismod;
let survival = psurvival + wismod;
let deception = pdeception + chamod;
let intimidation = pintimidation + chamod;
let performance = pperformance + chamod;
let persusasion = ppersusasion + chamod;

// Equipments

let weapon = '';
let weapondamage = '';
let armor = '';
let armorac = '';

// Other variables

let speed = '';
let ac = armorac + dexmod + 10;
let hp = 0;
let wounds = 0;
let deathsave1 = false;
let deathsave2 = false;
let deathsave3 = false;
let successave1 = false;
let successave2 = false;
let successave3 = false;
let gold = 0;
