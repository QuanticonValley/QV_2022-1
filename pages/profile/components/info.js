import styled from "styled-components";
import { useState } from "react";
import ProfileCards from "./profCards";

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
`
const Contenido= styled.div`
    margin-top:30px;
`
const Cards= styled.div`
    margin-top:20px;    
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 800px) {
		margin-bottom:90px;
	}
`

const Info = () => {
    const [selected,setSelected]= useState(true);
    function cambio(opti){
        setSelected(opti);
    }
    return ( 
    <div>
        <Nav>
            <Option selected={selected} onClick={() =>cambio(true)}>INFORMACIÓN</Option>
            <Option selected={!selected} onClick={() =>cambio(false)}>HOJA DE VIDA</Option>
        </Nav>
        {selected?
        (<Contenido selected={selected}>Este es un texto de descripción muy largo</Contenido>)
        :
        (<Contenido selected={selected}>ESTA ES MI HOJA DE VIDA</Contenido>)
        }
        <Cards>
            <ProfileCards title={"Contacto"} data={"018000123456"}></ProfileCards>
            <ProfileCards title={"Hobbies"} data={"Programar, dibujar"}></ProfileCards>
            <ProfileCards title={"Lenguajes"} data={"HTML,CSS,JS"}></ProfileCards>
        </Cards>
        
    </div> );
}
 
export default Info;