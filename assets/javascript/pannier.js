let add_cart = document.querySelectorAll(".add-cart");
let locals = localStorage;

function ajoutPannier(event){
    const price = document.getElementById(event.target.id + "-price").textContent;
    const libelle = document.getElementById(event.target.id + "-libelle").textContent;
    const image = document.getElementById(event.target.id + "-image").getAttribute("src");
    const description = document.getElementById(event.target.id + "-description").textContent;
    let ObjetPanier = {
        "Libelle": libelle,
        "Image" : image,
        "Description": description,
        "Prix": price,
        "Quantite":1
    }
    
    if (localStorage.getItem(event.target.id) == null) {
        localStorage.setItem(event.target.id, JSON.stringify(ObjetPanier));
        document.getElementById("panier-compte").textContent = ObjetPanier.Quantite;
    }else{
        let copieObjet = JSON.parse(localStorage.getItem(event.target.id));
        copieObjet.Quantite = parseInt(copieObjet.Quantite)+1;
        localStorage.setItem(event.target.id, JSON.stringify(copieObjet));
        let reference = document.querySelectorAll("a[ref='reference']");
        let mes_cle = [];
        let mes_compte = [];
        let tout_objet = {};
        let nombre_article = 0;
        
        reference.forEach(mes_element => {
            if (mes_element.getAttribute("id") != null){
                mes_cle.push(mes_element.getAttribute("id")); 
            }
        });

        for(const compte in locals){
            if(mes_cle.includes(compte)){
                mes_compte.push(locals[compte]);
            }
        }

        mes_compte.forEach(key => {
            tout_objet=JSON.parse(key);
            nombre_article += parseInt(tout_objet.Quantite)
        })
        document.getElementById("panier-compte").textContent = nombre_article;
    }
}

let clef = 0;
if (locals.length>=1){
    let toutajout=0;
    for(const denombrement in locals){
        if (clef <= (locals.length - 1) && !isNaN(parseInt((JSON.parse(locals[denombrement]).Quantite)))){
            toutajout +=parseInt(JSON.parse(locals[denombrement]).Quantite);
            clef++;
            document.getElementById("panier-compte").textContent = toutajout;
        }
    }
}

add_cart.forEach(card_element => {
    card_element.addEventListener("click", ajoutPannier);
});