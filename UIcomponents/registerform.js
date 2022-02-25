import styled from 'styled-components'
import { useState } from 'react'
import Router from 'next/router'
import validadorFormularios from '../utils/validadorFormularios'
import validarRegistro from '../utils/validarRegistro'

const Button2= styled.input`
    width: 150px;
    color: #172BEF;
    font-weight: bold;
    padding: .5em 1em;
    margin-top: 50px;
    margin-bottom:20px
    border: 1px solid #172BEF;
    border-radius: .5em;
    cursor:pointer;
    transition: .3s all;
    &:hover{
        background-color:#172BEF;
        color:white;
    }
`
const Registro=styled.div`
    text-align: center;
`
const Input=styled.input`
    border: 1px solid #fff;
    width: 80%;
    background-color: #bbbbbb;
    height: 40px;
    padding: 10px;
    margin-bottom: 10px;
`
const Error= styled.div`
    width: 80%;
    background-color: red;
    align-text: center;
    color: white;
    font-size:0.8rem;
    text-transform: uppercase;
    margin-left:10%;
    margin-bottom:10px;
`
const STATE_INICIAL_REGISTRO={
    nombre: '',
    rol:'',
    correo: '',
    password: '',
    password2:''
}

const RegisterForm = () => {
    const {valores,errores,handleSubmit,handleChange}= validadorFormularios(STATE_INICIAL_REGISTRO,validarRegistro,RegistrarUsuario);
    const {nombre, rol, correo, password, password2} = valores;
    function RegistrarUsuario(){
        //Hay que enviar la petición de crear cuenta al backend
        console.log("Cuenta creada exitosamente!");
        Router.push('/principal');
    }
    return (
        <Registro>
            <h2>REGISTRO</h2>
            <form onSubmit={handleSubmit} noValidate> 
                <Input name='rol' value={rol} list='roles' onChange={handleChange} placeholder='Tu rol'></Input>
                <datalist id='roles' >
                    <option value="Estudiante">Estudiante</option>
                    <option value="Explorador">Explorador</option>
                </datalist>
                {errores.rol && <Error>{errores.rol}</Error>}
                <Input type="text" placeholder='Tu nombre completo' name='nombre' value={nombre} onChange={handleChange}></Input>
                {errores.nombre && <Error>{errores.nombre}</Error>}
                
                <Input type="email" placeholder='Tu correo electronico' name='correo' value={correo} onChange={handleChange}></Input>
                {errores.correo&& <Error>{errores.correo}</Error>}
                <Input type="password" placeholder='Tu contraseña' name='password' value={password} onChange={handleChange}></Input>
                {errores.password && <Error>{errores.password}</Error>}
                <Input type="password" placeholder='Confirma tu contraseña' name='password2' value={password2} onChange={handleChange}></Input>
                {errores.password2 && <Error>{errores.password2}</Error>}
                <hr></hr>
                {/* Se debe hacer link cuando no existan errores */}
                <Button2 type="submit" value="¡AQUI VAMOS!"></Button2>
            </form>
        </Registro>
     );
}
 
export default RegisterForm;