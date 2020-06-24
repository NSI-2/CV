var bouton_a = document.getElementById('analytique');
var img_a = document.getElementById('img_a');
img_a.style.display= "none";
var fa = function(){
  img_a.style.display= "block";
};
bouton_a.addEventListener('click', fa);

var bouton_d = document.getElementById('différences');
var img_d = document.getElementById('img_d');
img_d.style.display= "none";
var fd = function(){
  img_d.style.display= "block";
};
bouton_d.addEventListener('click', fd);

var bouton_c = document.getElementById('chasse-buffles');
var img_c = document.getElementById('img_c');
img_c.style.display= "none";
var fc = function(){
  img_c.style.display= "block";
};
bouton_c.addEventListener('click', fc);

var titre = document.getElementById('titre');
var lien = document.getElementById('lien');
lien.style.display= "none";
var apparition = function(){
  lien.style.display= "block";
  titre.style.color= "blue"
};
titre.addEventListener("mouseover", apparition);

var  vers_influence = function(){
  document.location.href='influence.html'
}
lien.addEventListener("click", vers_influence)