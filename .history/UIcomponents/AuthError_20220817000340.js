import styled from 'styled-components';

const Container = styled.div`
  color: blue;
`

const AuthError = ({ asesor }) => {
  return (
    <Container>
      <p> Cuenta no autorizada.Por favor contacta al monitor de la materia</p>
    </Container>
  )
}
export default AuthError