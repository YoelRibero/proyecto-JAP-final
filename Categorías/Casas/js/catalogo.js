

(function(){
  
  function $(selector){
    return document.querySelector(selector);
  }

  //------------------Creo una función que con contenga una Array con todos los productos------------------//
  
  function Catalogo(){
    this.productos = [{"id": 1, "precio": "$ 10.000", "dormi": "50 m2 | 2 dormitorios", "estado": "Alquiler", "ubicacion": "Montevideo", "imagen": "1.jpg"},
                      {"id": 2, "precio": "U$S 250.000", "dormi": "250 m2 | 5 dormitorios", "estado": "Venta", "ubicacion": "San José", "imagen": "2.jpg"},
                      {"id": 3, "precio": "U$S 30.000", "dormi": "80 m2 | 2 dormitorios", "estado": "Venta", "ubicacion": "Soriano", "imagen": "3.jpg"},
                      {"id": 4, "precio": "$ 8.000", "dormi": "70 m2 | 1 dormitorio", "estado": "Alquiler", "ubicacion": "Montevideo", "imagen": "4.jpg"},
                      {"id": 5, "precio": "U$S 150.000", "dormi": "240 m2 | 3 dormitorios", "estado": "Venta", "ubicacion": "Maldonado", "imagen": "5.jpg"},
                      {"id": 6, "precio": "U$S 350.000", "dormi": "300 m2 | 6 dormitorios", "estado": "Venta", "ubicacion": "Montevideo", "imagen": "6.jpg"}];  
  }

  //--------------------------------Creo el HTML para el catálogo--------------------------------//
  
  function verCatalogo(){
    this.cargarProductos = function(){
      var html = ``;
      for (var i in catalogo.productos) {
        html += `
              <div class="info-vehiculos">
              <a href="#"><img src="img/${catalogo.productos[i].imagen}" class="info-img"></a>
              <div class="vehiculos-descripcion">
              <h3 class="info-titulo">${catalogo.productos[i].precio}</h3>
              <a href="#" class="fa fa-star-o" title="Agregar a favoritos" id="${catalogo.productos[i].id}"></a>
              <p class="info-txt">${catalogo.productos[i].dormi}</p>
              <h4 class="info-subt">${catalogo.productos[i].estado}</h4>
              <h6 class="info-sub">${catalogo.productos[i].ubicacion}</h6>
              </div>
              </div>
          `;
      }
    $("#casas").innerHTML = html;
    }
  } 

  var catalogo = new Catalogo();
  var verCatalogo = new verCatalogo();

  //-----------------------Cuando cargue la página ejecutar la función que contiene el HTML-----------------------//
  
  document.addEventListener('DOMContentLoaded', function(){
    verCatalogo.cargarProductos();

  });

})();