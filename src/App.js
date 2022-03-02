import Home from './components/home'
import Navigation from './components/Navigation';
import { useState } from 'react';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Ronald from './resources/ronald.png'
import { makeStyles } from '@material-ui/core';
import {Container, Row, Col,Navbar,Nav,NavDropdown,Form,Button,FormControl} from 'react-bootstrap';
import About from './components/About'
function App() {
  const useStyles = makeStyles((theme) => ({
    backGrounder: {
     backgroundColor:'yellow',
    },
    }));
  const classes = useStyles();
  return (
<div>
  <Router>
    <Row>
    <Navigation/>
    </Row>
    <Row>
      <Col>
      <section className={classes.backGrounder}>
   <img src ={Ronald} style ={{ alignContent:'center'}} className='img-fluid'/>
    </section> 
      </Col>
    </Row>
    <Row>
<About/>
    </Row>
    <Row>
    <Footer/>
    </Row>

  </Router>
</div>
  );
}
export default App;
