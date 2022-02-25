import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	justify-content: center;
    transition: .5s all;
    :hover {
		transform: translate(-9px);
	}
`
const Img = styled.div`
	background-color:#bbbbbb;
    border-radius:5px;
    width: 60px;
    height: 60px;
`
const Prof = styled.div`
	text-align: right;
    margin-right:10px;
`
const Prof2 = styled.div`
	text-align: right;
    font-size:1.2em;
    @media screen and (max-width: 1480px) {
		font-size:1em;
	}
`
const Prof3 = styled.div`
	text-align: right;
    font-size:1rem;
    @media screen and (max-width: 1480px) {
		font-size:0.8em;
	}
`

const Miniprofile = () => {
    //Aqui se pide el nombre, foto y cargo si lo hay
    let nombre="Berny Alejandro Orozco Córdoba";
    let cargo="Desarrollador Frontend";
    let foto="";
    let cambiop=nombre.split(' ');
	return (
			<Container>
                <Prof>
                    <Prof2>
                        <b>{cambiop[0]} {cambiop[1]} {cambiop[2]}</b>
                    </Prof2>
                    <Prof3>
                        {cargo}
                    </Prof3>
                </Prof>
				<Img>{foto}</Img>
			</Container>
	);
}

export default Miniprofile;