
var getData = function() {
   let usuario = document.getElementById("usuario").value;
   let contraseña = document.getElementById("contraseña").value;
  
   if (usuario == "") {
        document.getElementById("usuario").focus();
   } else {
      if (contraseña == "") {
        document.getElementById("contraseña").focus(); 
      } else {
        if (usuario == "Mali" & contraseña == "helloworld") {
            location = "cuentaMali.html"
        } else {
            if (usuario == "Gera" & contraseña == "l33t") {
                location = "cuentaGera.html"
            } else {
                if (usuario == "Maui" & contraseña == "123") {
                    location = "cuentaMaui.html"
                } else {
                    alert("ERROR: POR FAVOR VERIFIQUE SU USUARIO CONTRASEÑA")
                }
            }
        }  
        console.log(usuario);
        console.log(contraseña);
      } 
   }
}