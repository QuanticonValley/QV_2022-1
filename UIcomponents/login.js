import styled from 'styled-components'
import { useState } from 'react'
import LoginForm from './loginform'
import RegisterForm from './registerform'

const PanelOut = styled.div`
    border: 1px solid #fff;
    border-radius: 20px;
    padding: 20px 20px;
    margin: 20px;
    width: 600px;
    @media screen and (max-width: 800px) {
		width: 80%;
	}
`
const PanelIn = styled.div`
    background-color:#fff;
    padding: 10px 10px;
`
const Encabezado = styled.div`
    display: flex;
    justify-content: space-between;
`
const Button= styled.button`
    width: 30%;
    color: #172BEF;
    font-weight: bold;
    padding: .5em 1em;
    margin: 1em auto;
    border: 2px solid #172BEF;
    border-radius: .5em;
    cursor:pointer;
    transition: .5s all;
    &:hover{
        background-color:#172BEF;
        color:white;
    }
`

const Login = () => {
    const [login,setLogin]= useState(true);
    function cambio(decision){
        setLogin(decision);
    }
    
    return ( 
        <PanelOut>
            <PanelIn>
                <Encabezado>
                    <Button onClick={()=>cambio(true)}>Iniciar Sesión</Button>
                    <Button onClick={()=>cambio(false)}>Registrarse</Button>
                </Encabezado>
                {login?
                    <LoginForm></LoginForm>
                :
                    <RegisterForm></RegisterForm>
                }
            </PanelIn>
        </PanelOut>
     );
}
 
export default Login;