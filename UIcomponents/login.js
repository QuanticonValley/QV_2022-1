import styled from 'styled-components'
import LoginForm from './loginform'

const PanelOut = styled.div`
    border: 2px solid #fff;
    border-radius: 20px;
    padding: 20px 20px;
    margin: 20px;
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
    width: 300px;
    color: #172BEF;
    font-weight: bold;
    padding: .5em 1em;
    margin: 1em auto;
    border: 2px solid #172BEF;
    border-radius: .5em;
    cursor:pointer;
    transition: .3s all;
    &:hover{
        background-color:#172BEF;
        color:white;
    }
`

function cambio(decision){
    login=decision;
    console.log(login);
}

let login=true;
const Login = () => {
    
    return ( 
        <PanelOut>
            <PanelIn>
                <Encabezado>
                    <Button onClick={()=>cambio(true)}>Iniciar Sesión</Button>
                    <Button onClick={()=>cambio(false)}>Registrarse</Button>
                </Encabezado>
                <LoginForm login={login}></LoginForm>
            </PanelIn>
        </PanelOut>
     );
}
 
export default Login;