import styled from 'styled-components'
import { prefix } from '../../../utils/prefix.js'
import { statePiso } from '../../../public/data'
import { useState, useEffect } from 'react'

const Container = styled.div`
	
`
const Organiz = styled.div`
	display:flex;
	flex-wrap:wrap;
	justify-content: space-between;
`
const Objeto = styled.div`
	width:350px;
`
const Subtitle = styled.h3`
   white-space: pre-wrap;
	margin-left:10px;
	color:${p => p.tipo === 1 ? "black" : "#172bef"};
	@media screen and (max-width: 800px) {
		font-size:17px;
	}
`
const Content = styled.p`
	margin-left:20px;
	transition:0.2s all;
	:hover {
		margin-left:25px;
	}
	@media screen and (max-width: 800px) {
		font-size:14px;
	}
   white-space: pre-wrap;
`
const Content2 = styled.p`
	margin-left:20px;
	@media screen and (max-width: 800px) {
		font-size:14px;
	}
   white-space: pre-wrap;
`
const Logo = styled.img`
	width: 44px;
	@media screen and (max-width: 800px) {
		width:35px;
	}
`
const TituloDescr = ({ data }) => {
   if (data[1].length == 0) return null;
   return (<Objeto>
      <Subtitle>{data[0]}</Subtitle>
      {data[1].map(i =>
         <Content2 key={i}>

            <p><b><Logo src={`${prefix}/imgs/roles/TODOS.png`}></Logo> {i[0]} </b>{i[1]}</p>
         </Content2>
      )}
   </Objeto>)
}

const TituloEnlaces = ({ data, tipo = 0 }) => {
   if (data[1].length == 0) return null;
   return (<Objeto>
      <Subtitle tipo={tipo}>{data[0]}</Subtitle>
      {data[1].map(i =>
         <Content key={i}>
            {i[1]
               ? <a href={i[1]} target="_blank" rel="noreferrer">
                  {i[2] === "" ? <Logo src={`${prefix}/imgs/roles/TODOS.png`}></Logo> :
                     <Logo src={`${prefix}/imgs/roles/${i[2]}.png`}></Logo>}
                  {i[0]}
               </a>
               : <a onClick={() => { alert("El contenido estará disponible próximamente") }}>
                  {i[2] === "" ? <Logo src={`${prefix}/imgs/roles/TODOS.png`}></Logo> :
                     <Logo src={`${prefix}/imgs/roles/${i[2]}.png`}></Logo>}
                  {i[0]}
               </a>
            }

         </Content>
      )}
   </Objeto>)
}

