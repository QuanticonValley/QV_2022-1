import styled from "styled-components";
import Nivel from "./nivel";
import Info from "./info";
import { useState, useEffect } from "react";
import validadorFormularios from "../../../utils/validadorFormularios";
import validarCambios from "../../../utils/validarCambios";
import ReactTooltip from "react-tooltip";
import { prefix } from "../../../utils/prefix";

const OutContainer = styled.div`
	display: flex;
    flex-direction: column;
    padding:10px;
    margin-left: 20px;
    @media screen and (max-width: 1500px) {
		margin-left:0px;
	}
`
const Nombre = styled.div`
    font-size:1.7rem;
    font-weight: 700;
    cursor: pointer;
`
const RolCarr = styled.div`
    font-size:1.2rem;
    color: #888;
    font-weight: 600;
    cursor:pointer;
`
const Empresa = styled.div`
    font-size:1.1rem;
    display:flex;
    font-weight: 500;
`
const Cargo= styled.div`
    color: #006FFF;
`
const Coins = styled.div`
    padding:5px;
    display: flex;
    justify-content: space-around;
    align-items:center;
    width: 200px;
    font-size:1.2rem;
    font-weight: 700;
`
const ND=styled.form`
    background-color:#172bef;
    color:white;
    padding:10px;
    position: absolute;
    border-radius: 10px;
    text-align: right;
    width:350px;
    @media screen and (max-width: 800px) {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
const Error= styled.div`
    width: 100%;
    background-color: red;
    align-text: center;
    color: white;
    font-size:0.8rem;
    text-transform: uppercase;
    margin-bottom:10px;
`

const MainComp = (val) => {
    const [isMounted,setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    },[]);
    let {idUsuario,nombreUsuario,rolUsuario,carreraUsuario,empresaUsuario,cargoUsuario,puntajeUsuario,infoUsuario,hojadeVidaUsuario,contactoUsuario,hobbiesUsuario,lenguajesUsuario,facultadUsuario,institucionUsuario,IncsUsuario,PtsVictoriaUsuario}=val;
    const Estado_Inicial={
        id:idUsuario,
        nombre:nombreUsuario,
        carrera:carreraUsuario,
        facultad:facultadUsuario,
        institucion:institucionUsuario
    }
    const {valores,errores,handleSubmit,handleChange}= validadorFormularios(Estado_Inicial,validarCambios,GuardarCambios);
    const {id,nombre,carrera,facultad,institucion}=valores;
    function GuardarCambios(){
        console.log("Cambios Realizados");
        //En esta parte se hace la petición de update
        if(depend0)setDepend0(!depend0);
        if(depend1)setDepend1(!depend1);
        if(depend2)setDepend2(!depend2);
        if(depend3)setDepend3(!depend3);
        //Recarga la pagina con Router.push
    }
    function ShowMod(n){
        if(n==0){setDepend0(!depend0)}
        if(n===1){setDepend1(!depend1)}
        if(n===2){setDepend2(!depend2)}
        if(n===3){setDepend3(!depend3)}
    }
    const [depend0,setDepend0]=useState(false);
    const [depend1,setDepend1]=useState(false);
    const [depend2,setDepend2]=useState(false);
    const [depend3,setDepend3]=useState(false);
    return (  
        <OutContainer>
            <div>
                <Nombre onClick={()=>ShowMod(0)} data-tip data-for="dscTooltipDec">
                   {nombreUsuario} 
                </Nombre>
                {depend0?<ND onSubmit={handleSubmit} noValidate><input type="text" name="nombre" value={nombre} onChange={handleChange} placeholder="Ingresa tu nuevo nombre"></input><input type="submit" value="Guardar"></input><button onClick={()=>ShowMod(0)}>Cancelar</button>{errores.nombre&& <Error>{errores.nombre}</Error>}</ND>:null}
                <RolCarr>
                    {carreraUsuario?<b onClick={()=>ShowMod(1)} data-tip data-for="dscTooltipDec">{rolUsuario} -{carreraUsuario}</b>:
                    rolUsuario==="Estudiante"?<b onClick={()=>ShowMod(1)} data-tip data-for="dscTooltipDec">Carrera del estudiante</b>:null}
                    {facultad?<b onClick={()=>ShowMod(2)} data-tip data-for="dscTooltipDec">{rol} -{facultad}</b>:
                    rolUsuario==="Mentor"?<b onClick={()=>ShowMod(2)} data-tip data-for="dscTooltipDec">Facultad del mentor</b>:null}
                    {institucion?<b onClick={()=>ShowMod(3)} data-tip data-for="dscTooltipDec">{rol} -{institucion}</b>:
                    rolUsuario==="Explorador"?<b onClick={()=>ShowMod(3)} data-tip data-for="dscTooltipDec">institución del explorador</b>:null}

                    {depend1?<ND onSubmit={handleSubmit} noValidate><input type="text" name="carrera" value={carrera} onChange={handleChange} placeholder="Ingresa tu carrera"></input><input type="submit" value="Guardar"></input><button onClick={()=>ShowMod(1)}>Cancelar</button>{errores.carrera&& <Error>{errores.carrera}</Error>}</ND>:null}
                    {depend2?<ND onSubmit={handleSubmit} noValidate><input type="text" name="facultad" value={facultad} onChange={handleChange} placeholder="Ingresa tu facultad"></input><input type="submit" value="Guardar"></input><button onClick={()=>ShowMod(2)}>Cancelar</button>{errores.facultad&& <Error>{errores.facultad}</Error>}</ND>:null}
                    {depend3?<ND onSubmit={handleSubmit} noValidate><input type="text" name="institucion" value={institucion} onChange={handleChange} placeholder="Ingresa tu institución"></input><input type="submit" value="Guardar"></input><button onClick={()=>ShowMod(3)}>Cancelar</button>{errores.institucion&& <Error>{errores.institucion}</Error>}</ND>:null}
                    {isMounted &&<ReactTooltip id="dscTooltipDec" place='bottom' type='info'>
                        Click aqui para editar
                    </ReactTooltip>}
                </RolCarr>
                {empresaUsuario?
                <Empresa>
                    <div>{empresaUsuario} </div> <Cargo>({cargoUsuario})</Cargo>
                </Empresa>:null
                }
                
                <Nivel
                    nivel={Math.trunc(puntajeUsuario/100)}
                    avance={puntajeUsuario%100}
                ></Nivel>
                <Coins>
                    <div><img src={`${prefix}/imgs/innocoin1.png`}></img> {IncsUsuario} Incs</div>
                    <div><img src={`${prefix}/imgs/ptvictory.png`}></img> {PtsVictoriaUsuario} PV</div>
                </Coins>
                
            </div>
            <Info
                idUsuario={idUsuario}
                infoUsuario={infoUsuario}
                hojadeVidaUsuario={hojadeVidaUsuario}
                hobbiesUsuario={hobbiesUsuario}
                contactoUsuario={contactoUsuario}
                lenguajesUsuario={lenguajesUsuario}    
            ></Info>
        </OutContainer>
    );
}
 
export default MainComp;