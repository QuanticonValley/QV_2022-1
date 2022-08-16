import styled from 'styled-components'
import { useEffect } from 'react'
import cookie from 'js-cookie';

const Jumbo = styled.div`
	margin: 90px 0 30px 0;
	border-radius: 20px;
	background-color: ${props => props.primary ? '#1920EF':'#FFC024'};
	position: relative;
	padding: 40px 10px 20px 20px;
	@media screen and (max-width: 1000px) {
		padding: 15px;
	}
`
const Title = styled.h1`
	font-weight: 600;
	font-size: 2.5em;
	margin: 0px;
	color: ${props => props.primary ? '#FFF':'#000'};

	@media screen and (max-width: 1000px) {
		width: 100%;
		font-size: 1.8em;
	}
`
const Desc = styled.h4`
	font-weight: ${props => props.primary ? 'bold': null};

	font-size: ${props => props.primary ? '1.4em':'1em'};
	margin: 0px;
	width: 50%;
	color: ${props => props.primary ? '#FFC024':'#000'};

	@media screen and (max-width: 1000px) {
		width: 100%;
	font-size: 1em;
	}
`
const Img = styled.img`
	position: absolute;
	width: 38%;
	bottom: 0;
	right: 0;
	z-index: 1;
	border-radius: 20px;
	@media screen and (max-width: 1000px) {
		width: 0px;
	}
`


const Header = ({ title, desc, imgH, primary }) => {
	function handleCredentialResponse(response) {
      const token = response.credential;
      console.log('Encoded JWT ID token: ' + token);
      cookie.set('token', token, { expires: 1 });
   }
	useEffect(() => {
      if (window) {
			google.accounts.id.initialize({
            client_id:
               '231104193562-jr49orvr3rd8sebmp0bmejfus9qpfsgf.apps.googleusercontent.com',
            callback: handleCredentialResponse,
         });
         google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: 'outline', size: 'large' } // customization attributes
         );
      }
   }, []);
	return (
			<Jumbo primary={primary}>
				<script
					src="https://accounts.google.com/gsi/client"
					async
					defer
				></script>
				<div  id="buttonDiv">
            	Sign in
      		</div>
				<Title  primary={primary}>{title}</Title>
				<Desc  primary={primary}>{desc}</Desc>
				<Img src={imgH}  primary={primary}/>
			</Jumbo>
	)
}

export default Header;
