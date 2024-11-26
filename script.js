 //Definimos la funcion
 function realizarOperacion(num5, num6, operacion2) {
    if (operacion2 === "suma") {
        return num5 + num6;
    }  else if (operacion2 === "resta") {
        return num5 - num6;
    }  else if (operacion2 === "multiplicacion") {
        return num5 * num6;
    }  else if (operacion2 === "division") {
        if (num6 === 0) {
            return "Error: División por cero no es posible."
        }
        return num5 / num6;
    }   else {
        return "Operación no valida.";
    }
    }
// Bucle while para realizar operaciones continuas
    while (true) {
//Solicitamos los datos
        let num5 = parseInt(prompt("Ingrese el primer número: "));
        let num6 = parseInt(prompt("Ingrese el segundo número: "));
        let operacion2 = prompt("Ingresa una operación (suma, resta, multiplicacion, division) o 'salir' para terminar: ").toLowerCase();
// Cuando el usuario quiera salir del buble
    if (operacion2 === "salir") {
//mensaje de despedida
        alert("¡Adios!");
        break;
}

    let resultado = realizarOperacion(num5, num6, operacion2)
    alert(resultado)
    }
