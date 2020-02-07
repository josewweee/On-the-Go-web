//DECLARACION VARIABLES
var prodKey = localStorage.getItem("PROD_KEY");
console.log(prodKey);
var productoDB = firebase.database().ref("PRODUCTOS/" + prodKey);
var cantidad = document.getElementById("sst").value;

productoDB.on("value", function(snapshot){

    document.getElementById("foto1").src = snapshot.val().foto;
    document.getElementById("foto2").src = snapshot.val().foto2;
    document.getElementById("foto3").src = snapshot.val().foto3;
    document.getElementById("nombre").innerHTML = snapshot.val().nombre;
    document.getElementById("precio").innerHTML = snapshot.val().precio;
    document.getElementById("categoria").innerHTML =  '<span>Categoria</span> : ' + snapshot.val().categoria;
    document.getElementById("descripcion").innerHTML = snapshot.val().descripcion;
});

document.getElementById("btnAgregarCarrito").innerHTML = '<a class="primary-btn" onclick="añadirAlCarrito('+"'"+prodKey+"'"+', '+"'XX'"+')">Agregar al carrito</a>';
