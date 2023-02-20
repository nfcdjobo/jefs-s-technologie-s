document.querySelector("#show-login").addEventListener("click", function () {
    document.querySelector("#active-login").classList.add("active");
    document.getElementById("active-reinitialiser").classList.remove("active");
    document.getElementById("active-valider").classList.remove("active");
    document.getElementById("active-register").classList.remove("active");
    document.getElementById("nav-links").classList.remove("active");
    document.getElementById("menu-query").setAttribute("ref", "open");
    document.getElementById("menu-query").setAttribute("viewBox", "-5.5 0 32 32");
    document.getElementById("menu-query").setAttribute("xmlns", "http://www.w3.org/2000/svg");
    document.getElementById("path").setAttribute("style", "fill: rgb(253, 253, 253);");
    document.getElementById("path").setAttribute("d", "M1.375 9.156h18.063c0.781 0 1.375-0.594 1.375-1.375 0-0.75-0.594-1.344-1.375-1.344h-18.063c-0.781 0-1.375 0.594-1.375 1.344 0 0.781 0.594 1.375 1.375 1.375zM1.375 14.625h18.063c0.781 0 1.375-0.594 1.375-1.375 0-0.75-0.594-1.344-1.375-1.344h-18.063c-0.781 0-1.375 0.594-1.375 1.344 0 0.781 0.594 1.375 1.375 1.375zM1.375 20.094h18.063c0.781 0 1.375-0.594 1.375-1.344 0-0.781-0.594-1.375-1.375-1.375h-18.063c-0.781 0-1.375 0.594-1.375 1.375 0 0.75 0.594 1.344 1.375 1.344zM1.375 25.563h18.063c0.781 0 1.375-0.594 1.375-1.344 0-0.781-0.594-1.375-1.375-1.375h-18.063c-0.781 0-1.375 0.594-1.375 1.375 0 0.75 0.594 1.344 1.375 1.344z");
});

document.querySelector(".forget").addEventListener("click", function () {
    document.querySelector("#active-reinitialiser").classList.add("active");
    document.getElementById("active-login").classList.remove("active");
    document.getElementById("active-valider").classList.remove("active");
    document.getElementById("active-register").classList.remove("active");
});

document.querySelector("#show-reinitialisation").addEventListener("click", function () {
    document.querySelector("#active-reinitialiser").classList.add("active");
    document.getElementById("active-login").classList.remove("active");
    document.getElementById("active-valider").classList.remove("active");
    document.getElementById("active-register").classList.remove("active");
});

document.querySelector("#existe").addEventListener("click", function () {
    document.querySelector("#active-login").classList.add("active");
    document.getElementById("active-reinitialiser").classList.remove("active");
    document.getElementById("active-valider").classList.remove("active");
    document.getElementById("active-register").classList.remove("active");
});

document.querySelector("#show-register").addEventListener("click", function () {
    document.querySelector("#active-register").classList.add("active");
    document.getElementById("active-reinitialiser").classList.remove("active");
    document.getElementById("active-validation").classList.remove("active");
    document.getElementById("active-login").classList.remove("active");
});

document.querySelector("#show-validation").addEventListener("click", function () {
    document.querySelector("#active-valider").classList.add("active");
    document.getElementById("active-reinitialiser").classList.remove("active");
    document.getElementById("active-register").classList.remove("active");
    document.getElementById("active-login").classList.remove("active");
});

document.querySelector("#fermer-validation").addEventListener("click", function () {
    document.querySelector("#active-valider").classList.remove("active");
})

var fermer = document.querySelectorAll(".fermer");
var formulaire = document.querySelectorAll(".modal-popup");

fermer.forEach(fermerture => {
    fermerture.addEventListener("click", function () {
        formulaire.forEach(formu => {
            formu.classList.remove("active");
        });
    })
});

document.getElementById("menu-query").addEventListener("click", function () {
    const ref = document.getElementById("menu-query").getAttribute("ref");
    if (ref == "open") {
        document.getElementById("nav-links").classList.add("active");
        document.getElementById("menu-query").setAttribute("ref", "close");
        document.getElementById("menu-query").setAttribute("viewBox", "0 0 1024 1024");
        document.getElementById("menu-query").setAttribute("xmlns", "http://www.w3.org/2000/svg");
        document.getElementById("path").setAttribute("style", "fill: rgb(253, 253, 253);");
        document.getElementById("path").setAttribute("d", "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z");


        document.getElementById("active-login").classList.remove("active");
        document.getElementById("active-reinitialiser").classList.remove("active");
        document.getElementById("active-register").classList.remove("active");
        document.getElementById("active-login").classList.remove("active");
    } else {
        document.getElementById("nav-links").classList.remove("active");
        document.getElementById("menu-query").setAttribute("ref", "open");
        document.getElementById("menu-query").setAttribute("viewBox", "-5.5 0 32 32");
        document.getElementById("menu-query").setAttribute("xmlns", "http://www.w3.org/2000/svg");
        document.getElementById("path").setAttribute("style", "fill: rgb(253, 253, 253);");
        document.getElementById("path").setAttribute("d", "M1.375 9.156h18.063c0.781 0 1.375-0.594 1.375-1.375 0-0.75-0.594-1.344-1.375-1.344h-18.063c-0.781 0-1.375 0.594-1.375 1.344 0 0.781 0.594 1.375 1.375 1.375zM1.375 14.625h18.063c0.781 0 1.375-0.594 1.375-1.375 0-0.75-0.594-1.344-1.375-1.344h-18.063c-0.781 0-1.375 0.594-1.375 1.344 0 0.781 0.594 1.375 1.375 1.375zM1.375 20.094h18.063c0.781 0 1.375-0.594 1.375-1.344 0-0.781-0.594-1.375-1.375-1.375h-18.063c-0.781 0-1.375 0.594-1.375 1.375 0 0.75 0.594 1.344 1.375 1.344zM1.375 25.563h18.063c0.781 0 1.375-0.594 1.375-1.344 0-0.781-0.594-1.375-1.375-1.375h-18.063c-0.781 0-1.375 0.594-1.375 1.375 0 0.75 0.594 1.344 1.375 1.344z");
    }

})