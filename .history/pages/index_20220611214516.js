import styled from 'styled-components'
import { prefix } from '../utils/prefix.js';
import Register from '../UIcomponents/login'
import { useEffect } from "react";

const Container = styled.div`
	background-image: url('${prefix}/imgs/Rectangle 1.png');
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  height: 100vh;
`


const Imgn = styled.img`
	margin: 30px;
`
const Intro = styled.p`
	font-size: 1em;
	font-weight: bold;
	color: #fff;
	margin: 0px;
`

const Login = () => {
	  // options
	  const opts = {
		client_id:
		  "231104193562-jr49orvr3rd8sebmp0bmejfus9qpfsgf.apps.googleusercontent.com", // required
		auto_select: false, // optional
		cancel_on_tap_outside: false, // optional
		context: "signin", // optional
	 };
  
	 useEffect(() => {
		console.log("init");
		googleOneTap(opts, (response) => {
		  // Send response to server
		  console.log("Encoded JWT ID token: " + response.credential);
		});
	 }, []);
  return (
    <Container>
      <Imgn src={`${prefix}/imgs/main/QV_Blanco_horizontal.png`}/>
      <Intro>
        Listo para hacer parte de esta nueva aventura?
      </Intro>
      <Register></Register>
    </Container>
  )
}
export default Login
