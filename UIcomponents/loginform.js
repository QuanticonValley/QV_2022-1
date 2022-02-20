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
    border: 1px solid #fff;
    width: 80%;
    background-color: #bbbbbb;
    height: 25px;
    padding: 10px;
`

const LoginForm = (login) => {
    return (
        <div>
        {login?
            <Registro>
            <h2>INICIO DE SESIÓN</h2>
            <form>
                <Input type="text" placeholder='Tu correo'></Input>
                <Input type="text" placeholder='Tu contraseña'></Input>
                <Link href="/principal">
                    <Button2 type="submit" value="¡AQUI VAMOS!"></Button2>
                </Link>
            </form>
        </Registro>
        :
        <Registro>
            <h2>REGISTRO</h2>
            <form>
                <Input type="text" placeholder='Tu correo'></Input>
                <Input type="text" placeholder='Tu contraseña'></Input>
                <Input type="text" placeholder='Confirma tu contraseña'></Input>
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