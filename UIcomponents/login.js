import styled from 'styled-components'
import Link from 'next/link'
import validadorFormularios from '../utils/validadorFormularios'
import validarRegistro from '../utils/validarRegistro'

const PanelOut = styled.div`
    border: 1px solid #fff;
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
    width: 30%;
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
const STATE_INICIAL_LOGIN={
    rol:'',
    email: '',
    password: ''
}

const Login = () => {
    const [login,setLogin]= useState(true);
    function cambio(decision){
        setLogin(decision);
    }
    //Validador de Registro
    const {valores,errores,handleSubmit,handleChange}= validadorFormularios(STATE_INICIAL_LOGIN,validarRegistro,RegistrarUsuario);

    function RegistrarUsuario(){
        console.log("Cuenta creada exitosamente!");
    }

    //Validador de Login
    // const {valores2,errores2,handleSubmit2,handleChange2}= validadorFormularios(STATE_INICIAL_LOGIN,validarRegistro,RegistrarUsuario);

    // function RegistrarUsuario(){
    //     console.log("Cuenta creada exitosamente!");
    // }
    return ( 
        <PanelOut>
            <PanelIn>
                <Encabezado>
                    <Button onClick={()=>cambio(true)}>Iniciar Sesión</Button>
                    <Button onClick={()=>cambio(false)}>Registrarse</Button>
                </Encabezado>
                {login?
                    <Registro>
                    <h2>INICIO DE SESIÓN</h2>
                    <form>
                        <Input type="text" placeholder='Tu correo'></Input>
                        
                        <Input type="text" placeholder='Tu rol'></Input>
                        <Input type="password" placeholder='Tu contraseña'></Input>
                        <Link href="/principal">
                            <Button2 type="submit" value="¡AQUI VAMOS!"></Button2>
                        </Link>
                    </form>
                </Registro>
                :
                <Registro>
                    <h2>REGISTRO</h2>
                    <form onSubmit={handleSubmit} noValidate>
                        <Input type="text" placeholder='Tu nombre' value={nombre} onChange={handleChange}></Input>
                        {errores.nombre && <Error>{errores.nombre}</Error>}
                        <Input type="text" placeholder='Tu rol' value={rol} onChange={handleChange}></Input>
                        {errores.rol && <Error>{errores.rol}</Error>}
                        <Input type="email" placeholder='Tu correo' value={correo} onChange={handleChange}></Input>
                        {errores.email&& <Error>{errores.email}</Error>}
                        <Input type="password" placeholder='Tu contraseña' value={password} onChange={handleChange}></Input>
                        {errores.password && <Error>{errores.password}</Error>}
                        <Input type="password" placeholder='Confirma tu contraseña' value={password2} onChange={handleChange}></Input>
                        {errores.password2 && <Error>{errores.password2}</Error>}
                        <Link href="/principal">
                            <Button2 type="submit" value="¡AQUI VAMOS!"></Button2>
                        </Link>
                    </form>
                </Registro>
                }
            </PanelIn>
        </PanelOut>
     );
}
 
export default Login;