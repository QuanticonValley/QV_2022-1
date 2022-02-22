import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'
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
const STATE_INICIAL_LOGIN={
    rol:'',
    email: '',
    password: ''
}

const LoginForm = () => {
    const {valores,errores,handleSubmit,handleChange}= validadorFormularios(STATE_INICIAL_LOGIN,validarRegistro,RegistrarUsuario);

    function RegistrarUsuario(){
        console.log("Cuenta creada exitosamente!");
    }
    return (
        <Registro>
            <h2>INICIO DE SESIÓN</h2>
            <form>
                <Input type="text" placeholder='Tu correo'></Input>
                <Input type="text" placeholder='Tu rol'></Input>
                <Input type="password" placeholder='Tu contraseña'></Input>
                <hr></hr>
                <Link href="/principal">
                    <Button2 type="submit" value="¡AQUI VAMOS!"></Button2>
                </Link>
            </form>
        </Registro>
     );
}
 
export default LoginForm;