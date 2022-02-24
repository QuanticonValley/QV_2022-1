import styled from "styled-components";
import Trophy from "./trophy";
import Photo from "./photo";

const OutContainer = styled.div`
	display: flex;
    flex-direction: column;
    padding:10px;
    height: 90%;
    @media screen and (max-width: 1500px) {
		flex-direction: row;
        height: 40%;
	}
`
const Img= styled.div`
    height: 220px;

`
const Trop = styled.div`
    margin-top: 30px;
    text-align: center;
    background-color: white;
    height: 300px;
    border-radius: 10px;
    overflow: auto;
    @media screen and (max-width: 1500px) {
		height: 150px;
        margin-top: 0px;
        margin-left: 3%;
        padding:5px;
	}
    ::-webkit-scrollbar-track {
		border: none;
		padding: 10px 0;
		margin: 10px 0;
		background-color: none;
	}
	::-webkit-scrollbar {
		width: 5px;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #ccc;
		border: 1px solid rgba(0,0,0,0);
	}
`
const Trofeos= styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1500px) {
		flex-direction: row;
        justify-content: center;
	}
`

const Navbar = () => {
    return (  
        <OutContainer>
            <Img>
                <Photo></Photo>
            </Img>
            
            <Trop>
                <h5>Trofeos recientes</h5>
                <Trofeos>
                    <Trophy></Trophy>
                    <Trophy></Trophy>
                    <Trophy></Trophy>
                    <Trophy></Trophy>
                    <Trophy></Trophy>
                    <Trophy></Trophy>
                    <Trophy></Trophy>
                </Trofeos>
            </Trop>
        </OutContainer>
    );
}
 
export default Navbar;