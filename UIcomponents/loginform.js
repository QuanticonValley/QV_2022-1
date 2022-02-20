import styled from 'styled-components'
import Link from 'next/link'

const Button2= styled.input`
    width: 150px;
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
const Registro=styled.div`
    text-align: center;
`
const Input=styled.input`
    border-radius: .5em;
    border: 1px solid #fff;
    height: 100%;
    background-color: #bbbbbb;
`

const LoginForm = (login) => {
    return (
        <div>
        {login?
            <Registro>
            <h2>INICIA SESIÓN</h2>
            <form>
                <Input type="text" placeholder='Tu Correo'></Input>
                <Input type="text" placeholder='Tu Contraseña'></Input>
                <Link href="/principal">
                    <Button2 type="submit" value="¡AQUI VAMOS!"></Button2>
                </Link>
            </form>
        </Registro>
        :
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
        </Registro>

        }
        </div> 
     );
}
 
export default LoginForm;