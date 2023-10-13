// Precios de productos
const guitarra = 1000;
const piano = 2000;
const bateria = 3000;
// Definir las constantes para IVA e interés
const IVA = 0.21; // Tasa de IVA del 21%
const INTERES = 0.05; // Tasa de interés mensual del 5%

function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2;
    return resultado;
}

alert("Bienvenido a la tienda de instrumentos. Comencemos con su compra.");

let continuar = true; // Inicialmente, el while se ejecutará

while (continuar) {
    // Capturar la cantidad de instrumentos a comprar
    let cantidad = parseInt(prompt("Ingrese cantidad de instrumentos a elección. Ingrese '0' para salir")); 

    if (isNaN(cantidad)) {
        alert("Entrada no válida. Debe ingresar un número.");
    } else if (cantidad <= 0) {
        continuar = false;
        alert("Puedes comprar en otra ocasión.");
    } else {
        // Capturar instrumento en específico
        let instrumento = prompt("Ingrese el instrumento que desea comprar (guitarra, piano, bateria):");

        let resultadoCompra;
        // Calcular el costo de compra en base al instrumento seleccionado
        switch (instrumento.toLowerCase()) {
            case "guitarra":
                resultadoCompra = multiplicar(guitarra, cantidad);
                break;
            case "piano":
                resultadoCompra = multiplicar(piano, cantidad);
                break;
            case "bateria":
                resultadoCompra = multiplicar(bateria, cantidad);
                break;
            default:
                alert("Instrumento no válido.");
                continue;
        }

        // Calcular el costo de envío en base a la cantidad de instrumentos
        let costoEnvio;

        if (cantidad >= 10) {
            costoEnvio = 0;
        } else if (cantidad >= 5) {
            costoEnvio = 100;
        } else {
            costoEnvio = 200;
        }

        // Solicitar el método de pago
        let cuotasOption = 1;

        // Pago en tarjeta o efectivo
        let metodoPago = prompt("Ingrese el método de pago (Efectivo, Tarjeta):").toLowerCase();

        // Calcular y permitir el pago en cuotas solo con tarjeta
        if (metodoPago == "tarjeta") {

            cuotasOption = parseInt(prompt("¿En cuántas cuotas desea pagar? (6 o 12): \n Puedes pagar también en un solo pago (1)"));

            if (cuotasOption == 6 || cuotasOption == 12) {
                resultadoCompra = resultadoCompra + (resultadoCompra * INTERES * cuotasOption * IVA);
                alert("Pagas en " + cuotasOption + " cuotas");
            } else if (cuotasOption == 1) {
                alert("Pagas en un solo pago");
            }
            else {
                alert("Cuotas inválidas");
                break;
            }
        } else if (metodoPago == "efectivo") {
            alert("Método de pago efectivo.");
        } else {
            alert("Método de pago inválido");
            break;
        }

        // Calcular el total de la compra y mostrar los resultados
        const totalCompra = resultadoCompra + costoEnvio;

        alert("Resultado:\n" +
            "Instrumento elegido: " + instrumento + "\n" +
            "Cantidad de instrumentos: " + cantidad + "\n" +
            "Método de pago: " + metodoPago + "\n" +
            "Cuotas : " + (metodoPago == "tarjeta" ? cuotasOption : "N/A") + "\n" +
            "Costo de compra: $" + resultadoCompra + "\n" +
            "Costo de envío: $" + costoEnvio + "\n" +
            "IVA: 21% en caso de pago con tarjeta" + "\n" +
            "Recargo mensual de cuotas: 5%" + "\n" +
            "Total a pagar: $" + totalCompra);
    }
}
// Pregunta sobre la suscripción
let suscripcion = prompt("¿Desea suscribirse a nuestra página? (Sí/No):").toLowerCase();

if (suscripcion == "si" || suscripcion == "sí") {
    alert("Gracias por suscribirte a nuestra página. Saludos.");
} else if (suscripcion == "no") {
    alert("Gracias por visitarnos. ¡Hasta pronto!");
} else {
    alert("Respuesta no válida.");
}
// Fin del programa