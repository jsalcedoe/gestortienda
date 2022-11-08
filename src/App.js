//import logo from './logo.svg';
import './App.css';
import React from 'react';
import navbar from 'react-bootstrap/navbar';
import nav from 'react-bootstrap/nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Link, Router, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import CrearArticulos from './components/crear-articulo';
import EditarArticulos from './components/editar-articulo';
import ListarArticulos from './components/listar-articulo';
import { Navbar, NavbarBrand } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Router>
          <header className="App-header">
            <Navbar bg = 'dark' variant = 'dark'></Navbar>
            <Container>
              <NavbarBrand>
                <link to = {'/crear-articulo'}className = 'nav-link'>
                  App React MERN Stack
                </link>
              </NavbarBrand>
              <Nav className = 'justify-content-end'>
                
                  <Link to={'/crear-articulo'}className = 'nav-link'>
                    Crear Articulo
                  </Link>
              </Nav>
              <Nav>
                  <Link to={'/listar-articulo'}className = 'nav-link'>
                    Listar Articulos
                  </Link>   
              </Nav>
            </Container>
        
          </header>
          <Container>
            <Row>
              <Col md = {12}>
                <div className='wrapper'>
                  <Switch>
                    <Route exact path = '/' component={(props)=><CrearArticulos {...props}/>}/>
                    <Route exact path = '/crear-articulo' component={(props)=><CrearArticulos {...props}/>}/>
                    <Route exact path = '/editar-articulo' component={(props)=><EditarArticulos {...props}/>}/>
                    <Route exact path = '/listar-articulo' component={(props)=><ListarArticulos {...props}/>}/> 
                  </Switch>
                </div>
              </Col>
            </Row>
          </Container>


      </Router>
    </div>
  );
}

export default App;