const TituloEnlaces1 = ({ data, tipo = 0 }) => {
   if (data[1].length == 0) return null;
   return (<Objeto>
      <Subtitle tipo={tipo}>{data[0]}</Subtitle>
      {data[1].map(i =>
         <Content key={i}>
            {i[4]
               ? i[2] == ''
                  ? <a>
                     {
                        i[3] === ""
                           ? <Logo src={`${prefix}/imgs/roles/TODOS.png`}></Logo>
                           : <Logo src={`${prefix}/imgs/roles/${i[3]}.png`}></Logo>
                     }
                     <b>{i[0]}</b>
                     <a onClick={() => { alert("El contenido estará disponible próximamente"); }}> {i[1]}</a>
                  </a>
                  : i[2] == 'N/A' | i[2] == 'n/a'
                     ? <a>
                        {
                           i[3] === ""
                              ? <Logo src={`${prefix}/imgs/roles/TODOS.png`}></Logo>
                              : <Logo src={`${prefix}/imgs/roles/${i[3]}.png`}></Logo>
                        }
                        <b>{i[0]}</b><a> {i[1]}</a>
                     </a>
                     : <a>
                        {
                           i[3] === ""
                              ? <Logo src={`${prefix}/imgs/roles/TODOS.png`}></Logo>
                              : <Logo src={`${prefix}/imgs/roles/${i[3]}.png`}></Logo>
                        }
                        <b>{i[0]}</b>
                        <a href={i[2]} target="_blank" rel="noreferrer">
                           &nbsp;{i[1]}
                        </a>
                     </a>
               : i[2] == ''
                  ? <a onClick={() => { alert("El contenido estará disponible próximamente"); }}>
                     {
                        i[3] === ""
                           ? <Logo src={`${prefix}/imgs/roles/TODOS.png`}></Logo>
                           : <Logo src={`${prefix}/imgs/roles/${i[3]}.png`}></Logo>}
                     <b>{i[0]}</b> {i[1]
                     }
                  </a>
                  : i[2] == 'N/A' | i[2] == 'n/a'
                     ? <a>
                        {
                           i[3] === ""
                              ? <Logo src={`${prefix}/imgs/roles/TODOS.png`}></Logo>
                              : <Logo src={`${prefix}/imgs/roles/${i[3]}.png`}></Logo>
                        }
                        <b>{i[0]}</b><a> {i[1]}</a>
                     </a>
                     : <a href={i[2]} target="_blank" rel="noreferrer">
                        {
                           i[3] === ""
                              ? <Logo src={`${prefix}/imgs/roles/TODOS.png`}></Logo>
                              : <Logo src={`${prefix}/imgs/roles/${i[3]}.png`}></Logo>
                        }
                        <b>{i[0]}</b> {i[1]}
                     </a>
            }
            {i[4] ? i[5] == '' ? <a onClick={() => alert("El contenido estará disponible próximamente")}><br />&nbsp;{i[4]}</a> : i[5] == ''
               ? <a><br />&nbsp;{i[4]}</a> : <a href={i[5]} target="_blank" rel="noreferrer"><br />&nbsp;{i[4]}</a> : null}
            {i[6] ? i[7] == '' ? <a onClick={() => alert("El contenido estará disponible próximamente")}><br />&nbsp;{i[6]}</a> : i[7] == ''
               ? <a><br />&nbsp;{i[6]}</a> : <a href={i[7]} target="_blank" rel="noreferrer"><br />&nbsp;{i[6]}</a> : null}
            {i[8] ? i[9] == '' ? <a onClick={() => alert("El contenido estará disponible próximamente")}><br />&nbsp;{i[8]}</a> : i[9] == ''
               ? <a><br />&nbsp;{i[8]}</a> : <a href={i[9]} target="_blank" rel="noreferrer"><br />&nbsp;{i[8]}</a> : null}
            {i[10] ? i[11] == '' ? <a onClick={() => alert("El contenido estará disponible próximamente")}><br />&nbsp;{i[10]}</a> : i[11] == ''
               ? <a><br />&nbsp;{i[10]}</a> : <a href={i[11]} target="_blank" rel="noreferrer"><br />&nbsp;{i[10]}</a> : null}
            {i[12] ? i[13] == '' ? <a onClick={() => alert("El contenido estará disponible próximamente")}><br />&nbsp;{i[12]}</a> : i[13] == ''
               ? <a><br />&nbsp;{i[12]}</a> : <a href={i[13]} target="_blank" rel="noreferrer"><br />&nbsp;{i[12]}</a> : null}
            {i[14] ? i[15] == '' ? <a onClick={() => alert("El contenido estará disponible próximamente")}><br />&nbsp;{i[14]}</a> : i[15] == ''
               ? <a><br />&nbsp;{i[14]}</a> : <a href={i[15]} target="_blank" rel="noreferrer"><br />&nbsp;{i[14]}</a> : null}
            {i[16] ? i[17] == '' ? <a onClick={() => alert("El contenido estará disponible próximamente")}><br />&nbsp;{i[16]}</a> : i[17] == ''
               ? <a><br />&nbsp;{i[16]}</a> : <a href={i[17]} target="_blank" rel="noreferrer"><br />&nbsp;{i[16]}</a> : null}
            {i[18] ? i[19] == '' ? <a onClick={() => alert("El contenido estará disponible próximamente")}><br />&nbsp;{i[18]}</a> : i[19] == ''
               ? <a><br />&nbsp;{i[18]}</a> : <a href={i[19]} target="_blank" rel="noreferrer"><br />&nbsp;{i[18]}</a> : null}
            {i[20] ? i[21] == '' ? <a onClick={() => alert("El contenido estará disponible próximamente")}><br />&nbsp;{i[20]}</a> : i[21] == ''
               ? <a><br />&nbsp;{i[20]}</a> : <a href={i[21]} target="_blank" rel="noreferrer"><br />&nbsp;{i[20]}</a> : null}
            {i[22] ? i[23] == '' ? <a onClick={() => alert("El contenido estará disponible próximamente")}><br />&nbsp;{i[22]}</a> : i[23] == ''
               ? <a><br />&nbsp;{i[22]}</a> : <a href={i[23]} target="_blank" rel="noreferrer"><br />&nbsp;{i[22]}</a> : null}
         </Content>
      )}
   </Objeto>)
}

