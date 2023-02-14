function obtenerDescuento(){
    const precio= 70.00
    let cantidad = document.getElementById("cantidad").value;
    let descuento, totalPago, total;
    let palabra = document.querySelector('p');
    let pago = document.getElementById('pago');
    
    switch(pago.value){
        case "Efectivo":
            total = cantidad * precio;
            descuento = total * 0.10;
            totalPago = total - descuento;
            palabra.textContent = "El Total a Pagar es de "+ totalPago.valueOf(Number) + " aplicando descuento del 10%";
            break;
        case "Tarjeta de Credito":
            total = cantidad * precio;
            descuento = total * 0.05;
            totalPago = total - descuento;
            palabra.textContent = "El Total a Pagar es de "+ totalPago.valueOf(Number) + " aplicando descuento del 5%";
            break;
        case "Vale":
            total = cantidad * precio;
            descuento = total * 0.15;
            totalPago = total - descuento;
            palabra.textContent = "El Total a Pagar es de "+ totalPago.valueOf(Number) + " aplicando descuento del 15%";
            break;
        default:
            palabra.textContent = "No selecciono nada";
            break;
    }
}


///EJERCICIO 8: UTILIZANDO ARRAY
document.write("<h3>EJERCICIO 8: UTILIZANDO ARRAY</h3>");
let arreglo=["Manzana", "Banana", "Fresa"];
document.write("Mostrando arreglo inicial:</br>");
for(let i=0; i<arreglo.length; i++){
    document.write(arreglo[i]+ "<br>");
}
document.write("<br>Agregando 3 frutas al arreglo:</br>");
arreglo.push("Kiwi", "Melón", "Sandía"); //Agrega elementos al final del arreglo
for(let i=0; i<arreglo.length; i++){
    document.write(arreglo[i]+ "<br>");
}
document.write("<br>Eliminando elemento 'Banana' del arreglo:</br>");
arreglo.splice(arreglo.indexOf("Banana"),1); //banana es el valor y 1 es la cantidad de espacios/posiciones a eliminar
for(let i=0; i<arreglo.length; i++){
    document.write(arreglo[i]+ "<br>");
}


