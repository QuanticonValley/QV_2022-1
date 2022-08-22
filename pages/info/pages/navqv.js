import styled from 'styled-components';
import ReactPlayer from "react-player";

const Title = styled.h3`
	font-size: 20px;
	font-weight: 700;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  grid-gap: 1em;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const NavQV = () => {
   return (
      <div>
         <Title></Title>
         <ReactPlayer
            url="https://youtu.be/oFLP1n4K6dE"
            className="react-player"
            width="100%"
            height="400px"
            controls
         ></ReactPlayer>
      </div>


   );
}

export default NavQV;
