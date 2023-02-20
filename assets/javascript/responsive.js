const login = document.createElement("u");
login.textContent = "Connexion";
const pannier = document.createElement("u");
pannier.textContent = "Pannier";
if (window.matchMedia("(max-width:769px)").matches) {
    document.getElementById("show-login").append(login);
    document.getElementById("pannier").append(pannier);
} else {
    login.remove();
    pannier.remove();
}

window.addEventListener("resize", ecran);
function ecran() {
    if (window.matchMedia("(max-width:769px)").matches) {
        document.getElementById("show-login").append(login);
        document.getElementById("pannier").append(pannier);
    } else {
        login.remove();
        pannier.remove();
    }
}

