var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnMenu.addEventListener('click', function(){
	nav.classList.toggle('mostrar');
})

function desplegar(_valor){
	document.getElementById("modal").style.visibility=_valor;
}


