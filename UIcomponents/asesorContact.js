import styled from 'styled-components';

const Container = styled.div`
  padding: .5em 1em;
  
  h3 {
    color: blue;
  }
  h3, h4, p {
    margin: .3em 0;
  }

	@media screen and (max-width: 600px) {
    padding: 0em .5em;
    transform: scale(0.95);
	}
`
const Ul = styled.ul`
  padding: 0 1em;
`
const Li = styled.div`
  font-size: .9em;
  margin: .5em 0;
`
const List = () => {
  return (
    <Ul>
      <Li>Preparar un correo con el Asunto: <strong>TPI-SolicitudAsesoria-GXX</strong> donde XX es el numero de tu grupo</Li>
      <Li>En el cuerpo del correo escribe tu <strong>Horario</strong> (2-4pm o 4-6pm), el <strong>número y nombre de tu grupo</strong> y <strong>el nombre del asesor</strong> con el que deseas solicitar una reunion.</Li>
      <Li>Adicionalmente puedes definir un <strong>día y hora</strong> en la que tu grupo podria estar disponible. (la fecha y hora final dependera de la disponibilidad del asesor)</Li>
      <Li>Enviar el mensaje al correo que aparece abajo,  el experto o asesor se comunicaran contigo y acordará con tu equipo la fecha para reunirse.</Li>
    </Ul>
  )
}

const AseContact = ({ asesor }) => {
  return (
    <Container>
      <h3>Instrucciones para solicitar una Asesoria</h3>
      <p>Si deseas recibir una asesoria para apoyar el desarrollo de tu proyecto debes:</p>
      <List/>
      <h4>Correo del asesor:</h4>
      <p>{asesor.correoMon}</p>
      <br/>
      <p><strong>Nota:</strong> es muy importante que envíen el <strong>correo con copia a tpi_fibog@unal.edu.co</strong> para que sean tenidos en cuenta los innocoins y para llevar la trazabilidad de las reuniones agendadas.</p>
    </Container>
  )
}
export default AseContact
