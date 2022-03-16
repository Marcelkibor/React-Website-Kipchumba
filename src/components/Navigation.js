import React from 'react'
import '../App.css'
import {Navbar,Nav} from 'react-bootstrap';
import uda from '../resources/uda.png'
import { useState } from 'react';
import {makeStyles } from '@material-ui/core';

const myStyles = makeStyles((theme) => ({
custom_navbar:{
backgroundColor: '#009432',
minHeight: '80px',
paddingLeft:'inherit',
},
navbar_active:{
  backgroundColor: '#2ecc71',
},
}));
function Navigate() {
const [navbar,setNavbar] = useState(false);



// start of usestate
// const changeNavbackground = ()=>{
// if(window.scrollY>=90){
//   setNavbar(true);
// }else{
//   setNavbar(false);
// }
// }
// window.addEventListener('scroll',changeNavbackground);
const classes = myStyles();
  return (
    <div id ='navigation'>
  <Navbar expand="lg" className = {classes.custom_navbar}>
  <Navbar.Brand href="/"><h4 style={{color:'white'}}>&nbsp;&nbsp;&nbsp;<img src={uda} className = 'img-fluid'style={{height:'90px'}}/> Ronald Kipchumba </h4></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" style ={{magin:'25%'}}>  
  <Nav className="mr-auto items_spacer" >
<Nav.Link  href="#agenda"className ='nav_items'>Agenda</Nav.Link>
<Nav.Link  href="#updates"className ='nav_items'>Updates</Nav.Link> 
  <Nav.Link  href="#prog"className ='nav_items'>Programs</Nav.Link>  </Nav>  
  </Navbar.Collapse>
  </Navbar>
  </div>
  )
}

export default Navigate