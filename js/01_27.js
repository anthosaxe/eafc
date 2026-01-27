//exercice 1

const age = 17;
const estAccompagne = true;
const carteValide = false;

if (carteValide){
    console.log('accès autorisé')
} else {
    if (age>=18){
        console.log(`accès autorisé`);
    } else {
        if(estAccompagne){
            console.log(`accès autorisé`)
        } else {
            console.log(`accès refusé`)
        }
    }
}

if (carteValide || age>=18 || estAccompagne){
    console.log(`accès autorisé`);
} else {
    console.log(`accès refusé`);
}

//exercice 2

const age_2 = 15;
const estBoursier = true;
let tarif;

if(age_2<10){
    tarif = 2;
}
if (age_2>=10 && age_2<=17) {
    if(estBoursier){
        tarif = 1;
    }else{
        tarif = 3;
    }
}
if(age_2>=18){
    tarif = 4;
}

console.log(`le tarif est de ${tarif} pour un age de ${age_2} ans`)

//exercice 3

let motDePasse = "abc123";

if(motDePasse.length<6){
    console.log(`mdp invalide`);
} else {/*
    if(motDePasse.includes("123")){
        console.log("mdp invalide")
    } else{
        console.log('mdp valide')
    }*/
    motDePasse.includes("123") ? console.log("mdp invalide") : console.log('mdp valide');
}

//exercice 4

const couleur = "vert";
const vitesse = 48;

if(couleur == "vert"){
    console.log(`passer`);
}
if(couleur == `orange`){
    if(vitesse <= 30){
        console.log(`passer`)
    }else {
        console.log(`s'arreter `)
    }
}

//exercice 5

const moyenne = 9.8;
const absences = 3;

if(absences>5){
    console.log(`recalé`)
} else{
    if(moyenne >= 10){
        console.log(`admis`)
    } else if (moyenne >=8){
        console.log(`rattrapage`)
    } else {
        console.log(`recalé`)
    }
}

if (absences > 5 || moyenne<8){
    console.log(`recalé`)
} else {
    moyenne >=10 ? console.log(`admis`) : console.log(`rattrapage`);
}

//exercice 6

const note = 12;

if (note >= 10) {
  console.log("Admis");
}else {
    if (note >= 8) {
        console.log("rattrapage");
    } else {
        console.log("recalé");
    }
}

if (note >= 10) {
  console.log("Admis");
}else {
    note >= 8 ?  console.log("rattrapage") : console.log("recalé");
}
    
//exercice 7

const heure = 22;

if (heure >= 22 && heure < 6) {
  console.log("Bonne nuit");
} else if (heure >= 18) {
  console.log("Bonne soirée");
} else {
  console.log("Bonjour");
}

//exercice 8

const vitesse_2 = 50;

if (vitesse_2 <= 50) {
  console.log("Vitesse normale");
} else if (vitesse_2 > 50) {
  console.log("Excès de vitesse");
}

//exercice 9

let statut = "admin";

if (statut == "admin") {
  console.log("Accès total");
} else {
  console.log("Accès limité");
}

//exercice 10

let age_3 = 15;

if (age_3 < 18) {
  console.log("Mineur");
} else if (age_3 >= 18 && age_3 <= 21) {
  console.log("Jeune majeur");
} else {
  console.log("Adulte");
}