const Minicard = ({ data0, data1, data2, data3 }) => {
   if (data1[1].length == 0 && data2[1].length == 0 && data3[1].length == 0) return null;
   return (<Objeto>
      <Subtitle>{data0[0]}</Subtitle>
      <TituloEnlaces data={data1} tipo={1}></TituloEnlaces>
      <TituloEnlaces data={data2} tipo={1}></TituloEnlaces>
      <TituloEnlaces data={data3} tipo={1}></TituloEnlaces>
   </Objeto>)

}

const Resources = ({ tipo, data }) => {
   const [Mounted, IsMounted] = useState(false)
   useEffect(() => {
      IsMounted(true)
   })
   return (
      <Container>
         {Mounted
            ? <div>
               {tipo === 1 ?
                  <Organiz>
                     {data["1_1"] ? <TituloEnlaces1 data={data["1_1"]}></TituloEnlaces1> : null}
                     {data["1_2"] ? <TituloEnlaces1 data={data["1_2"]}></TituloEnlaces1> : null}
                     {data["1_3"] ? <TituloEnlaces1 data={data["1_3"]}></TituloEnlaces1> : null}
                     {data["1_4"] ? <TituloEnlaces1 data={data["1_4"]}></TituloEnlaces1> : null}
                     {data["1_5"] ? <TituloEnlaces1 data={data["1_5"]}></TituloEnlaces1> : null}
                     {data["1_6"] ? <TituloEnlaces1 data={data["1_6"]}></TituloEnlaces1> : null}
                     {data["1_7"] ? <TituloEnlaces1 data={data["1_7"]}></TituloEnlaces1> : null}
                     {/* <TituloDescr data={data["1_1"]}></TituloDescr> */}
                     {/* <Minicard data0={data["1_3"]} data1={data["1_3_1"]} data2={data["1_3_2"]} data3={data["1_3_3"]}></Minicard> */}
                  </Organiz>
                  : null}
               {/* {tipo===2?
				<Organiz>
					<TituloDescr data={data["2_1"]}></TituloDescr>
					<TituloEnlaces data={data["2_2"]}></TituloEnlaces>
					<Minicard data0={data["2_3"]} data1={data["2_3_1"]} data2={data["2_3_2"]} data3={data["2_3_3"]}></Minicard>
					<TituloEnlaces data={data["2_4"]}></TituloEnlaces>
				</Organiz>
				:null} */}
               {tipo === 3 ?
                  <Organiz>
                     <TituloEnlaces data={data["3"]}></TituloEnlaces>
                     {data[4] ? <TituloEnlaces data={data["4"]}></TituloEnlaces> : null}
                     {data[5] ? <TituloEnlaces data={data["5"]}></TituloEnlaces> : null}
                     {data[6] ? <TituloEnlaces data={data["6"]}></TituloEnlaces> : null}
                     {data[7] ? <TituloEnlaces data={data["7"]}></TituloEnlaces> : null}
                     {data[8] ? <TituloEnlaces data={data["8"]}></TituloEnlaces> : null}
                     {data[9] ? <TituloEnlaces data={data["9"]}></TituloEnlaces> : null}
                     {data[10] ? <TituloEnlaces data={data["10"]}></TituloEnlaces> : null}
                     {data[11] ? <TituloEnlaces data={data["11"]}></TituloEnlaces> : null}
                  </Organiz>
                  : null}

            </div>
            : null}
      </Container>
   );
}

export default Resources
