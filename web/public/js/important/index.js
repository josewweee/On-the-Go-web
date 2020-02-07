//DECLARACION DE VARIABLES
var productosDB = firebase.database().ref("PRODUCTOS");

var nombresDB = [];
var categoriasDB = [];
var descripcionesDB = [];
var preciosDB = [];
var preciosGrandesDB = [];
var fotos1DB = [];
var fotos2DB = [];
var fotos3DB = [];
var keyProducto = [];


//TOMAMOS VALORES DE LA DATABASE y LLAMAMOS LA ACTUALIZACION DEL HTML
productosDB.on('value', function(snapshot){
    datos = Object.values(snapshot.val());
    //datos = snapshot.val();
    
    for(var i=0;i<datos.length;i++){
        nombresDB.push(datos[i].nombre);
        categoriasDB.push(datos[i].categoria);
        preciosDB.push(datos[i].precio);
        preciosGrandesDB.push(datos[i].precio2);
        descripcionesDB.push(datos[i].descripcion);
        fotos1DB.push(datos[i].foto);
        fotos2DB.push(datos[i].foto2);
        fotos3DB.push(datos[i].foto3);
        keyProducto.push(datos[i].key);
    }
    
    actualizarHtml();
});

//FUNCION PARA ACTUALIZAR EL HTML
function actualizarHtml(){
    var html = '';
    var i = 0;
    //temporal mientras no haya paginacion
    var cantidadProductos = nombresDB.length;
    
    while(i < cantidadProductos){
        html += '<div class="col-lg-4 col-md-6">'+
                    '<div class="single-product">'+
                            '<img class="img-fluid" src="'+fotos1DB[i]+'" alt="producto" onclick="irProducto('+"'"+ keyProducto[i]+"'"+')">'+
                        '<div class="product-details">'+
                            '<h6>'+ nombresDB[i] +'</h6>'+
                            '<div class="price">'+
                                '<h6>$'+ preciosDB[i] +'</h6>'+
                                '<h6 class="l-through">$'+ preciosGrandesDB[i] +'</h6>'+
                            '</div>'+
                            '<div class="prd-bottom">'+
                                '<div onclick="añadirAlCarrito('+"'"+ keyProducto[i]+"'"+', 1)" class="social-info">'+
                                    '<span class="ti-bag"></span>'+
                                    '<p class="hover-text">añadir al carrito</p>'+
                                '</div>'+
                                '<div onclick="irProducto('+"'"+ keyProducto[i]+"'"+')" class="social-info">'+
                                    '<span class="lnr lnr-move"></span>'+
                                    '<p class="hover-text">ver mas</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';
                
                i++;
    }
    document.getElementById("listaProuctos").innerHTML = html;
}