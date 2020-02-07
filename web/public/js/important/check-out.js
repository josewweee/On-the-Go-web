//DECLARAMOS VARIABLES
var carrito = JSON.parse(localStorage.getItem("CARRITO"));
var html = '';
var html_subtotal = '';
var subtotal = 0;
var nombre, apellido, celular, email, ciudad, direccion, barrio, apartamento, ciudad_html;
var DBpedidos = firebase.database().ref("PEDIDOS");



//HTML DINAMICO EN EL MENU DE LA DERECHA
for(var i=0; i<carrito.length;i++){
    html += '<li><a href="#">'+ carrito[i].nombre +'<span class="middle">x '+ carrito[i].cantidad +'</span> <span class="last">$'+ carrito[i].precio +'</span></a></li>';
    subtotal += parseInt(carrito[i].precio) * parseInt(carrito[i].cantidad);
}


html_subtotal +=  '<li><a href="#">Subtotal <span>$'+ subtotal +'</span></a></li>'+
'<li><a href="#">Envio <span>Cuota fija: $20.000</span></a></li>'+
'<li><a href="#">Total <span>$'+ (subtotal + 20000) +'</span></a></li>';

document.getElementById("listaProductos").innerHTML = html;
document.getElementById("subtotal").innerHTML = html_subtotal;




//ENVIAMOS INFORMACION A LA BASE DE DATOS
function pagar(){

    //TOMAMOS INFORMACION DEL USUARIO
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    celular = document.getElementById("celular").value;
    email = document.getElementById("email").value;
    ciudad_html = document.getElementById("ciudad");
    ciudad = ciudad_html.options[ciudad_html.selectedIndex].value;
    direccion = document.getElementById("direccion").value;
    barrio = document.getElementById("barrio").value;
    apartamento = document.getElementById("apartamento").value;

    DBpedidos.push({
        nombre: nombre,
        apellido: apellido,
        celular: celular,
        email: email,
        ciudad: ciudad,
        direccion: direccion,
        barrio: barrio,
        apartamento: apartamento,
        pedido: carrito
    });
}
