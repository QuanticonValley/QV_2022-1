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
const Error= styled.div`
    width: 80%;
    background-color: red;
    align-text: center;
    color: white;
    font-size:1.2rem;
    text-transform: uppercase;
    margin:3px;
`
const STATE_INICIAL_REGISTRO={
    nombre: '',
    rol:'',
    email: '',
    password: '',
    password2:''
}

const RegisterForm = () => {
    const {valores,errores,handleSubmit,handleChange}= validadorFormularios(STATE_INICIAL_REGISTRO,validarRegistro,RegistrarUsuario);

    const {nombre, rol, email, password, password2} = valores;
    function RegistrarUsuario(){
        console.log("Cuenta creada exitosamente!");
    }
    return (
        <Registro>
            <h2>REGISTRO</h2>
            <form>
                <Input type="text" placeholder='Tu nombre' ></Input>
                {errores.nombre && <Error>{errores.nombre}</Error>}
                <Input type="text" placeholder='Tu rol' value={rol} onChange={handleChange}></Input>
                {errores.rol && <Error>{errores.rol}</Error>}
                <Input type="email" placeholder='Tu correo' value={email} onChange={handleChange}></Input>
                {errores.email&& <Error>{errores.email}</Error>}
                <Input type="password" placeholder='Tu contraseña' value={password} onChange={handleChange}></Input>
                {errores.password && <Error>{errores.password}</Error>}
                <Input type="password" placeholder='Confirma tu contraseña' value={password2} onChange={handleChange}></Input>
                {errores.password2 && <Error>{errores.password2}</Error>}
                <hr></hr>
                <Link href="/principal">
                    <Button2 type="submit" value="¡AQUI VAMOS!"></Button2>
                </Link>
            </form>
        </Registro>
     );
}
 
export default RegisterForm;