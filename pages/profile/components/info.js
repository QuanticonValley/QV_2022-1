import styled from "styled-components";
import { useState,useEffect } from "react";
import ProfileCards from "./profCards";
import validadorFormularios from "../../../utils/validadorFormularios";
import ReactTooltip from "react-tooltip";
import validarCambios2 from "../../../utils/validarCambios2";
import Pdf from "../../../UIcomponents/pdf";

const Nav= styled.div`
    display:flex;
    margin-top: 30px;
`
const Option= styled.div`
    font-size:1.2rem;
    font-weight: 700;
    margin-right: 10px;
    margin-bottom: 10px;
    border-bottom: ${p=>p.selected ?'3px solid #172BEF':'0px'};
    :hover{
		cursor: pointer;
	}
    @media screen and (max-width: 800px) {
		font-size:1rem;
	}
`
const Contenido= styled.div`
    margin-top:30px;
    cursor: pointer;
`
const Cards= styled.div`
    margin-top:20px;    
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 800px) {
		margin-bottom:90px;
	}
`
const ND=styled.form`
    background-color:#172bef;
    color:white;
    padding:10px;
    position: absolute;
    border-radius: 10px;
    text-align: right;
    width: 350px;
    z-index:5;
    @media screen and (max-width: 800px) {
		position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
	}
`
const OutCard=styled.div`
    cursor:pointer;
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

const Info = ({idUsuario,infoUsuario,hojadeVidaUsuario,hobbiesUsuario,contactoUsuario,lenguajesUsuario}) => {
    const [Mounted,setIsMounted]=useState(false);
    useEffect(() => {
        setIsMounted(true);
    },[]);
    const [selected,setSelected]= useState(true);
    function cambio(opti){
        setSelected(opti);
    }
    const [inf,setInf]=useState(false);
    const [hojadV,sethojadV]=useState(false);
    const [cont,setCont]=useState(false);
    const [hobbi,setHobbi]=useState(false);
    const [leng,setLeng]=useState(false);
    const Estado_Inicial={
        id:idUsuario,
        info: infoUsuario,
        hojadeVida: "",
        hobbies: hobbiesUsuario,
        contacto: contactoUsuario,
        lenguajes: lenguajesUsuario
    }
    const {valores,errores,handleSubmit,handleChange}= validadorFormularios(Estado_Inicial,validarCambios2,GuardarCambios);
    function GuardarCambios(){
        //Hat un bug en que si se modifica la hoja de vida, al hacer
        //Update nuevamente crashea la pagina, en teoria se soluciona
        //Luego de hacer el Router.push


        //Usar NuevosValores para hacer el update
        let NuevosValores=valores;
        if(hojadeVida===""){
            NuevosValores.hojadeVida=hojadeVidaUsuario;
        }
        //Aqui va el update
        console.log(NuevosValores);
        inf?setInf(false):null;
        hojadV?sethojadV(false):null;
        cont?setCont(false):null;
        hobbi?setHobbi(false):null;
        leng?setLeng(false):null;
        //Recarga la pagina con Router.push
    }
    let {id,info,hojadeVida,hobbies,contacto,lenguajes}=valores;
    return ( 
    <div>
        <Nav>
            <Option selected={selected} onClick={() =>cambio(true)}>INFORMACIÓN</Option>
            <Option selected={!selected} onClick={() =>cambio(false)}>HOJA DE VIDA</Option>
            {inf?<ND onSubmit={handleSubmit} noValidate><input type="text" name="info" value={info} onChange={handleChange} placeholder="Ingresa tu descripción"></input><input type="submit" value="Guardar"></input><button onClick={()=>setInf(false)}>Cancelar</button>{errores.info&& <Error>{errores.info}</Error>}</ND>:null}
            {hojadV?<ND onSubmit={handleSubmit} noValidate><input type="file" name="hojadeVida" value={hojadeVida} onChange={handleChange} placeholder="Ingresa tu hoja de vida" accept="application/pdf"></input><div><input type="submit" value="Guardar"></input><button onClick={()=>sethojadV(false)}>Cancelar</button></div></ND>:null}
        </Nav>
        {selected?
        (infoUsuario?<Contenido data-tip data-for="dscTooltipInf" selected={selected} onClick={()=>setInf(!inf)}>{infoUsuario}</Contenido>:<Contenido data-tip data-for="dscTooltipInf" selected={selected} onClick={()=>setInf(!inf)}>En esta sección va tu descripción personal, puedes escribir hasta 1000 caracteres! haz click aqui para ingresarla</Contenido>)
        :
        (hojadeVidaUsuario?<Contenido data-tip data-for="dscTooltipInf" selected={selected} onClick={()=>sethojadV(!hojadV)}><Pdf file={hojadeVidaUsuario} choice={1}></Pdf></Contenido>:<Contenido data-tip data-for="dscTooltipInf" selected={selected} onClick={()=>sethojadV(!hojadV)}>En esta sección va tu hoja de vida, haz click aqui para ingresarla (Solo se permite en formato PDF)</Contenido>)
        }
        
        {cont?<ND onSubmit={handleSubmit} noValidate><input type="text" name="contacto" value={contacto} onChange={handleChange} placeholder="Ingresa tu contacto"></input><input type="submit" value="Guardar"></input><button onClick={()=>setCont(false)}>Cancelar</button>{errores.contacto&& <Error>{errores.contacto}</Error>}</ND>:null}
        {hobbi?<ND onSubmit={handleSubmit} noValidate><input type="text" name="hobbies" value={hobbies} onChange={handleChange} placeholder="Ingresa tus hobbies"></input><input type="submit" value="Guardar"></input><button onClick={()=>setHobbi(false)}>Cancelar</button>{errores.hobbies&& <Error>{errores.hobbies}</Error>}</ND>:null} 
        {leng?<ND onSubmit={handleSubmit} noValidate><input type="text" name="lenguajes" value={lenguajes} onChange={handleChange} placeholder="Ingresa tus lenguajes"></input><input type="submit" value="Guardar"></input><button onClick={()=>setLeng(false)}>Cancelar</button>{errores.lenguajes&& <Error>{errores.lenguajes}</Error>}</ND>:null}

        <Cards>
            {contactoUsuario?<OutCard data-tip data-for="dscTooltip" onClick={()=>setCont(!cont)}><ProfileCards title={"Contacto"} data={contactoUsuario}></ProfileCards></OutCard>:<OutCard data-tip data-for="dscTooltip" onClick={()=>setCont(!cont)}><ProfileCards title={"Contacto"} data={"En esta sección van tus medios de contacto(telefono, celular...), Haz click aqui para editar"} ></ProfileCards></OutCard>}

            {hobbiesUsuario?<OutCard data-tip data-for="dscTooltip" onClick={()=>setHobbi(!hobbi)}><ProfileCards title={"Hobbies"} data={hobbiesUsuario} ></ProfileCards></OutCard >:<OutCard data-tip data-for="dscTooltip" onClick={()=>setHobbi(!hobbi)}><ProfileCards title={"Hobbies"} data={"En esta sección van tus hobbies, Haz click aqui para editar"} ></ProfileCards></OutCard>}

            {lenguajesUsuario?<OutCard data-tip data-for="dscTooltip" onClick={()=>setLeng(!leng)}><ProfileCards title={"Lenguajes"} data={lenguajesUsuario} ></ProfileCards></OutCard>:<OutCard data-tip data-for="dscTooltip" onClick={()=>setLeng(!leng)}><ProfileCards title={"Lenguajes"} data={"En esta sección van tus idiomas, Haz click aqui para editar"} ></ProfileCards></OutCard>}
        </Cards>
        
        {Mounted &&<ReactTooltip id="dscTooltip" place='bottom' type='info'>
           Click aqui para editar
        </ReactTooltip>}
        {Mounted &&<ReactTooltip id="dscTooltipInf" place='top' type='info'>
           Click aqui para ingresar nueva información
        </ReactTooltip>}
    </div> );
}
 
export default Info;