import styled from "styled-components";
import { useState } from "react";
import ReactTooltip from 'react-tooltip'

const Imagen = styled.div`
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
    const [open, setOpen]= useState(false);
    function mostrarInput(){
        setOpen(!open);
    }
    //Funcion que se ejecuta en el SubmitForm y debe subir la foto al usuario de idUsuario, ejecutar mostrarInput y actualizar la foto



    return ( 
    <div>
        {fotoUsuario?
        <Photo2 src={fotoUsuario} data-tip data-for="dscTooltipPhoto" onClick={mostrarInput}></Photo2>
        :
        <div>
            <Imagen data-tip data-for="dscTooltipPhoto" onClick={mostrarInput}></Imagen>
            
        </div>
        }
        {open?
        <ND action="">
            <input type="file" name="foto" accept="image/png, image/jpeg"></input>
            <div>
                <input type="submit" value="Enviar" onClick={mostrarInput}></input>
                <button onClick={mostrarInput}>Cancelar</button>
            </div>
            
        </ND>
        :null
        }
        <ReactTooltip id="dscTooltipPhoto" place='right' type='info'>
			Click aqui para cambiar tu foto
		</ReactTooltip>

    </div>
    );
}
 
export default Photo;