let yahou="yaaahhhhoooouuuu";
console.log(yahou);


let a=2;
let b=3;
console.log(a+b);


let compter = [0, 1, 2, 3, 4, 5];
for (let i=0; i<compter.length; i++){
    console.log(compter[i]);
}

class personne {
    constructor (nom, prenom, passion) {
        this.nom = nom;
        this.prenom = prenom;
        this.passion = passion
    }
}

let roger = new personne("Dupont", "Roger", "defourailler");
let bob = new personne("Legob", "Bob", "Manger")

console.log(roger.nom + " " + roger.prenom + " à pour passion : " + roger.passion);

let personnes_tab = [];
personnes_tab.push(roger);
console.log(personnes_tab);
personnes_tab.push(bob);
console.log(personnes_tab);

