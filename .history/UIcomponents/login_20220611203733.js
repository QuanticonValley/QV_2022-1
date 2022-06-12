import styled from "styled-components";
import { useState, useEffect } from "react";
import LoginForm from "./loginform";
import RegisterForm from "./registerform";
import googleOneTap from "google-one-tap";

const PanelOut = styled.div`
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 20px 20px;
  margin: 20px;
  width: 600px;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
const PanelIn = styled.div`
  background-color: #fff;
  padding: 10px 10px;
`;
const Encabezado = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 30%;
  color: #172bef;
  font-weight: bold;
  padding: 0.5em 1em;
  margin: 1em auto;
  border: 2px solid #172bef;
  border-radius: 0.5em;
  cursor: pointer;
  transition: 0.5s all;
  &:hover {
    background-color: #172bef;
    color: white;
  }
  @media screen and (max-width: 800px) {
    width: 45%;
  }
`;

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
      console.log(response);
    });
  }, []);

  const [login, setLogin] = useState(true);
  function cambio(decision) {
    setLogin(decision);
  }

  return (
    <PanelOut>
      <PanelIn>
        <Encabezado>
          <Button onClick={() => cambio(true)}>Iniciar Sesión</Button>
          <Button onClick={() => cambio(false)}>Registrarse</Button>
        </Encabezado>
        {login ? (
          /* <LoginForm></LoginForm> */
          <div></div>
        ) : (
          <RegisterForm></RegisterForm>
        )}
      </PanelIn>
    </PanelOut>
  );
};

export default Login;
