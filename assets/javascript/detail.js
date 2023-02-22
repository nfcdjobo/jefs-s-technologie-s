
let affiche_petit = document.querySelectorAll(".affiche-petit");
affiche_petit.forEach(contenu => {
    contenu.addEventListener("click", function (e) {
        document.getElementById("detail-affiche").setAttribute("src", contenu.getAttribute("src"));
    });
});