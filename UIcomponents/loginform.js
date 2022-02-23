import styled from 'styled-components'
import Router from 'next/router'
import { useState } from 'react'
import validadorFormularios from '../utils/validadorFormularios'
import validarLogin from '../utils/validarLogin'

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
const STATE_INICIAL_LOGIN={
    email: '',
    password: ''
}

const LoginForm = () => {
    const {valores,errores,handleSubmit,handleChange}= validadorFormularios(STATE_INICIAL_LOGIN,validarLogin,IniciodeSesion);
    const {email, password} = valores;
    function IniciodeSesion(){
        console.log("Entraste a tu cuenta");
        Router.push('/principal');
    }
    return (
        <Registro>
            <h2>INICIO DE SESIÓN</h2>
            <form onSubmit={handleSubmit} noValidate>
                <Input type="email" placeholder='Tu correo' name='email' value={email} onChange={handleChange}></Input>
                {errores.email&& <Error>{errores.email}</Error>}
                <Input type="password" placeholder='Tu contraseña' name='password' value={password} onChange={handleChange}></Input>
                {errores.password && <Error>{errores.password}</Error>}
                    <Button2 type="submit" value="¡AQUI VAMOS!"></Button2>
            </form>
        </Registro>
     );
}
 
export default LoginForm;