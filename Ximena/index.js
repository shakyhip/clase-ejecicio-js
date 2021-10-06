//Ejericios de Javascript

/*
1. Crea una función llamada palindromo() que reciba como parámetro una palabra, si la oración es un palíndromo la función deberá devolver true en otro caso, devolver false
Extra: con oraciones
*/

function palindromo(palabra){
    let palabraVolteada = palabra.split("").reverse().join("");
    if(palabra == palabraVolteada){
        return true;
    }
    else{
        return false;
    }
}

/*
2. Crea una función llamada longestCountry(), esta función recibirá de parámetro un arreglo con nombres de distintos países, la función deberá retornar el país con mayor número de letras. 
Toma como ejemplo, del siguiente arreglo de países:

const paises = ["México", "Colombia", "Peru", "El Salvador"]
*/

const paises = ["México", "Colombia", "Peru", "El Salvador"];

function paisMasLargo(arregloDePaises){

    let paisLargo = "";
    for(let i = 0; i < arregloDePaises.length; i++ ){

        if(arregloDePaises[i].length > paisLargo.length){
            paisLargo = arregloDePaises[i];
        }
    }
    return paisLargo;

}



/*
3. Crea una función llamada farenheitToCelsius() que reciba como parámetro los grados farenheit y los convierta a grados centígrados.
*/
function farenheitToCelsius(fahrenheit)
{
    var temp = fahrenheit;
    var fToCel = (temp - 32) * 5 / 9;
    var message = '°F=' + temp + ' entonces °=' + fToCel;
    console.log(message);
}


/*
4. Crea una función que imprima el número de parámetros enviados.
*/
function parametros(){
    var diferentes = [1, "hey", true, false, "yes", 2];
}
diferentes.length;

//No se si esten bien :|
