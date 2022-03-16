import './App.css';
import { Col, Row } from 'react-bootstrap';
import Navigate from './components/Navigation';
import DavidHome from './resources/David.jpg';
import UpdateComp from './components/UpdateComp';
import { Grid, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Footer from './components/Footer';
import smBg from './resources/smBg.jpg';
import CarouselComponent from './components/CarouselComponent';
import DraftsIcon from '@mui/icons-material/Drafts';
import Call from '@mui/icons-material/WifiCalling3';
const myStyles = makeStyles((theme) => ({
  topRow:{
position:'relative',
  },
  images: {
    backgroundImage: `url(${DavidHome})`,
    height: '100vh',
    width: '100%',    
    position:'relative',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  [theme.breakpoints.down('sm')]:{
    height:'60vh',
    backgroundImage:`url(${smBg})`,
    backgroundSize:'cover',
    backgroundRepeat:'repeat',
  }  
  },
  hmeTxt:{
    textAlign:'center',
    position:'absolute',
    color:'white',
    fontSize:'50px',
    [theme.breakpoints.down('sm')]:{
      display:'none',
    },
},
mp:{
position:'absolute',
color:'white',
[theme.breakpoints.down('sm')]:{
  textAlign:'center',
},
},
mpRow:{
  position:'absolute',
},
theHomeText:{
fontSize: '25px',
fontFamily: 'Playfair Display, serif',
fontStyle: 'italic',
color:'white',
width:'500px',
[theme.breakpoints.down('sm')]:{
  fontSize: '20px',
  width:'75%',
  color:'black',
}
},
Agenda:{
  textAlign:'center',
  height:'100%',
},
Updates:{
  textAlign:'center',
},
cont:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  position:'absolute',
  paddingLeft: 'inherit',
  paddingRight: 'inherit',
  paddingTop:'inherit',
  left:'10vw',
 top:'10vh',
 [theme.breakpoints.down('sm')]:{
   top:'10vh',
   left:'0vw',
 }
},
imgCol:{
  [theme.breakpoints.down('sm')]:{
    display:'none',  
  },
},
disappearingImage:{
display:'flex',
position:'absolute',
paddingLeft: 'inherit',
paddingRight: 'inherit',
paddingTop:'inherit',
top:'1vh',
height:'100px',
width:'400px',
[theme.breakpoints.down('sm')]:{
display:'none',
visibility: 'none'
},
},
banner:{
width:'100%',
height:'16vh',
backgroundColor:'#f39c12',
display:'flex',
},
reachRow:{
backgroundColor:'#F79F1F',
height:'100%',
alignItems:'center',
//  align row children to center position
},
BannerItems:{
  fontSize:'22px',
  fontFamily: 'Playfair Display, serif',
  [theme.breakpoints.down('sm')]:{
fontSize:'18px',
fontWeight:'bolder',
  },
},
reachOutText:{
fontSize: '40px',
fontWeight:'bolder',
fontFamily: 'Playfair Display, serif',
fontStyle: 'italic',
[theme.breakpoints.down('sm')]:{
fontSize:'30px',
},
},
BannerColumn:{
textAlign:'center'
},
bannerIcons:{
fontSize:'50px',
[theme.breakpoints.down('sm')]:{
fontSize:'35px',
},
},
}));
function App(){ 
const classes = myStyles();
  return (
<Grid container-fluid="true" >
<Row className={classes.reachRow} id = 'banner'>
<Col>
  <div className={classes.BannerColumn}>
  <span className={classes.reachOutText}>Reach out....</span> <br></br> <DraftsIcon style = {{fontSize:'50px'}}/>
  <span style={{fontWeight:'bolder'}} className ={classes.BannerItems}>rkipchumba1999@gmail.com</span><br></br>
 <span><Call style = {{fontWeight:'bolder', fontSize:'50px'}}/></span>&nbsp;
 <span style = {{fontWeight:'bolder',fontSize:'20px'}} className ={classes.BannerItems}>+254 720 635 631</span>
  </div>
</Col>
</Row>
<Row id='navigate'>
<Navigate/>
</Row>
<Row className={classes.topRow}>
<div className={classes.images}></div>
<div className={classes.cont}>
<div className={classes.theHomeText}>
<h1>KARIBU AINABKOI.</h1>
<p>
You, the people of Ainabkoi, spoke clearly. We want dignity;
we want to put enough food on our tables, and we want a lower cost of living.
</p> 
</div>
</div>
{/* <div className={classes.disappearingImage}> 
<img src={mp} className = 'img-fluid' style={{height:'500px'}}/>
</div> */}
</Row>
<Row id ='agenda' >
<UpdateComp/>
</Row>
<Row style={{backgroundColor:'#1e272e'}} className = 'carousel_row' id = 'updates'>
<CarouselComponent/>
</Row>
<Row id = 'footer' className='customFooter'>
<Footer/>
</Row>
</Grid>
  );
}

export default App;
