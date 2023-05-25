const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  cantidad: /^\d$/, // 7 a 14 numeros.
};

const campos = {
	nombre: false,
	apellido: false,
	email:false,
	cantidad:false,
	seleccion: false
}

const validarformulario = (e) => {
	let opcion = document.getElementById("seleccion").value; // Declaración de la variable opcion

  switch (e.target.name) {
    case "nombre":
		validarCampo(expresiones.nombre,e.target,'nombre');
      break;
    case "apellido":
		validarCampo(expresiones.apellido,e.target,'apellido');
      break;
    case "email":
		validarCampo(expresiones.correo,e.target,'email');
      break;
	case "cantidadEntrada":
		validarCampo(expresiones.cantidad,e.target,'cantidadEntrada');
    break;
	case 'seleccion':
		
		if (opcion == 'sel') {
			document.getElementById('seleccion').classList.add('is-invalid');
			campos.seleccion = false; // Actualización del estado del campo
		  } else {
			document.getElementById('seleccion').classList.remove('is-invalid');
			campos.seleccion = true; // Actualización del estado del campo
		  }
		  
	break;
  }


};


const validarCampo = (expresion,input,campo ) => {
	if(expresion.test(input.value)){
		document.getElementById(campo).classList.remove('is-invalid');
		campos[campo] = true;
	} else {
		document.getElementById(campo).classList.add('is-invalid');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
    input.addEventListener("blur", validarformulario);
	document.getElementById("seleccion").addEventListener("change", validarformulario);
});



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

	document.getElementById("alertaTotal").classList.remove("d-none");

}





formulario.addEventListener("submit", (e) => {
  
	e.preventDefault();
  if(campos.nombre && campos.apellido && campos.email && campos.cantidadEntrada && campos.seleccion){	
	calcularPrecio();
  }
  
});



function limpiarForm() {

    var selectElement = document.getElementById("seleccion");
    selectElement.selectedIndex = 0; // Índice del option a seleccionar (comienza desde 0)

    document.getElementById("textoPagar").innerHTML = "Total a Pagar: $";

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cantidadEntrada").value = "";
    document.getElementById("precioTotal").innerHTML = "";

	document.getElementById("alertaTotal").classList.add("d-none");
}