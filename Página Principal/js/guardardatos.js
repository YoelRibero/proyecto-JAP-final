
function logearse(){

	var correo = document.getElementById("logMail").value;
	var password = document.getElementById("logContraseña").value;

	if (correo && password) {
		if (localStorage.getItem("email") === correo){
			mostrarDatos();
		}
	}
	true;
}

function mostrarDatos(){
	if ((localStorage.getItem("email") != undefined) && (localStorage.getItem("contraseña") != undefined)) {

		document.getElementById("ingreg").style.display = "none";

		document.getElementById("menu").innerHTML = "Bienvenido" + localStorage.getItem("nombre");
	}
}


function guardarDatos(){

	//Obtengo valores de inputs
	
	var nombre = document.getElementById("guarnombre").value;
	var apellido = document.getElementById("guarapellido").value;
	var email = document.getElementById("guarmail").value;
	var telefono = document.getElementById("guartel").value;
	var contraseña = document.getElementById("guarcontraseña").value;

	//Guardo valores en localStorage

	localStorage.setItem("nombre", nombre);
	localStorage.setItem("apellido", apellido);
	localStorage.setItem("email", email);
	localStorage.setItem("telefono", telefono);
	localStorage.setItem("contraseña", contraseña);
}




