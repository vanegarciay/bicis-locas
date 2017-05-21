function validateForm(){
	/* Escribe tú código aquí */
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var constrasenia = document.getElementById("input-password").value;
    var bici = document.getElementById("tipos_bici").value;

    validateCampo(nombre, "name-container", 'Debe ingresar un nombre (primera letra mayus)', "");
    validateCampo(apellido, "lastname-container", 'Debe ingresar su apellido (primera letra mayus)', "");
    validateCampo(correo, "email-container", 'Debe ingresar un correo electrónico válido', ""); 
    validateCampo(constrasenia, "password-container", 'Debe ingresar una contraseña', ""); 
    validateCampo(bici, "tipo-bici-container", 'Debe seleccionar una bici', 0); 
}

function validateCampo(dato,clase,mensaje,dato_erroneo){
    var padre = document.getElementsByClassName(clase)[0];
    var span = document.getElementById(clase);
    
    if(dato==dato_erroneo) {
        if(span==null) {
            var span_mensaje = document.createElement("span");
            span_mensaje.setAttribute("id", clase);
            var texto = document.createTextNode(mensaje);
            padre.appendChild(span_mensaje);
            span_mensaje.appendChild(texto);
        }
    } else if (clase == "email-container" && !validateEmail(dato)) {
        if(span==null) {
            var span_mensaje = document.createElement("span");
            span_mensaje.setAttribute("id", clase);
            var texto = document.createTextNode(mensaje);
            padre.appendChild(span_mensaje);
            span_mensaje.appendChild(texto);
        }
    } else if (clase == "name-container" && !validateName(dato)) {
        if(span==null) {
            var span_mensaje = document.createElement("span");
            span_mensaje.setAttribute("id", clase);
            var texto = document.createTextNode(mensaje);
            padre.appendChild(span_mensaje);
            span_mensaje.appendChild(texto);
        }
    } else if (clase == "lastname-container" && !validateLastName(dato)) {
        console.log("entro");
        if(span==null) {
            var span_mensaje = document.createElement("span");
            span_mensaje.setAttribute("id", clase);
            var texto = document.createTextNode(mensaje);
            padre.appendChild(span_mensaje);
            span_mensaje.appendChild(texto);
        } 
    } else {
        if(span!=null) {
            padre.removeChild(span);
        }
    }
}

function validateEmail(correo) {
    var respuesta = false;
    var regex = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
    if (regex.test(correo)) {
        respuesta = true;
    }
    return respuesta;
}

function validateName(nombre) {
    var respuesta = false;
    var regex = /^[A-Z]{1}[a-z]*$/;
    if (regex.test(nombre)) {
        respuesta = true;
    }
    return respuesta;    
}

function validateLastName(apellido) {
    var respuesta = false;
    var regex = /^[A-Z]{1}[a-z]*$/;
    if (regex.test(apellido)) {
        respuesta = true;
    }
    return respuesta;    
}
 

// Nombre y apellido deben solo tener caracteres de la A a Z y deben empezar con la primera mayus
//email debe tener el formato ghyhb@dfgh
//password debe tener al menos 6 caracteres y no puede ser 123456 o 098754