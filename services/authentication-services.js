import axios from 'axios'
import api from './service-properties.json'

class AuthService{
    
    SignUp(form) { // Registro de usuario en la plataforma.
      return axios.post('http://localhost:9000/sign-up', form, {
        headers: {
          'Content-Type': 'application/json'
      }});
    }

    LogIn(form){  // Inicio de sesión de usuario en la plataforma.
      return axios.post('http://localhost:9000/log-in', form, {
        headers: {
            'Content-Type': 'application/json'
        }});
    }
    
}
export default new AuthService();