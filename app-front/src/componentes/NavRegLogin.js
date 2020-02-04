import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import './NavRegLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import RegistroUsuarios from './registro/RegistroUsuarios'
import ServicioLogin from '../servicios/ServicioLogin';
import LoginUsuario from './login/LoginUsuario';





class NavRegLogin extends Component {

  
    constructor(props) {
      super(props);
  
      this.state = {
        logueado: ServicioLogin.getLogueado()
      }
      this.onClickLogout = this.onClickLogout.bind(this);
    }
  
    componentDidMount(){
      ServicioLogin.getLogueado();
    }
  
    onClickLogout() {
      ServicioLogin.setLogueado(false);
  
      this.setState(this.state);
  
      //TODO: quitar window.location
      window.location = "nav/iniciarsesion";
    }

  
    render(){
  
      return (
        <Router>
          <header className='cabeceraApp col-xs-12'>
            {/* <a href="/home">Atras</a> */}
            <nav className="navegadorN1">
              {
                !this.state.logueado ? (
                  <React.Fragment>

                    <div className="iniciarSesion">
                      <Link to="/nav/iniciarsesion" className='navLogin'> Iniciar sesión </Link>         
                    </div>
                    
                    <div className="registro">
                      <Link to="/nav/registro" className='navRegistro'> Regístrate </Link>
                    </div>
                  </React.Fragment>
                ) : (
                  <div>
                    <a onClick ={this.onClickLogout} >Cerrar Sesion</a>
                    <Redirect to="nav/iniciarsesion"/>
                  </div>
                )
              }
            </nav>
          </header> 
          <Route path="/nav/iniciarsesion" exact component={() => <LoginUsuario callback={() => this.setState( {logueado: true} )} />}/>
          <Route path="/nav/registro" exact component={RegistroUsuarios}/>
        </Router>
        
      );
    }
    
  }
  export default NavRegLogin
  
  