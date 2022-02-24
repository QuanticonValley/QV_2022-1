import styled from "styled-components";
import Nivel from "./nivel";
import Info from "./info";


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
`
const Empresa = styled.div`
    font-size:1.1rem;
    display:flex;
    font-weight: 500;
`
const Cargo= styled.div`
    color: #006FFF;
`

const MainComp = () => {
    let nombre= "Berny Alejandro Orozco Córdoba";
    let rol= "Estudiante";
    let carrera= "Ingeniería de Sistemas";
    let empresa= "Universidad Nacional de Colombia";
    let cargo= "Desarrollador Frontend";
    let puntaje= 2522;
    return (  
        <OutContainer>
            <div>
                <Nombre>
                   {nombre} 
                </Nombre>
                <RolCarr>
                    {rol} - {carrera}
                </RolCarr>
                <Empresa>
                    <div>{empresa} </div> <Cargo>({cargo})</Cargo>
                </Empresa>
                <Nivel
                    nivel={Math.trunc(puntaje/100)}
                    avance={puntaje%100}
                ></Nivel>
            </div>
            <Info></Info>
        </OutContainer>
    );
}
 
export default MainComp;