//DECLARAMOS VARIABLES
var carrito = JSON.parse(localStorage.getItem("CARRITO"));
console.log(carrito);
var html = '';
var subtotal = 0;




//ACTUALIZAMOS EL HTML
actualizarHtml();

function actualizarHtml(){
    html = '';
    subtotal = 0;
    for(var i=0; i<carrito.length;i++){
        html +=   '<tr>'+
                    '<td>'+
                        '<div class="media">'+
                            '<div class="d-flex">'+
                                '<img src="' + carrito[i].foto + '" alt="" style="width:40%";>'+
                            '</div>'+
                            '<div class="media-body">'+
                                '<p>'+ carrito[i].nombre +'</p>'+
                            '</div>'+
                        '</div>'+
                    '</td>'+
                    '<td>'+
                        '<h5>$'+ carrito[i].precio +'</h5>'+
                    '</td>'+
                    '<td>'+
                        '<div class="product_count">'+
                            '<input type="text" name="qty" id="sst" maxlength="12" value="' + carrito[i].cantidad + '" title="Cantidad:" class="input-text qty" disabled>'+
                        '</div>'+
                    '</td>'+
                    '<td>'+
                        '<h5>$'+ parseInt(carrito[i].cantidad) * parseInt(carrito[i].precio) +'</h5>'+
                    '</td>'+
                    '<td>'+
                        '<i class="fa fa-close" style="font-size: 20px"; onclick="borrarItem('+i+')"></i>'+
                    '</td>'+
                '</tr>';
                
    }

    //CALCULAMOS EL SUBTOTAL
    for(var j=0; j<carrito.length;j++){
        subtotal += parseInt(carrito[j].precio) * parseInt(carrito[j].cantidad);
    }

    //REMPLAZAMOS EL HTML
    document.getElementById("listaProductos").innerHTML = html;
    document.getElementById("subtotal").innerHTML = '$' + subtotal;
}


//FUNCION BORRAR ITEMS DEL CARRITO
function borrarItem(index){
   carrito.splice(index,1);
   localStorage.setItem("CARRITO", JSON.stringify(carrito));
   actualizarHtml();
}

            