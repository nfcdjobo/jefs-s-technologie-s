window.addEventListener("resize", ecran)
function ecran() {
    if (window.matchMedia("(max-width:111.688rem)").matches) {
        console.log(window.matchMedia("(max-width:111.688rem)"));
        var menu = document.getElementById("nav-links");
    } else {
        console.log(23);
    }
}

console.log(window.resizeBy(100, 100));

console.log(screen.width);