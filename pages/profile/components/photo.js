import styled from "styled-components";
import { useState, useEffect } from "react";
import ReactTooltip from 'react-tooltip'
import validadorFormularios from "../../../utils/validadorFormularios";

const Imagen = styled.div`
	height:200px;
    width:160px;
    background-color:#bbbbbb;
    border-radius:5px;
    border: 2px solid #172bef;
`
const Photo2 = styled.img`
	height:220px;
    width:180px;
    background-color:#bbbbbb;
    border-radius:5px;
    border: 2px solid #172bef;
    @media screen and (max-width: 1500px) {
		height: 200px;
        width: 160px;
	}
`
const ND=styled.form`
    background-color:#172bef;
    color:white;
    padding:10px;
    position: absolute;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    text-align: right;
`
const Photo = ({idUsuario, fotoUsuario}) => {
    const [isMounted,setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    },[]);
    const [open, setOpen]= useState(false);
    function mostrarInput(){
        setOpen(!open);
    }
    //Funcion que se ejecuta en el SubmitForm y debe subir la foto al usuario de idUsuario, ejecutar mostrarInput y actualizar la foto
    const Estado_Inicial={
        id:idUsuario,
        foto:""
    }
    const {valores,errores,handleSubmit,handleChange}= validadorFormularios(Estado_Inicial,validarFoto,GuardarFoto);
    const {id,foto}=valores;
    function validarFoto(){
        let errores={};
        return errores;
    }
    function GuardarFoto(){
        //Petición de update de la foto

        //Hacer un Router.push
        mostrarInput();
    }
    return ( 
    <div data-tip data-for="dscTooltipPhoto">
        {fotoUsuario?
        <Photo2 src={fotoUsuario}  onClick={mostrarInput}></Photo2>
        :
        <Imagen  onClick={mostrarInput}></Imagen>
        }
        {open?
        <ND onSubmit={handleSubmit}>
            <input type="file" name="foto" value={foto} accept="image/png, image/jpeg" onChange={handleChange}></input>
            <div>
                <input type="submit" value="Enviar" ></input>
                <button onClick={mostrarInput}>Cancelar</button>
            </div>
            
        </ND>
        :null
        }
        {isMounted &&<ReactTooltip id="dscTooltipPhoto" place='bottom' type='info'>
			Click aqui para cambiar tu foto
		</ReactTooltip>}

    </div>
    );
}
 
export default Photo;