import styled from 'styled-components'
import Link from 'next/link'

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
const Button2= styled.input`
    width: 150px;
    color: #172BEF;
    font-weight: bold;
    padding: .5em 1em;
    margin: 1em auto;
    border: 2px solid #172BEF;
    border-radius: .5em;
`
const Registro=styled.div`
    text-align: center;
    display:flex;
    flex-direction:row;
`
const Input=styled.input`
    border-radius: .5em;
    border: 1px solid #fff;
    height: 100%;
    background-color: #bbbbbb;
`

function RegistroLogin(login){
    let code;
    console.log(login);
    if (login==true) {
        code=(
        <Registro>
            <h2>INICIA SESIÓN</h2>
            <form>
                <Input type="text" placeholder='Tu Correo'></Input>
                <Input type="text" placeholder='Tu Contraseña'></Input>
                <Link href="/principal">
                    <Button2 type="submit" value="¡AQUI VAMOS!"></Button2>
                </Link>
            </form>
        </Registro>)
    } else {
        code=(
        <Registro>
            <h2>REGÍSTRATE</h2>
            <form>
                <Input type="text" placeholder='Tu Correo'></Input>
                <Input type="text" placeholder='Tu Contraseña'></Input>
                <Input type="text" placeholder='Confirma Contraseña'></Input>
                <Link href="/principal">
                    <Button2 type="submit" value="¡AQUI VAMOS!"></Button2>
                </Link>
            </form>
        </Registro>)
    }
    return code;
}

function cambio(decision){
    decision===1?login=true:login=false;
}

let login=true;
const Login = () => {
    
    return ( 
        <Panel>
            <Encabezado>
                <Button onClick={()=>cambio(1)}>Iniciar Sesión</Button>
                <Button onClick={()=>cambio(2)}>Registrarse</Button>
            </Encabezado>
            
            {RegistroLogin(login)}


        </Panel>
     );
}
 
export default Login;