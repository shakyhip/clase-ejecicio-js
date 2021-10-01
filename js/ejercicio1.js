/*
Ejercicio: Cajero de Super.

Hacer un formulario que pregunte: Nombre, Cantidad y Precio.

Hacer 2 botones: (Agregar) y (Enviar). 
Si se pone (Agregar), el artículo se agrega a una lista y  se borran los campos para que se pueda agregar otro artículo.
Si se pone (Enviar), Aparece el total a pagar (en un div o un alert)
 

Extra 1. Agregar descuento si la compra es más de $100 pesos. Se le hace un descuento del 10%
Extra 2. Que se vean los artículos y se vayan sumando según se vayan agregando a la lista

*/

var listaArticulos = [];


var btnAgregar = document.getElementById("btn-add");
btnAgregar.onclick = agregarArticulo;

document.getElementById("btn-send").onclick = enviarCuenta;

function agregarArticulo() {

    let nombre = document.getElementById("nombre").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;

    document.getElementById("nombre").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";

    let articulo = {
        name: nombre,
        cant: cantidad,
        pre: precio
    }
    listaArticulos.push(articulo);
}

function enviarCuenta(){

    let total = 0;
    listaArticulos.forEach(function(elemento){
        total += Number(elemento.cant) * Number(elemento.pre);
    })


    alert(`La cuenta es $${total} pesos`);
}