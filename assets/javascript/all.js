
let locals = localStorage;
let clef = 0;
    if (locals.length >= 1) {
    let toutajout = 0;
        for (const denombrement in locals) {
            if (clef <= (locals.length - 1) && !isNaN(parseInt((JSON.parse(locals[denombrement]).Quantite)))) {
    toutajout += parseInt(JSON.parse(locals[denombrement]).Quantite);
                clef++;
                document.getElementById("panier-compte").textContent = toutajout;
            }
        }
    }