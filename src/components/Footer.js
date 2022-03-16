import { Container } from '@mui/material';
import { Box } from '@mui/material';
import { Link } from '@mui/material';
import { Grid } from '@mui/material';
import footerImage2 from '../resources/footer2.jpg';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { makeStyles } from '@material-ui/core';
import { display, width } from '@mui/system';
// custom functions
const customStyles = makeStyles((theme)=>({
  mainfooterBox:{
color:'white',
backgroundColor:'#2d3436',
backgroundImage: `url(${footerImage2})`,
backgroundSize:'cover',
// [theme.breakpoints.only('xs')]:{
//   backgroundImage: `url(${footerImage2})`,
// }
  },

}))
function Footer() {
const classes = customStyles();
  return (
<Box className = {classes.mainfooterBox}>
<div>
<Box className='footerHeaders'><b style={{fontSize:'20px',fontFamily: "Garamond, serif"}}> Quick Links</b> </Box>
<Box className='footerLinks'>
<Link href='#agenda' color  ='inherit' style={{textDecoration:'none',fontFamily:'Roboto,"Helvetica Neue",sans-serif'}}>Agenda</Link>
</Box>
<Box className='footerLinks'>
<Link href='#banner' color  ='inherit' style={{textDecoration:'none',fontFamily:'Roboto,"Helvetica Neue",sans-serif'}}>Contact</Link>
</Box>                
</div><br></br>
<div> 
<Box className = 'footerHeaders'> <b style={{fontSize:'20px', fontFamily: "Garamond, serif"}}>Social Media Links</b></Box>
<Box className='footerLinks'>
  <FacebookIcon style={{color:'#0984e3', fontSize:'30px'}}/>
  <Link href='https://web.facebook.com/' color  ='inherit' style={{textDecoration:'none',fontFamily:'Roboto,"Helvetica Neue",sans-serif'}}>Facebook</Link>
</Box>
<Box className='footerLinks'>
  <TwitterIcon style={{color:'#38ada9', fontSize:'30px'}}/>
<Link href='https://twitter.com/Rk_chumba' color  ='inherit'style={{textDecoration:'none',fontFamily:'Roboto,"Helvetica Neue",sans-serif'}}>Twitter</Link>
</Box>                      
</div>
</Box>

  )
}
export default Footer