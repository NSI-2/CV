//Quand l'utilisateur passe la souris sur le carré, on lui ajoute la classe rouge et lui enlève la classe blanc
function foncEntre(){
	document.querySelector("#maDiv").classList.remove("blanc");
	document.querySelector("#maDiv").classList.add("rouge");
}
//Quand l'utilisateur passe la souris sur le carré, on lui ajoute la classe blanc et lui enlève la classe rouge
function foncQuitte() {
	document.querySelector("#maDiv").classList.remove("rouge");
	document.querySelector("#maDiv").classList.add("blanc");
}

