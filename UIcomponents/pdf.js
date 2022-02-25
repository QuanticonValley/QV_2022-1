import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { prefix } from '../utils/prefix.js';
import styled from 'styled-components'

import '@react-pdf-viewer/core/lib/styles/index.css';

const Center = styled.div`
	width: 100%;
	text-align: center;
`
const Container = styled.div`
	height: 800px;
	width: 90%;
	margin: 0 auto;

	@media screen and (max-width: 1210px) {
		height: 580px;
	}
	@media screen and (max-width: 1000px) {
		height: 400px;
	}
	@media screen and (max-width: 800px) {
		height: 530px;
		width: 100%;
	}

`

const Pdf = ({file}) => {
	return(
	<Center>
		<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
			<Container>
				<Viewer fileUrl={`${prefix}/${file}`} defaultScale={SpecialZoomLevel.PageFit} theme='dark'/>
			</Container>
		</Worker>
	</Center>
	)
}

export default Pdf
