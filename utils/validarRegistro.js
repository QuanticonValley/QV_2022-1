export default function validarRegistro(valores){

    let errores={};

    if(!valores.nombre){
        errores.nombre="El nombre es obligatorio";
    }else if(valores.nombre.length<8){
        errores.nombre="El nombre debe ser de al menos 8 caracteres";
    }else if(valores.nombre.length>46){
        errores.nombre="El nombre puede contener máximo 45 caracteres";
    }else if(!/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/.test(valores.nombre)){
        errores.nombre="El nombre solo puede contener letras, la primera letra debe ir en mayúscula";
    }

    if(!valores.correo){
        errores.correo="El correo es obligatorio";
    } else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valores.correo)){
        errores.correo="El correo no es válido";
    }else if(valores.correo.length>46){
        errores.correo="El correo puede contener máximo 45 caracteres";
    }
    if(!valores.password){
        errores.password="El password es obligatorio";
    }else if(valores.password.length<8){
        errores.password="El password debe ser de al menos 8 caracteres";
    }else if(valores.password.length>26){
        errores.password="El password puede contener máximo 25 caracteres";
    }

    if(valores.password!==valores.password2){
        errores.password2="Las contraseñas ingresadas no coinciden";
    }

    if(valores.rol===""){
        errores.rol="Debes elegir un rol";
    }else if(valores.rol!=="Estudiante"&&valores.rol!=="Explorador"){
        errores.rol="Elige un rol valido";
    }
    return errores;
}