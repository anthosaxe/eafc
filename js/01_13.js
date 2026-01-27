const n1 = 1;
const n2 = 2;
const n3 = 3;

if(n1 > n2 && n1>n3){
    console.log(`le plus grand nombre est le n1 de la valeur ${n1}`)
}else if (n2>n1 && n2>n3){
    console.log(`le plus grand nombre est le n2 de la valeur ${n2}`)
} else {
    console.log(`le plus grand nombre est le n1 de la valeur ${n3}`)
}

let plus_grand = -Infinity;

if (n1>plus_grand){
    plus_grand = n1;
}
if (n2>plus_grand) {
    plus_grand = n2;
} 
if (n3>plus_grand) {
    plus_grand =n3;
}
    
console.log(`le plus grand nombre est ${plus_grand}`);

const nb =[20,15,35,40,7,108,22];
let big = -Infinity;

nb.forEach(element => {
    if (element>big){
        big = element;
    }
});

console.log(`le plus grand nombre est ${big}`);


const tjm = 200; //taux journalier moyen
const jp = 1; //jour travaillé
const tva = 21; 
const tva_low = 6;

if(jp>23){
    console.log(`impossible de prester plus de 23 jours escroc`)
} else {
    let total = jp*tjm;
    if (total >= 1500){
        total *= 1+(tva/100);
    } else {
        total *= 1+(tva_low/100);
    }
    console.log(`le montant à payer est de ${total} €`)
}

debugger;