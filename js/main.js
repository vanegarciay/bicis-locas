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
        var nombre_vacio = document.createTextNode('Debe ingresar su nombre');
        nombrePadre.appendChild(mensaje);
        mensaje.appendChild(nombre_vacio);
    } else if (apellido==""){
        var apellidoPadre = document.getElementsByClassName("lastname-container input-box")[0];
        var mensaje = document.createElement("span");
        var apellido_vacio = document.createTextNode('Debe ingresar su apellido');
        apellidoPadre.appendChild(mensaje);
        mensaje.appendChild(apellido_vacio);        
    } else if (correo==""){
        var correoPadre = document.getElementsByClassName("email-container input-box")[0];
        var mensaje = document.createElement("span");
        var correo_vacio = document.createTextNode('Debe ingresar su correo');
        correoPadre.appendChild(mensaje);
        mensaje.appendChild(correo_vacio);        
    } else if (constrasenia==""){
        var constraseniaPadre = document.getElementsByClassName("form-group input-box")[0];
        var mensaje = document.createElement("span");
        var constrasenia_vacio = document.createTextNode('Debe ingresar una contraseña');
        constraseniaPadre.appendChild(mensaje);
        mensaje.appendChild(constrasenia_vacio);        
    } else if (bici==0){
        var biciPadre = document.getElementById("seleciona_bici");
        var mensaje = document.createElement("span");
        var bici_vacio = document.createTextNode('Debe Seleccionar una bici');
        biciPadre.appendChild(mensaje);
        mensaje.appendChild(bici_vacio);        
    }
}
