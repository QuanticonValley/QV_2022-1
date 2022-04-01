import styled from 'styled-components'
import Link from 'next/link'
import { prefix } from '../utils/prefix.js';

const ZElement = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;
	background: #FFFFFF;
	padding: 10px 10px 5px 20px;
	border-radius: 20px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	transition: 0.3s;

	:hover {
		cursor: pointer;
		transform: scale(1.02);
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
	}
	:active {
		background-color: #ddd;
	}
	@media screen and (max-width: 800px) {
		flex-direction: row;
		justify-content: flex-start;
	}
`
const Img = styled.img`
	height: 45%;
	margin: 0px 0px 10px 10px;
	@media screen and (max-width: 800px) {
		margin:0;
		margin-right: 14px;
	}
`
const Text = styled.div`
	display: flex; 
	flex-direction: column;
	font-weight: bold;
`
const Title = styled.span`
	font-size: 1.5rem;
	color: #172BEF;
	@media screen and (max-width: 800px) {
		font-size: 1.2rem;
	}
`
const Desc = styled.span`
	font-size: 0.8rem;
`

// item => name, desc, img, link, type(twover or twohor)
const Element = ({ item }) => {
	if(item.target === "_blank") {
		return(
		<a href={item.link} target={item.target}>
			<ZElement type={item.type}>
				<Img src={`${prefix}${item.img}`} name={item.name}/>
				<Text>
					<Title>{item.name}</Title>
					<Desc>{item.desc}</Desc>
				</Text>
			</ZElement>
		</a>
		)
	}
	return (
		<Link href={item.link} passHref>
			<ZElement type={item.type}>
				<Img src={`${prefix}${item.img}`} name={item.name}/>
				<Text>
					<Title>{item.name}</Title>
					<Desc>{item.desc}</Desc>
				</Text>
			</ZElement>
		</Link>
	)
}

export default Element;
