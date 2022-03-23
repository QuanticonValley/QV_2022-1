import styled from 'styled-components'
import { prefix } from '../../../utils/prefix.js'
import { statePiso } from '../../../public/data'
import { useState, useEffect } from 'react'

const Container = styled.div`
	
`
const Organiz=styled.div`
	display:flex;
	flex-wrap:wrap;
	justify-content: space-between;
`
const Objeto=styled.div`
	width:350px;
`
const Subtitle=styled.h3`
	margin-left:10px;
	color:${p=>p.tipo===1 ?"black":"#172bef"};
`
const Content=styled.p`
	margin-left:20px;
	transition:0.2s all;
	:hover {
		margin-left:25px;
	}
`
const Content2=styled.p`
	margin-left:20px;
`
const TituloDescr=({data})=>{
	if(data[1].length==0)return null;
	return (<Objeto>
		<Subtitle>{data[0]}</Subtitle>
		{data[1].map(i=>
		<Content2 key={i}>
			
			<p><b><img src={`${prefix}/imgs/roles/TODOS.png`}></img> {i[0]}: </b>{i[1]}</p>
		</Content2>
		)}
	</Objeto>)
}
const TituloEnlaces=({data, tipo=0})=>{
	if(data[1].length==0)return null;
	return(<Objeto>
		<Subtitle tipo={tipo}>{data[0]}</Subtitle>
		{data[1].map(i=>
		<Content key={i}>
			<a href={i[1]} target="_blank" rel="noreferrer">
				{i[2]===""?<img src={`${prefix}/imgs/roles/TODOS.png`}></img>:
				<img src={`${prefix}/imgs/roles/${i[2]}.png`}></img>} 
				{i[0]}
			</a>
		</Content>
		)}
	</Objeto>)
}
const Minicard=({data0,data1,data2,data3})=>{
	if(data1[1].length==0&&data2[1].length==0&&data3[1].length==0)return null;
	return(<Objeto>
		<Subtitle>{data0[0]}</Subtitle>
		<TituloEnlaces data={data1} tipo={1}></TituloEnlaces>
		<TituloEnlaces data={data2} tipo={1}></TituloEnlaces>
		<TituloEnlaces data={data3} tipo={1}></TituloEnlaces>
	</Objeto>)

}
const Resources = ({tipo, data}) => {
	const [Mounted, IsMounted]=useState(false)
	useEffect(()=>{
		IsMounted(true)
	},)
	return (
		<Container>
			{Mounted
			?<div>
				{tipo===1?
				<Organiz>
					<TituloDescr data={data["1_1"]}></TituloDescr>
					<TituloEnlaces data={data["1_2"]}></TituloEnlaces>
					<Minicard data0={data["1_3"]} data1={data["1_3_1"]} data2={data["1_3_2"]} data3={data["1_3_3"]}></Minicard>
					<TituloEnlaces data={data["1_4"]}></TituloEnlaces>
				</Organiz>
				:null}
				{tipo===2?
				<Organiz>
					<TituloDescr data={data["2_1"]}></TituloDescr>
					<TituloEnlaces data={data["2_2"]}></TituloEnlaces>
					<Minicard data0={data["2_3"]} data1={data["2_3_1"]} data2={data["2_3_2"]} data3={data["2_3_3"]}></Minicard>
					<TituloEnlaces data={data["2_4"]}></TituloEnlaces>
				</Organiz>
				:null}
				{tipo===3?
				<Organiz>
					<TituloEnlaces data={data["3"]}></TituloEnlaces>
				</Organiz>
				:null}
				
			</div>
			:null}
		</Container>
	);
}

export default Resources
