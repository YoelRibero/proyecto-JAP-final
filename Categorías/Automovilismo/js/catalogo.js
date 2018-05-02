

(function(){
  
  function $(selector){
    return document.querySelector(selector);
  }

  //------------------Creo una función que con contenga una Array con todos los productos------------------//
  
  function Catalogo(){
    this.productos = [{"id": 1, "precio": "U$S 4.800", "año": "1985 | 180.000 Km", "marca": "Volkswagen Fusca", "ubicacion": "Montevideo", "imagen": "1.jpg"},
                      {"id": 2, "precio": "U$S 40.000", "año": "2016 | 0 Km", "marca": "BMW", "ubicacion": "Canelones", "imagen": "2.jpg"},
                      {"id": 3, "precio": "U$S 3.000", "año": "1980 | 200.000 Km", "marca": "Fiat 600", "ubicacion": "Montevideo", "imagen": "3.jpg"},
                      {"id": 4, "precio": "U$S 3.500", "año": "2016 | 0 Km", "marca": "Motocicleta Vespa", "ubicacion": "Montevideo", "imagen": "4.jpg"},
                      {"id": 5, "precio": "U$S 4.000", "año": "1980 | 56.865 Km", "marca": "BMW Serie 3", "ubicacion": "Colonia", "imagen": "5.jpg"},
                      {"id": 6, "precio": "U$S 30.000", "año": "2017 | 0 Km", "marca": "Chevrolet", "ubicacion": "Montevideo", "imagen": "6.jpg"}];  
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
              <p class="info-txt">${catalogo.productos[i].año}</p>
              <h4 class="info-subt">${catalogo.productos[i].marca}</h4>
              <h6 class="info-sub">${catalogo.productos[i].ubicacion}</h6>
              </div>
              </div>
          `;
      }
    $("#vehiculos").innerHTML = html;
    }
  } 

  var catalogo = new Catalogo();
  var verCatalogo = new verCatalogo();

  //-----------------------Cuando cargue la página ejecutar la función que contiene el HTML-----------------------//
  
  document.addEventListener('DOMContentLoaded', function(){
    verCatalogo.cargarProductos();

  });

})();