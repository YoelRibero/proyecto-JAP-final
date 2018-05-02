

function ajaxGet(url, callback) {
	var req = new XMLHttpRequest();
    req.open("GET", "http://localhost:3000/categorias", true);
    req.addEventListener("load", function() {
	    if (req.status >= 200 && req.status < 400) {
		    callback(req.responseText);
	    } else {
		    console.error(req.status + " " + req.statusText)
	    }
    }); 
    req.addEventListener("error", function(){
	    console.error("Error de red");
    });
    req.send(null);
}


