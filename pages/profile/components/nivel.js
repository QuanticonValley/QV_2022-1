import styled from "styled-components";
import { useState } from "react";

const OutContainer= styled.div`
    margin-top: 20px;
    width: 500px;
    @media screen and (max-width: 1500px) {
		width:80%;
	}
`
// const [tam2, setTam2]= useState(30);
var tam= 30;
const Barra= styled.div`
    background-color: #172BEF;
    border-radius: 10px;
    width: ${p => p.avance}%;
    height: 18px;
`
const ExtBarra= styled.div`
    border: 2px solid #172BEF;
    padding: 2px;
    border-radius: 10px;
    width: 100%;
`
const Titulo = styled.div`
    font-size:1rem;
    font-weight: 700;
`
const Nivel = ({nivel, avance}) => {
    return (
        <OutContainer>
            <Titulo>Nivel {nivel}</Titulo>
            <ExtBarra><Barra avance={avance}></Barra></ExtBarra>
            
        </OutContainer>
      );
}


 
export default Nivel;