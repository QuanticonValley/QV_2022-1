import styled from "styled-components";

const OutContainer=styled.div`
    color:#777;
    height: 50px;
    width: 300px;
    padding: 5px;
    margin: 15px;
    @media screen and (max-width: 800px) {
		margin-left:0px;
	}
`
const Title= styled.div`
    font-size:1.2rem;
    font-weight: 500;
`
const Data= styled.div`
    font-size:.8rem;
    font-weight: 500;
    margin-left: 20px;
`

const ProfileCards = ({title, data}) => {
    return ( 
        <OutContainer>
            <Title>{title}</Title>
            <Data>{data}</Data>
        </OutContainer>
     );
}
 
export default ProfileCards;