function calcularPrecio() {
    opcion = document.getElementById("seleccion").value;

    var total;
    var precioEntrada = 200;
    switch (opcion) {
        case "sinCategoria":
            total = precioEntrada;
            break;
        case "estudiante":
            total = precioEntrada - ((precioEntrada*80)/100);
            break;
        case "treinee":
            total = precioEntrada - ((precioEntrada*50)/100);
            break;
        case "junior":
            total = precioEntrada - ((precioEntrada*15)/100);
            break;
    }

    	document.getElementById("precioTotal").innerHTML= total;
}