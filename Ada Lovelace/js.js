//Fonction qui permet de réduire le menu de navigation lorsque l'utilisateur scroll vers le bas
window.onscroll = function () {
    scroll()
};

function scroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav").style.padding = "5px 10px";
        document.getElementById("gauche").style.fontSize = "25px";
    } else {
        document.getElementById("nav").style.padding = "50px 10px";
        document.getElementById("gauche").style.fontSize = "35px";
    }
}


//Permet d'afficher la date sur le haut de la page
var maDate = new Date();
document.getElementById("date").innerHTML = maDate.toLocaleDateString();