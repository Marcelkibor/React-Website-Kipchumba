import React from 'react'
import Grid, { Box, Card, CardContent, CardMedia } from '@mui/material'
import { Col } from 'react-bootstrap';
import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  AboutCard: {
 width:'300px',
 height:'200px',
 backgroundColor:'yellow',
//  card styling for smaller devices
 [theme.breakpoints.down('sm')]:{
  width:'100vw',
  height:'350px',
  padding:'0% 5% 0% 0%'
 },
//  card styling for medium and upper devices 
 [theme.breakpoints.up('md')]:{
width:'80vw',
  minHeight:'60vh',
  padding:'0% 10% 0% 0%',
  margin:'4% 0% 0% 0%'
 },
  },
  cardColumn:{
    padding:'2% 0% 0% 0%',
    margin:'0% 0% 0% 0%',
    height:'100vh',
    [theme.breakpoints.down('sm')]:{
      height:'100%',
      margin:'0% 0% 2% 0%',

    }
    },
    boxesMargins:{
      padding:'0% 0% 0% 0%',
    [theme.breakpoints.down('sm')]:{
      padding:'0% 0% 0% 0%',
    }
    },
    CardContentDesc:{
      width:'70vw',
    [theme.breakpoints.down('sm')]:{
      width:'100vw'
    }},
  }));
function About() {
const classes = useStyles();
  return (
<Box className = {classes.boxesMargins}>
  <Col  className ={classes.cardColumn}style ={{backgroundColor:'white'}}>
  <Card className={classes.AboutCard}>
<h3 style={{padding:'5% 30% 0% 3%', color:'orange', fontWeight:'bold'}} >OUR VISION</h3>
<CardContent className = {classes.CardContentDesc}>


</CardContent>
</Card>
  </Col>

</Box>
  )
}
export default About
