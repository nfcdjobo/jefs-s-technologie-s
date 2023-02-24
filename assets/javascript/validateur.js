// function inscription() {
//     const infos = validateur;
//     if (infos[0] == "register") {
//         localStorage.setItem("username", JSON.stringify(infos[1]));
//     }
// }
// localStorage.clear();

function validateur(event) {
    let Infor_user = {};

    if (event.target.id == "register-submit") {
        const register_name = document.getElementById("register-name").value;
        const register_email = document.getElementById("register-email").value;
        const register_password = document.getElementById("register-password").value;
        const register_telephone = document.getElementById("register-telephone").value;
        if (register_name != "" && register_email != "" && register_password != "") {
            Infor_user = {
                "name": register_name,
                "email": register_email,
                "password": register_password,
                "telephone": register_telephone
            }
            let loc = localStorage.setItem("username", JSON.stringify(Infor_user));
            document.getElementById("register-name").value = "";
            document.getElementById("register-email").value = "";
            document.getElementById("register-password").value = "";
            document.getElementById("register-telephone").value = "";
            document.getElementById("active-register").classList.remove("active");
            document.getElementById("active-login").classList.add("active");
        }
    }

    if (event.target.id == "login-submit") {
        const login_email = document.getElementById("login-email").value;
        const login_password = document.getElementById("login-password").value;
        if (login_email != "" && login_password != "") {
            Infor_user = {
                "email": login_email,
                "password": login_password
            }
            let username =JSON.parse(localStorage.getItem("username"));
            if ((Infor_user.email == username.email) && (Infor_user.password == username.password)){
                document.location.href = "file:///D:/NaN_Formation/Jefs's-Technologie's/corporate/abonner.html";
            }
        }
    }

    if (event.target.id == "reset-submit") {
        let reset_name = document.getElementById("reset-name").value;
        let reset_email = document.getElementById("reset-email").value;
        let confirm_email = document.getElementById("confirm-email").value;
        if (reset_name != "" && reset_email == confirm_email != "") {
            Infor_user = {
                "name": reset_name,
                "email": reset_email
            }
        }
    }
}

document.getElementById("register-submit").addEventListener("click", validateur, false);
document.getElementById("login-submit").addEventListener("click", validateur, false);
document.getElementById("reset-submit").addEventListener("click", validateur, false);