function calcularPrecio() {

   
    opcion = document.getElementById("seleccion").value;

    var cantEntradas = document.getElementById("cantidadEntrada").value;
    var total;
    var precioEntrada = 200;

    if (opcion == "sel"){
        document.getElementById("textoPagar").innerHTML= "Categoria Incorrecta";
        document.getElementById("precioTotal").innerHTML= " ";
    } else {
        document.getElementById("textoPagar").innerHTML= "Total a Pagar: $";
        document.getElementById("precioTotal").innerHTML= " ";
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
    
}

function limpiarForm () {

    var selectElement = document.getElementById("seleccion");
    selectElement.selectedIndex = 0; // Índice del option a seleccionar (comienza desde 0)

    document.getElementById("textoPagar").innerHTML= "Total a Pagar: $";

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cantidadEntrada").value = "";
    document.getElementById("precioTotal").innerHTML= "";
}
