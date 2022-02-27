export default function validarCambios(valores){

    let errores={};
    if(!valores.info>1000){
        errores.info="La información puede tener como máximo 1000 caracteres";
    }

    return errores;

}