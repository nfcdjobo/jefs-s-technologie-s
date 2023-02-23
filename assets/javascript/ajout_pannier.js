let pann = document.getElementById("pann");

const moins = document.getElementById("moins");
const plus = document.getElementById("plusieurs");
// let nombre = document.getElementById("nombre");
// let sous_total = document.getElementById("sous-total");
// let total = document.getElementById("total");
// let commande = document.getElementById("commande");
function augmenteoudeminu(event) {
    const signe = event.target.id;
    const prix = parseInt(document.getElementById("prix").getAttribute("valeur"));
    const nombre = parseInt(document.getElementById("nombre").textContent);
    // const
    if (signe == "plusieurs") {
        document.getElementById("nombre").textContent = nombre + 1;
        document.getElementById("sous-total").textContent = prix * (nombre + 1) + "$";
        document.getElementById("total").textContent = prix * (nombre + 1) + "$";
        document.getElementById("commande").textContent = "(Commander " + prix * (nombre + 1) + "$)";
    }
    // if (signe == "moins" && nombre > 0) {
    //     alert()
    // }



}

moins.addEventListener("click", augmenteoudeminu);
plus.addEventListener("click", augmenteoudeminu);
