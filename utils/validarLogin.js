export default function validarLogin(valores){

    let errores={};
    if(!valores.email){
        errores.email="El Email es obligatorio";
    } else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valores.email)){
        errores.email="El Email no es válido";
    }

    if(!valores.password){
        errores.password="El password es obligatorio";
    }else if(valores.password.length<6){
        errores.password="El password debe ser de al menos 6 caracteres";
    }else if(valores.password.length>26){
        errores.password="El password puede contener máximo 25 caracteres";
    }
    //Traer del Backend los usuarios-contraseñas y validar.

    return errores;

}