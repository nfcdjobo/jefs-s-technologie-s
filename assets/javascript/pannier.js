// J'identifie les tout les botons qui permettent d'ajouter au panier
let add_cart = document.querySelectorAll(".add-cart");

// Je selection tout le contenu du local-storage
let locals = localStorage;

// La fonction ajoutPannier() permet ajouter au panier
function ajoutPannier(event){
    // Au clique je récupère les information sur l'article
    const price = document.getElementById(event.target.id + "-price").textContent;
    const libelle = document.getElementById(event.target.id + "-libelle").textContent;
    const image = document.getElementById(event.target.id + "-image").getAttribute("src");
    const description = document.getElementById(event.target.id + "-description").textContent;
    // Je mets ces informations dans un Objet
    let ObjetPanier = {
        "Libelle": libelle,
        "Image" : image,
        "Description": description,
        "Prix": price,
        "Quantite":1
    }
    
    /*
    Si les informations de l'article dont on veut ajouter au panier 
    n'existe pas dans le local-storage on le stocke dans le local-storage avec 1 comme
    valeur de Quantité
    */
    if (localStorage.getItem(event.target.id) == null) {
        localStorage.setItem(event.target.id, JSON.stringify(ObjetPanier));
        document.getElementById("panier-compte").textContent = ObjetPanier.Quantite;
    }else{
        /*
        Si l'article existe dans le local-storege je récupère les informations de l'article
        et je le convertis en objet JavaScript en le sauvegardant dans la variable  copieObjet
        */
        let copieObjet = JSON.parse(localStorage.getItem(event.target.id));

        // Je convertis la quantité de copieObjet en nombre et j'ajoute +1
        copieObjet.Quantite = parseInt(copieObjet.Quantite)+1;

        /* 
        J'enregiste copieObjet dans le local-storage ce qui revient à modifier seulement la
        quantité de l'article existant au préalable
        */
        localStorage.setItem(event.target.id, JSON.stringify(copieObjet)); 

        let mes_cle = [];              // Va contenir les ID des bouton ajout au panier
        let mes_compte = [];           // Va contenir les informations des articles qui sont déjà au panier
        let tout_objet = {};           // Va recevoir un objet qui sera les information de l'article
        let nombre_article = 0;        // Va recevoir la somme des quantités

        //
        add_cart.forEach(mes_element => {
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