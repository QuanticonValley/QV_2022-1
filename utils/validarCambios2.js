export default function validarCambios2(valores){

    let errores={};
    if(valores.info.length>1000){
        errores.info="La información puede tener como máximo 1000 caracteres";
    }
    if(valores.hobbies.length>45){
        errores.hobbies="Este campo solo puede tener 45 caracteres máximo";
    }
    if(valores.lenguajes.length>45){
        errores.lenguajes="Este campo solo puede tener 45 caracteres máximo";
    }
    if(valores.contacto.length>45){
        errores.contacto="Este campo solo puede tener 45 caracteres máximo";
    }

    return errores;

}