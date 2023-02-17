document.querySelector("#show-login").addEventListener("click", function () {
    document.querySelector(".modal-login").classList.add("active");
    document.querySelector(".modal-register").classList.remove("active");
    document.querySelector(".modal-reinitialisation").classList.remove("active");
    document.querySelector(".modal-validation").classList.remove("active");
});
document.getElementById("fermer").addEventListener("click", function () {
    document.querySelector(".modal-login").classList.remove("active");
});


document.querySelector("#show-register").addEventListener("click", function () {
    document.querySelector(".modal-register").classList.add("active");
    document.querySelector(".modal-login").classList.remove("active");
});
document.getElementById("fermer-register").addEventListener("click", function () {
    document.querySelector(".modal-register").classList.remove("active");
});

document.querySelector("#show-login-2").addEventListener("click", function () {
    document.querySelector(".modal-login").classList.add("active");
    document.querySelector(".modal-register").classList.remove("active");
});
document.getElementById("fermer-register").addEventListener("click", function () {
    document.querySelector(".fermer-register").classList.remove("active");
});


document.querySelector("#existe-compte").addEventListener("click", function () {
    document.querySelector(".modal-login").classList.add("active");
    document.querySelector(".modal-register").classList.remove("active");
});

document.querySelector("#show-reinitialisation").addEventListener("click", function () {
    document.querySelector(".modal-reinitialiser").classList.add("active");
    document.querySelector(".modal-login").classList.remove("active");
});
document.getElementById("fermer-reinitialisation").addEventListener("click", function () {
    document.querySelector(".modal-reinitialiser").classList.remove("active");
});

document.querySelector("#show-validation").addEventListener("click", function () {
    document.querySelector(".modal-validetion").classList.add("active");
    document.querySelector(".modal-reinitialiser").classList.remove("active");
});

document.querySelector("#fermer-validation").addEventListener("click", function () {
    document.querySelector(".modal-validetion").classList.remove("active");
});

