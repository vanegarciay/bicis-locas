function validateForm(){
	/* Escribe tú código aquí */
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var constrasenia = document.getElementById("input-password").value;
    var bici = document.getElementById("tipos_bici").value;

    
    if (nombre==""){
        var nombrePadre = document.getElementsByClassName("name-container input-box")[0];
        var mensaje = document.createElement("span");
        var nombre_vacio = document.createTextNode('Los campos nombre deben ser completados');
        nombrePadre.appendChild(mensaje);
        mensaje.appendChild(nombre_vacio);
    } else if (apellido==""){
        
    }
}
