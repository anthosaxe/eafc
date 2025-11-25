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
