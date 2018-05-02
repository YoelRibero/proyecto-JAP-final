//Guardo el botón al cual le quiero dar click y la barra de navegación que quiero desplegar o esconder

var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

//Cuando hago click en el botón que se despliegue el menú

btnMenu.addEventListener('click', function(){
	nav.classList.toggle('mostrar');
})


function desplegar(_valor){
	document.getElementById("modal").style.visibility=_valor;
}

function desplegaring(_valor){
	document.getElementById("modaling").style.visibility=_valor;
}

//----------------Buscador----------------//

var buscar = $("#buscarTabla").DataTable()

$("#inputBusqueda").keyup(function(){
	buscar.search($(this).val()).draw();

	if ($("#inputBusqueda").val() == ""){
		$("header").css({
			"height": "60px"
		})
        $("#buscar").hide();

	} else {
		$("#buscar").fadeIn();
	}
})
