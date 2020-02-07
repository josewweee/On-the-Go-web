var firebaseConfig = {
    apiKey: "AIzaSyBA6Ko3-kqa-6vLqn-xNWvFMD7fDRUkmE4",
    authDomain: "on-the-go-11e5a.firebaseapp.com",
    databaseURL: "https://on-the-go-11e5a.firebaseio.com",
    projectId: "on-the-go-11e5a",
    storageBucket: "on-the-go-11e5a.appspot.com",
    messagingSenderId: "979123105251",
    appId: "1:979123105251:web:9336adea0a70f8ac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

actualizarNumItemsCarritoNavBar();

function actualizarNumItemsCarritoNavBar(){
    var cantidadCarrito = JSON.parse(localStorage.getItem("CARRITO"));
    if( cantidadCarrito == null || cantidadCarrito == undefined || cantidadCarrito.length < 1){
        cantidadCarrito = 0;
        document.getElementById("cantidadCarrito").innerHTML = ' ' + cantidadCarrito;
        console.log(cantidadCarrito);
        
    }else{
        cantidadCarrito = cantidadCarrito.length;
        document.getElementById("cantidadCarrito").innerHTML = ' ' + cantidadCarrito;
        console.log(cantidadCarrito);
    }
}

function irProducto(id){
    localStorage.setItem("PROD_KEY", id);
    window.location.href="single-product.html";
}

function añadirAlCarrito(id, cantidad){
    var carrito = JSON.parse(localStorage.getItem("CARRITO"));
    var productoDB = firebase.database().ref("PRODUCTOS/" + id);
    if (cantidad == 'XX'){cantidad = document.getElementById("sst").value;}
    
    productoDB.on("value", function(snapshot){
        var nuevoItem = {
            id: id, 
            cantidad: cantidad,
            nombre: snapshot.val().nombre,
            precio: snapshot.val().precio,
            foto: snapshot.val().foto
        }

        if( carrito == null || carrito == undefined || carrito.length < 1){
            carrito = [];
            carrito.push(nuevoItem);
        }else{
            carrito.push(nuevoItem);
        }
        localStorage.setItem("CARRITO", JSON.stringify(carrito));
        actualizarNumItemsCarritoNavBar();
        window.location.href="cart.html";
    });
}