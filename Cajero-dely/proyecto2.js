var cuentas = [
	{	name:"Carmen",
		saldo:500,
		password: "3578"
	}, { name:"Danae",
		saldo:750,
		password: "7526"
	}, { name:"Arie",
		saldo:550,
		password: "4562"
	}
];

function login(form) {
	if (form.c.value=="Carmen"){
		if (form.a.value=="3578"){
			location=("proyecto22.html");
		} else {
			alert("Contraseña incorrecta");
		}
	} 

function login(form) {
	if (correo=="Danae"){
		if (Contraseña=="7526"){
			location=("C:\Users\Arie Barroso\Desktop\proyecto22.html");
		} else {
			alert("Contraseña correcta");
		}
	} 

function login(form) {
	 if (form.c.value=="Arie"){
		if (form.a.value=="4562"){
			location=("C:\Users\Arie Barroso\Desktop\proyecto22.html");
		} else {
			alert("Contraseña incorrecta");
		}
	} 

fórmula de función() {
    var CantidadT=parseInt(documento. getElementById("Cant"). valor);
    var Cantidad1=parseInt(documento. getElementById("C1"). valor);
    documento. getElementById("C1"). valor = (CantidadT+Cantidad1);
    if(Cantidad1 >= 990){
        alert("Esta cuenta ha alcanzado el monto máximo")
    }    
}

fórmula de función2 () {
    var CantidadT=parseInt(documento. getElementById("Cant"). valor);
    var Cantidad1=parseInt(documento. getElementById("C1"). valor);
    documento. getElementById("C1"). valor = (Cantidad1-CantidadT); 
    if(Cantidad1 < = 10){
       alert("esta cuenta ha alcanzado el monto mínimo")
    }
}