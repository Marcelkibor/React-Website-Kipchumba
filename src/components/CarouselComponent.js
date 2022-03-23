import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import car1 from '../resources/car1.jpg';
import car2 from '../resources/car2.jpg';
import car3 from '../resources/car3.jpg';
import { makeStyles } from '@material-ui/core';
import { Row } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardContent,Typography } from '@mui/material';
import { height, style } from '@mui/system';

const customStyles = makeStyles((theme)=>({
componentSpacer:{
 width:'80vw',
 height:'100%',
 backgroundColor:'#fa983a',
 display:'flex',
 alignItems:'center',
 textAlign:'center',
 [theme.breakpoints.down('sm')]:{
display:'none'
 },},
componentSpacerSmall:{
  height:'60vh',
  [theme.breakpoints.up('md')]:{
    display:'none',
  },
},
CarouselComponentRow:{
backgroundColor:'#2d3436',
padding:' 10% 0% 0% 0%',
},
}));
function CarouselComponent() {
const classes = customStyles();
const resImg = 'img-fluid'
return (
<div>
<Row className={classes.CarouselComponentRow}>
  <div>
  <h1 className= 'top_updatetext' style ={{textAlign:'center',fontFamily: 'Playfair Display, serif',
  fontStyle: 'italic', backgroundColor: '#1e272e',color:'#ffa801'}}>
    Updates<br></br><p style ={{color:'white', fontSize:'20px'}}>
      Keep up with our team's progress in <b>Ainabkoi</b> right now..</p></h1>
  </div>
<Carousel  autoPlay interval="6000" transitionTime="1000" showThumbs={false} className = 'mainCarousel'>
<div className={classes.componentSpacer}>
<img 
src={car1}
className ='carouselImages img-fluid'/>
<Card className='carouselCard'>
<CardContent>
<Typography style={{textAlign:'left'}}>
<b>The journey</b> to branch from consumer based farming to income generation is already underway.
Mosop is blessed with fertile land that supports various income generating cash crops.
</Typography>
</CardContent>
</Card>
</div>
<div className={classes.componentSpacer }>
<img 
src={car2} 
className = 'carouselImages img-fluid'/>
<Card className='carouselCard'>
<CardContent>
<Typography style={{textAlign:'left'}}>
<b>The future</b> of technology is with the young generation. 
Our plan is to bring technology closer to all students who are unexposed or have unlimited access to computers.
</Typography>
</CardContent>
</Card>
</div>
<div className={classes.componentSpacer}>
<img 
src={car3} 
className = 'carouselImages img-fluid'/>
<Card className='carouselCard'>
<CardContent>
<Typography style={{textAlign:'left'}}>
<b>Our plan is to</b> incorporate proper leadership on all on-going, pending and completed projects.
With proper accountability, Mosop stands a real chance of realizing it's true potential
</Typography>
</CardContent>
</Card>
</div>
</Carousel>
{/* second carousel for smaller devices */}
<Carousel  autoPlay interval="6000" transitionTime="1000" showThumbs={false} className = 'smallerCarousel'>
<div className={classes.componentSpacerSmall}>
<img 
src={car1}
className ='carouselImagesSmall img-fluid'/>
<Card className='carouselCard'>
<CardContent>
<Typography style={{textAlign:'left'}}>
<b>The journey</b> to branch from consumer based farming to income generation is already underway.
Mosop is blessed with fertile land that supports various income generating cash crops.
</Typography>
</CardContent>
</Card>
</div>
<div className={classes.componentSpacerSmall}>
<img 
src={car2} 
className = 'carouselImagesSmall img-fluid'/>
<Card className='carouselCard'>
<CardContent>
<Typography style={{textAlign:'left'}}>
<b>The future</b> of technology is with the young generation. 
Our plan is to bring technology closer to all students who are unexposed or have unlimited access to computers.
</Typography>
</CardContent>
</Card>
</div>
<div className={classes.componentSpacerSmall}>
<img 
src={car3} 
className = 'carouselImagesSmall img-fluid'/>
<Card className='carouselCard'>
<CardContent>
<Typography style={{textAlign:'left'}}>
<b>Our 5 year plan is to </b> incorporate proper leadership on all on-going, pending and completed projects.
With proper accountability, Mosop stands a real chance of realizing it's true potential
</Typography>
</CardContent>
</Card>
</div>
</Carousel>
</Row>

</div>
  )
}
export default CarouselComponent