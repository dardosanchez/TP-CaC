function calcularPrecio() {

   
    opcion = document.getElementById("seleccion").value;

    var cantEntradas = document.getElementById("cantidadEntrada").value;
    var total;
    var precioEntrada = 200;
    switch (opcion) {
        case "sinCategoria":
            total = precioEntrada*cantEntradas;
            break;
        case "estudiante":
            total = (precioEntrada - ((precioEntrada*80)/100))*cantEntradas;
            break;
        case "treinee":
            total = (precioEntrada - ((precioEntrada*50)/100))*cantEntradas;
            break;
        case "junior":
            total = (precioEntrada - ((precioEntrada*15)/100))*cantEntradas;
            break;
    }

    	document.getElementById("precioTotal").innerHTML= total;
}
