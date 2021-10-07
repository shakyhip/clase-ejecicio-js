var aumentaSaldo = function() {
    let saldo = parseInt(document.getElementById("saldo").value);
    let deposito = parseInt(document.getElementById("c1").value);
   
    if (saldo + deposito < 990) {
        document.getElementById("saldo").value = (saldo + deposito);
    } else {
        alert("REDUCIR DEPOSITO: LIMITE MAXIMO 990")
    }
    
}

var disminuyeSaldo = function() {
    let saldo = parseInt(document.getElementById("saldo").value);
    let retiro = parseInt(document.getElementById("c2").value);
    
    if (saldo - retiro > 10) {
        document.getElementById("saldo").value = (saldo - retiro);
    } else {
        alert("REDUCIR RETIRO: LIMITE MINIMO 10")
    }
       
}