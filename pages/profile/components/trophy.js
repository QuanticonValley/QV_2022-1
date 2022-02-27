import styled from "styled-components";
import { prefix } from "../../../utils/prefix";

const Image = styled.div`
	height:60px;
    width:130px;
    background-color:#bbbbbb;
    border-radius: 10px;
    margin:10px;
`
const Trofeo=styled.img`
    height:60px;
    width:130px;
    border-radius: 10px;
    margin:10px;
    transition:.3s all;
    :hover {
		transform: scale(1.2);
	}
`
const Trophy = ({num}) => {
    return ( 
        <div>
            {num?<Trofeo src={`${prefix}/imgs/trophy/${num}.png`}></Trofeo>
            :<Image></Image>
            }
            

        </div>
     );
}
 
export default Trophy;