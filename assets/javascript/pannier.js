let add_cart = document.querySelectorAll(".add-cart");

function ajoutPannier(event){
    let price = document.getElementById(event.target.id+"-price").textContent;
    let libelle = document.getElementById(event.target.id+"-libelle").textContent;
    let image = document.getElementById(event.target.id+"-image").getAttribute("src");
    let description = document.getElementById(event.target.id+" kj")

    console.log(price)
    console.log(libelle)
    console.log(image)
}

add_cart.forEach(card_element => {
    card_element.addEventListener("click", ajoutPannier);
});