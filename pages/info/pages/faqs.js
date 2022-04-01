import { useState } from 'react'
import styled from 'styled-components';

import { getAsesorFaq } from '../../../public/data'

const Cont = styled.div`
	display: flex;
	transition: .3s ease;
	flex-direction: column;
`
const Title = styled.h3`
	font-size: 20px;
	font-weight: 700;
`
const Item = styled.div`
	cursor:pointer;
	align-self: center;
	border: 1.5px solid #AEBCD9;
	box-sizing: border-box;
	border-radius: 7px;
	padding: 10px 10px;
	margin: 15px 25px 15px 20px;
	width: 90%;
	text-align: justify;
	transition: all 0.2s ease;
	box-shadow: ${p => p.active ? 
		'0px 6px 8px rgba(0, 0, 0, 0.3)' : null};

	p {
			
	}
`
const Parrafo=styled.p`
	overflow: hidden;
	max-height: ${p => !p.active ? '0px' : '120px' };
	font-size: 14px;
	line-height: 19px;
	color: #4F4F4F;
	padding: ${p => !p.active ? '0px' : '5px 10px' };
	margin: 0px;
	transition: all 0.2s ease-in-out;
	@media screen and (max-width: 800px) {
		font-size:12px;
	}
`
const ItemTitle = styled.div`
	font-weight: 600;
	font-size: 15px;
	line-height: 22px;
	color: #172BEF;
	margin: 0px;
	transition: all 0.2s ease;
	:hover {
			transform: scale(1.01);
	}
	@media screen and (max-width: 800px) {
		font-size:14px;
	}
`

const Faqs = () => {
	const data = getAsesorFaq()
	const [sel, setSel] = useState('')
	const handleSel = (item) => {
		if(item === sel){return setSel('')}
		setSel(item)
	}
	return <Cont>
		<Title>_Lo que más nos preguntan</Title>
		{data.map(i =>
		<Item key={i.menu} id={i.menu} >
			<ItemTitle onClick={() => handleSel(i.menu)}>
				{i.name}
			</ItemTitle>
			<Parrafo active={i.menu === sel}>{i.desc}</Parrafo>
		</Item>
		)}	
	</Cont>
}

export default Faqs;
