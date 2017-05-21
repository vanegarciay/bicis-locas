function validateForm(){
	/* Escribe tú código aquí */
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var constrasenia = document.getElementById("input-password").value;
    var bici = document.getElementById("tipos_bici").value;

    validateName(nombre);
    validateLastName(apellido);
    validateEmail(correo);
    validatePass(constrasenia);
    validateBiciType(bici);
}

function validateEmail(correo) {
    var regex = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
    if (regex.test(correo) && validateEmpty(correo)) {
        cleanError("email-container");
    } else {
        showError("email-container", 'Debe ingresar un correo electrónico válido');
    }
}

function validateName(nombre) {
    var regex = /^[A-Z]{1}[a-z]*$/;
    if (regex.test(nombre) && validateEmpty(nombre)) {
        cleanError("name-container");
    } else {
        showError("name-container", 'Debe ingresar un nombre (primera letra mayus)');
    }
}

function validateLastName(apellido) {
    var regex = /^[A-Z]{1}[a-z]*$/;
    if (regex.test(apellido) && validateEmpty(apellido)) {
        cleanError("lastname-container");
    } else {
        showError("lastname-container", 'Debe ingresar su apellido (primera letra mayus)');
    }    
}

function validatePass(constrasenia) {
    if(constrasenia.length >= 6 && constrasenia != "123456" && constrasenia != "098754" && validateEmpty(constrasenia)){
        cleanError("password-container");
    } else {
        showError("password-container", 'Debe ingresar una contraseña segura');
    }
}

function validateBiciType(tipo_bici) {
    if(tipo_bici!= "0"){
        cleanError("tipo-bici-container");
    } else {
        showError("tipo-bici-container", 'Debe seleccionar una bici');
    }
}

function validateEmpty(dato){
    var respuesta = false;
    if (dato != "") {
        respuesta = true;
    }
    return respuesta;
}

function showError(clase,mensaje){
    var padre = document.getElementsByClassName(clase)[0];
    var span = document.getElementById(clase);
    
    if(span==null) {
        var span_mensaje = document.createElement("span");
        span_mensaje.setAttribute("id", clase);
        var texto = document.createTextNode(mensaje);
        padre.appendChild(span_mensaje);
        span_mensaje.appendChild(texto);
    }
}

function cleanError(clase){
    var padre = document.getElementsByClassName(clase)[0];
    var span = document.getElementById(clase);
    
    if(span!=null) {
        padre.removeChild(span);
    }
}