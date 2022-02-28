export default function validarCambios(valores){

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
    
    if(valores.carrera.length>45){
        errores.carrera="La carrera debe tener menos de 45 caracteres";
    }
    if(valores.institucion.length>45){
        errores.institucion="La institucion debe tener menos de 45 caracteres";
    }
    if(valores.facultad.length>45){
        errores.facultad="La facultad debe tener menos de 45 caracteres";
    }

    return errores;

}