import { useState, useEffect } from "react";

const validadorFormularios = (stateinicial, validacion, funcion) => {
    const [valores, guardarValores]= useState(stateinicial);
    const [errores, guardarErrores]=useState({});
    const [submitForm, guardarSubmitForm]=useState(false);

    useEffect(()=>{
        if(submitForm){
            const NoErrores= Object.keys(errores).length===0;
            if(NoErrores){
                funcion();
            }
            guardarSubmitForm(false);
        }
    }, [errores]);

    const handleChange=e=>{
        guardarValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault();
        const erroresValidar = validacion(valores);
        guardarErrores(erroresValidar);
        guardarSubmitForm(true);
    }
    return {
        valores,
        errores,
        handleSubmit,
        handleChange
    };
}
 
export default validadorFormularios;