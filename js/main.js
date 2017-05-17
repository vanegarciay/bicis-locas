function validateForm(){
	/* Escribe tú código aquí */
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var constrasenia = document.getElementById("input-password").value;
    var bici = document.getElementById("tipos_bici").value;

    validateCampo(nombre, "name-container", 'Debe ingresar su nombre', "");
    validateCampo(apellido, "lastname-container", 'Debe ingresar su apellido', "");
    validateCampo(correo, "email-container", 'Debe ingresar un correo electrónico', ""); 
    validateCampo(constrasenia, "password-container", 'Debe ingresar una contraseña', ""); 
    validateCampo(bici, "seleciona_bici", 'Debe seleccionar una bici', 0); 
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
    } else {
        if(span!=null) {
            padre.removeChild(span);
        }
    }
}