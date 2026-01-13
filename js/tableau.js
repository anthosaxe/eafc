const note = [
    10,11,20
]


let moyenne = 0;

for (let i=0; i<note.length; i++){
    moyenne += note[i];
}

moyenne/=note.length;

console.log("la moyenne des notes est de " + moyenne);

//ajoute un element au bout du tableau
note.push(12);

//ajoute un element au début du tableau
note.unshift(9);

//change le deuxième element du tableau
note[1] = 15;

//delete le 4ème element du tableau et le 1 pour dire supprimer un element
note.splice(3, 1);

for (let i=0; i<note.length; i++){
    console.log(note[i]);
}

console.log(note[0]);

debugger;