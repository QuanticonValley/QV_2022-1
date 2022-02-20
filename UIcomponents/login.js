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
    flex-direction:column;
`

const Login = () => {
    let login=true;
    return ( 
        <Panel>
            <Encabezado>
                <Button onClick={login=true}>Iniciar Sesión</Button>
                <Button onClick={login=false}>Registrarse</Button>
            </Encabezado>
            
            {login?
                <Registro>
                    <h2>INICIA SESIÓN</h2>
                    <form>
                        <input type="text" placeholder='Tu Correo'></input>
                        <input type="text" placeholder='Tu Contraseña'></input>
                        <Link>
                            <Button2 type="submit" value="¡AQUI VAMOS!"></Button2>
                        </Link>
                    </form>
                </Registro>
                :
                <Registro>
                    <h2>REGÍSTRATE</h2>
                    <form>
                    <input type="text" placeholder='Tu Correo'></input>
                    <input type="text" placeholder='Tu Contraseña'></input>
                    <input type="text" placeholder='Confirma Contraseña'></input>
                    <Link>
                        <Button2 type="submit" value="¡AQUI VAMOS!"></Button2>
                    </Link>
                    </form>
                </Registro>
            }


        </Panel>
     );
}
 
export default Login;