//exercice 1

document.getElementById("btn").addEventListener("click", function () {
    const age = document.getElementById("age").value;
    const carte = document.getElementById("carte").checked;
    console.log(carte);
    let tarif;

    if (age <= 12) {
        tarif = 5;
    } else if (age <= 17) {
        tarif = 7;
    } else if (age <= 64) {
        tarif = 10;
    } else if (age > 64) {
        tarif = 6;
    }

    if (carte) {
        tarif -= 2
    }

    const div = document.createElement("div");
    div.className = "tarif";
    div.textContent = `Tarif appliqué : ${tarif} €`;

    document.getElementById("resultat").innerHTML = "";

    document.getElementById("resultat").appendChild(div);
});

//exercice 2

document.getElementById("btn2").addEventListener("click", function () {
    const poids = document.getElementById("poids").value;
    const zone = document.getElementById("zone").value;
    let frais;
    let prix_poids;

    if (zone == "local") {
        frais = 5;
        prix_poids = poids * 2;
    } else if (zone == "national") {
        frais = 10;
        if (poids < 10) {
            prix_poids = poids * 4;
        } else {
            prix_poids = poids * 3;
        }
    } else {
        frais = 15;
        if (poids < 5) {
            prix_poids = poids * 10;
        } else {
            prix_poids = poids * 7;
        }
    }

    frais += prix_poids;

    const div2 = document.createElement("div");
    div2.className = "frais";
    div2.textContent = `frais appliqué : ${frais} €`;

    document.getElementById("resultat2").innerHTML = "";

    document.getElementById("resultat2").appendChild(div2);
});

//exercice 3

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn3").addEventListener("click", function () {
        const form = document.getElementById("commande");
        const data = new FormData(form);

        const commande = {
            pizza: parseInt(data.get("pizza")) || 0,
            pates: parseInt(data.get("pates")) || 0,
            salade: parseInt(data.get("salade")) || 0,
            dessert: parseInt(data.get("dessert")) || 0,
            boisson: parseInt(data.get("boisson")) || 0,
            carte: document.getElementById("carte_m").checked
        }

        console.log(commande)

        prix_pizza = 10;
        prix_pates = 8;
        prix_salade = 6;
        prix_dessert = 5;
        prix_boisson = 2;

        let prix = (commande.boisson * prix_boisson) + (commande.pizza * prix_pizza) + (commande.pates * prix_pates) + (commande.salade * prix_salade) + (commande.dessert * prix_dessert);
        let nbre_plat = commande.boisson + commande.pizza + commande.pates + commande.salade + commande.dessert;
        let carte = commande.carte;
        let reduction = 0;

        if (prix > 50) {
            reduction += 10;
        }

        if (nbre_plat > 3) {
            reduction += 5;
        }

        if (commande.carte) {
            reduction += 10;
        }

        const prixFinal = prix * (1 - reduction / 100);

        const div3 = document.createElement("div");
        div3.className = "prix";
        div3.textContent = `prix de la commande : ${prixFinal} €`;

        document.getElementById("resultat3").innerHTML = "";

        document.getElementById("resultat3").appendChild(div3);

    });
});
