import styled from "styled-components";
import Nivel from "./nivel";
import Info from "./info";
import { useState } from "react";
import validadorFormularios from "../../../utils/validadorFormularios";
import validarCambios from "../../../utils/validarCambios";
import ReactTooltip from "react-tooltip";

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
const ND=styled.form`
    background-color:#172bef;
    color:white;
    padding:10px;
    position: absolute;
    border-radius: 10px;
    text-align: right;

`

const MainComp = (val) => {
    let {idUsuario,nombreUsuario,rolUsuario,carreraUsuario,empresaUsuario,cargoUsuario,puntajeUsuario,infoUsuario,hojadeVidaUsuario,contactoUsuario,hobbiesUsuario,lenguajesUsuario,facultadUsuario,institucionUsuario,IncsUsuario,PtsVictoriaUsuario}=val;
    const Estado_Inicial={
        id:idUsuario,
        nombre:nombreUsuario,
        carrera:carreraUsuario,
        empresa:empresaUsuario,
        cargo:cargoUsuario,
        info:infoUsuario,
        hojadeVida:hojadeVidaUsuario,
        contacto:contactoUsuario,
        hobbies:hobbiesUsuario,
        lenguajes:lenguajesUsuario,
        facultad:facultadUsuario,
        institucion:institucionUsuario
    }
    const {valores,errores,handleSubmit,handleChange}= validadorFormularios(Estado_Inicial,validarCambios,GuardarCambios);
    const {id,nombre,carrera,empresa,cargo,info,hojadeVida,contacto,hobbies,lenguajes,facultad,institucion}=valores;
    function GuardarCambios(){
        console.log("Cambios Realizados");
        carreraUsuario=carrera;
        if(depend1)setDepend1(!depend1);
        if(depend2)setDepend2(!depend2);
        if(depend3)setDepend3(!depend3);
    }
    function ShowMod(n){
        if(n===1){setDepend1(!depend1)}
        if(n===2){setDepend2(!depend2)}
        if(n===3){setDepend3(!depend3)}
    }
    const [depend1,setDepend1]=useState(false);
    const [depend2,setDepend2]=useState(false);
    const [depend3,setDepend3]=useState(false);
    return (  
        <OutContainer>
            <div>
                <Nombre>
                   {nombreUsuario} 
                </Nombre>
                <RolCarr>
                    {carreraUsuario?<b onClick={()=>ShowMod(1)} data-tip data-for="dscTooltipDec">{rolUsuario} -{carreraUsuario}</b>:
                    rolUsuario==="Estudiante"?<form onSubmit={handleSubmit} noValidate><input type="text" name="carrera" value={carrera} onChange={handleChange} placeholder="Ingresa tu carrera"></input><input type="submit" value="Guardar"></input></form>:null}
                    {facultad?<b onClick={()=>ShowMod(2)} data-tip data-for="dscTooltipDec">{rol} -{facultad}</b>:
                    rolUsuario==="Mentor"?<form onSubmit={handleSubmit} noValidate><input type="text" name="facultad" value={facultad} onChange={handleChange} placeholder="Ingresa tu facultad"></input><input type="submit" value="Guardar"></input></form>:null}
                    {institucion?<b onClick={()=>ShowMod(3)} data-tip data-for="dscTooltipDec">{rol} -{institucion}</b>:
                    rolUsuario==="Explorador"?<form onSubmit={handleSubmit} noValidate><input type="text" value={institucion} onChange={handleChange} name="institucion" placeholder="Ingresa tu institución"></input><input type="submit" value="Guardar"></input></form>:null}

                    {depend1?<ND onSubmit={handleSubmit} noValidate><input type="text" name="carrera" value={carrera} onChange={handleChange} placeholder="Ingresa tu carrera"></input><input type="submit" value="Guardar"></input><button onClick={()=>ShowMod(1)}>Cancelar</button></ND>:null}
                    {depend2?<ND onSubmit={handleSubmit} noValidate><input type="text" name="facultad" value={facultad} onChange={handleChange} placeholder="Ingresa tu facultad"></input><input type="submit" value="Guardar"></input><button onClick={()=>ShowMod(2)}>Cancelar</button></ND>:null}
                    {depend3?<ND onSubmit={handleSubmit} noValidate><input type="text" name="institucion" value={institucion} onChange={handleChange} placeholder="Ingresa tu institución"></input><input type="submit" value="Guardar"></input><button onClick={()=>ShowMod(3)}>Cancelar</button></ND>:null}
                    <ReactTooltip id="dscTooltipDec" place='bottom' type='info'>
                        Click aqui para cambiar
                    </ReactTooltip>
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
            </div>
            <Info></Info>
        </OutContainer>
    );
}
 
export default MainComp;