import styled from 'styled-components'
import LoginForm from './loginform'

const Panel = styled.div`
    border: 2px solid #fff;
    border-radius: 20px;
    padding: 25px 50px;
    margin: 20px;
`
const Encabezado = styled.div`
    display: flex;
    justify-content: space-between;
`
const Button= styled.button`
    width: 150px;
    color: #172BEF;
    font-weight: bold;
    padding: .5em 1em;
    margin: 1em auto;
    border: 2px solid #172BEF;
    border-radius: .5em;
`

function cambio(decision){
    login=decision;
    console.log(login);
}

let login=true;
const Login = () => {
    
    return ( 
        <Panel>
            <Encabezado>
                <Button onClick={()=>cambio(true)}>Iniciar Sesión</Button>
                <Button onClick={()=>cambio(false)}>Registrarse</Button>
            </Encabezado>
            
            <LoginForm
            login={login}
            ></LoginForm>


        </Panel>
     );
}
 
export default Login;