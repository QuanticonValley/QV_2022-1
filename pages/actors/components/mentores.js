import { prefix } from "../../../utils/prefix";
import ReactPlayer from 'react-player'
import { getMentores } from "../../../public/data";
import styled from "styled-components";
import { useState } from "react";

const Content=styled.div`
    height:30em;
    display:flex;
    text-align:center;
    @media screen and (max-width: 1300px) {
        flex-direction: column;
        height:40em;
    }
`
const Video=styled.div`
    width:70%;
    @media screen and (max-width: 1300px) {
        width:100%;
        height:900px;
    }
`
const Nav=styled.div`
    width:35%;
    height:100%;
    overflow:auto;
    padding:10px;
    border-radius:10px;
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
    @media screen and (max-width: 1300px) {
        width:100%;
        height:550px;
    }
`
const Imagen= styled.img`
    cursor: pointer;
    max-width:95%;
    margin:5px;
    :hover {
		transform: scale(1.05);
	}
`



const Mentores = () => {
    const mentores = getMentores();
    const [mentor, setMentor]= useState(0);
    
    return (
    <Content>
        <Video>
            {mentores?
            <ReactPlayer
            url = {mentores[mentor][0]}
            className='react-player'
            width='100%'
            height='100%'
            controls
            ></ReactPlayer>:null}
        </Video>
        <Nav>
            {mentores.map((ment,index)=><Imagen onClick={()=>setMentor(index)} key={index} src={`${prefix}/imgs/ment/${ment[1]}`}></Imagen>)}
        </Nav>
    </Content>);
}
 
export default Mentores;