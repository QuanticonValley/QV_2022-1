import styled from "styled-components";
const Image = styled.div`
	height:220px;
    width:180px;
    background-color:#bbbbbb;
    border-radius:5px;
    border: 2px solid #172bef;
    @media screen and (max-width: 1500px) {
		height: 200px;
        width: 160px;
	}
`
const Photo = () => {
    return ( <Image></Image> );
}
 
export default Photo;