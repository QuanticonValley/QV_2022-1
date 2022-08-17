import { useMainState } from "../../libs/stateHooks";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Link from "next/link";
import { prefix } from "../../utils/prefix.js";
import { getLogosExt } from "../../public/data";
import Gallery from "../../UIcomponents/banner";
import axios from "axios";
import cookie from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router.js";
import QV from "../../UIcomponents/qv";
import Header from "../../UIcomponents/header";


const imgPrin = `${prefix}/imgs/header/principal.png`;

const Image = styled.img`
  margin-right: 1em;
`;
const Title = styled.h3`
  border-bottom: 2px solid #ffc024;
`;
const Descr = styled.h3`
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  grid-gap: 1em;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
const GridB = styled.div`
  display: grid;
  margin: 0 3em;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

const Noti = styled.img`
  grid-row: span 2;
  border-radius: 1em;
  width: 100%;
  transition: 0.3s ease;
  :hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;
const LogoExt = styled.div`
  grid-row: span 2;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  border-radius: 1em;
  @media screen and (max-width: 800px) {
    width: 60%;
    max-width: 240px;
  }
`;
const MejoresProyectos = styled.a`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  grid-row: span 2;
  min-height: 60px;
  font-weight: bold;
  font-size: 30px;
  background: #ffc024;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
  border-radius: 10px;
  padding: 5px;
  transition: 0.3s ease;
  :hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  @media screen and (max-width: 1500px) {
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 4em 0 0;
  margin-left: 5%;
`;
const TextBox = styled.div`
  color: black;
  font-weight: normal;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
  @media screen and (max-width: 500px) {
    margin-bottom: 0;
  }
`;
const Flex2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1em;
  flex-wrap: wrap;
  margin-left: 5%;
`;
const Box = styled.div`
  justify-content: center;
  align-items: center;
  min-height: 60px;
  padding: 1em;

  color: #172bef;
  font-weight: bold;
  background: #ffffff;
  border: 2px solid #d8def3;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
  border-radius: 10px;

  transition: 0.3s ease;
  :hover {
    border: 2px solid #172bef;
    cursor: pointer;
  }
`;
const Imagen = styled.img`
  height: 60px;
  margin: 10px;
  border-radius: 10px;
  @media screen and (max-width: 1200px) {
    height: 50px;
  }
  @media screen and (max-width: 800px) {
    height: 40px;
  }
`;
const Error = styled.div`
  position: absolute;
  right: 2vw;
  top: 1.5vh;
  color: #1920ef;
`;
const UserSession = styled.div`
	display: flex;
	background: #1920ef;
	border-radius: 0.5em 1.5em 1.5em 0.5em;
	width: 120px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
	hover {
		cursor: pointer;
		width: 8vw;
	}
	@media screen and (max-width: 800px) {
		margin-top: 0.2em;
		width: 30vw;
		margin-right: 10vw;
	}

  
`;
const UserSessionProfile = styled.img`
  border-radius: 50%;
  width: 2.2em;

`;
const UserSessionButton = styled.div`
  background: #1920ef;
  color: #ffffff;
  border: none;
  padding: 0.5em;
  width: 25vw;
  height: 1.5em;
  border-radius: 0.5em;
  font-weight: bold;
  hover {
	cursor: pointer;
	}
`;



const Principal = () => {
  const [mState, setMainState] = useMainState();
  const logos = getLogosExt();
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isData, setIsData] = useState(false);
  const [showAuthError, setShowAuthError] = useState(false);
  const token = cookie.get("token");

  async function fetchData(endpoint) {
	  console.log(token)
    const response = await axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          console.log("Error de autenticación");
          router.push("/");
          setShowAuthError(true);
        }
      }
      );
    setData(response.data.data);
  }

  const openModal = (type) => {
    setMainState({
      ...mState,
      modal: {
        visibility: true,
        type: type,
      },
    });
  };

  useEffect(async () => {
    if (window) {
      const button = document.getElementById("signout_button");
      button.addEventListener("click", () => {
        google.accounts.id.disableAutoSelect();
        cookie.remove("token");
      });
    }
    try {
      const myUser = fetchData(`https://qv-api.herokuapp.com/api/v1/users/me`);
    } catch (error) {
      
      console.log(error.response);
    }

  }, []);

  return (
    <QV
      pg="Principal"
      button={
        <UserSession>
          <script src="https://accounts.google.com/gsi/client"></script>
			 
			 <UserSessionButton
            id="signout_button"
            class="g_id_signout"
            onClick={() => {
              google.accounts.id.disableAutoSelect();
              cookie.remove("token");
              router.push("/");
            }}
          >
            Sign Out
          </UserSessionButton>

          
          <UserSessionProfile alt="foto" src={`${data?.photoUrl}`} />
          
        </UserSession>
      }
    >
      <Header
        title="Quanticon Valley"
        desc="Bienvenidos/as"
        imgH={imgPrin}
        primary
      />
      <Gallery />
      <Descr>
        Quanticon Valley es una apuesta de gamificación desarrollada y propuesta
        por la Facultad de ingeniería
      </Descr>
      <TitleBox>
        <Title>Conoce Quanticon Valley</Title>
      </TitleBox>
      <Grid>
        <LogoExt>
          <Logo src={`${prefix}/imgs/info/QV.png`}></Logo>
        </LogoExt>
        <ReactPlayer
          url={
            "https://drive.google.com/file/d/1RCNA3Y-_svvqN0zYPkLKZOReHEZkQCDI/view?usp=sharing"
          }
          className="react-player"
          width="100%"
          height="400px"
          controls
        ></ReactPlayer>
      </Grid>

      <TitleBox>
        <Title>Conoce a los ganadores de la décima edición</Title>
      </TitleBox>
      <Grid>
        <Noti
          src={`${prefix}/imgs/principal/lastNoti.png`}
          onClick={() => openModal("Noticiero")}
        />
        <MejoresProyectos
          href={
            "https://ingenieria.unal.edu.co/tpi/index.php/tpi-expoideas/tpi-expoideas-2021-3?id=513"
          }
          target="_blank"
          rel="noreferrer"
        >
          ¡Conoce los proyectos desarrollados por los ganadores!
        </MejoresProyectos>
      </Grid>

      <TitleBox>
        <Title>Conoce a los actores de Quanticon Valley</Title>
      </TitleBox>
      <GridB>
        <Link href="/actors" passHref>
          <Box>
            <Flex>
              <Image src={`${prefix}/imgs/principal/lobby.png`} alt="" />
              Mentores
            </Flex>
            <TextBox>
              Descubre a los profesores mentores que te acompañarán en tu
              proyecto
            </TextBox>
          </Box>
        </Link>
        <Link href="/actors" passHref>
          <Box>
            <Flex>
              <Image src={`${prefix}/imgs/principal/asesores.png`} alt="" />
              Asesores
            </Flex>
            <TextBox>
              Encuentra contenido adicional para apoyar tu proyecto y contacta
              asesores.
            </TextBox>
          </Box>
        </Link>
      </GridB>
      <TitleBox>
        <Title>Líderes de innovación abierta - participantes</Title>
      </TitleBox>
      <Flex2>
        {logos.map((logo, index) => (
          <Imagen key={index} src={`${prefix}/imgs/extern/${logo[0]}`}></Imagen>
        ))}
      </Flex2>
    </QV>
  );
};
export default Principal;
