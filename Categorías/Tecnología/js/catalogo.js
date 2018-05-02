

(function(){
  
  function $(selector){
    return document.querySelector(selector);
  }

  //------------------Creo una función que con contenga una Array con todos los productos------------------//
  
  function Catalogo(){
    this.productos = [{"id": 1, "precio": "$ 20.000", "nombre": "Computadora completa", "marca": "MAC", "ubicacion": "Montevideo", "imagen": "1.jpg"},
                      {"id": 2, "precio": "$ 15.000", "nombre": "Notebook 4gb RAM", "marca": "Hp", "ubicacion": "Montevideo", "imagen": "2.jpg"},
                      {"id": 3, "precio": "$ 17.000", "nombre": "Notebook 8gb RAM", "marca": "Samsung", "ubicacion": "Montevideo", "imagen": "3.jpg"},
                      {"id": 4, "precio": "$ 28.000", "nombre": "PC con Tarjeta de Video NVIDIA", "marca": "LG", "ubicacion": "Montevideo", "imagen": "4.jpg"},
                      {"id": 5, "precio": "$ 23.000", "nombre": "PC sin torre", "marca": "MAC", "ubicacion": "Montevideo", "imagen": "5.jpg"},
                      {"id": 6, "precio": "$ 7.000", "nombre": "Smart Watch", "marca": "Apple", "ubicacion": "Montevideo", "imagen": "6.jpg"}];  
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
              <p class="info-txt">${catalogo.productos[i].nombre}</p>
              <h4 class="info-subt">${catalogo.productos[i].marca}</h4>
              <h6 class="info-sub">${catalogo.productos[i].ubicacion}</h6>
              </div>
              </div>
          `;
      }
    $("#tecnologia").innerHTML = html;
    }
  } 

  var catalogo = new Catalogo();
  var verCatalogo = new verCatalogo();

  //-----------------------Cuando cargue la página ejecutar la función que contiene el HTML-----------------------//
  
  document.addEventListener('DOMContentLoaded', function(){
    verCatalogo.cargarProductos();

  });

})();