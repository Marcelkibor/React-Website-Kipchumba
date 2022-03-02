import { Container } from '@mui/material'
import { Box } from '@mui/material'
import { Link } from '@mui/material'
import { Grid } from '@mui/material'
import React from 'react'

function Footer() {
  return (
<Box bgcolor="text.secondary" color="white">
<Container maxWidth ='lg'>
<Grid container spacing={5}>
<Grid item xs ={12} sm ={4}>
<Box borderBottom={1}><b style={{fontSize:'20px'}}> Home</b> </Box>
<Box>
<Link href='/' color  ='inherit' style={{textDecoration:'none'}}>About Us</Link>
</Box>
<Box>
<Link href='/' color  ='inherit' style={{textDecoration:'none'}}>Send Private Request</Link>
</Box>                
</Grid>
<Grid item xs ={12} sm ={4}>
<Box borderBottom={1}> <b style={{fontSize:'20px'}}> Book Room</b></Box>
<Box>
<Link href='/' color  ='inherit' style={{textDecoration:'none'}}>Single BnB</Link>
</Box>
<Box>
<Link href='/' color  ='inherit'style={{textDecoration:'none'}}>Double BnBs</Link>
</Box>                      
</Grid>
<Grid item xs ={12} sm ={4}>
<Box borderBottom={1}> <b style={{fontSize:'20px'}}> Plan Vacation</b></Box>
<Box>
<Link href='/' color  ='inherit'style={{textDecoration:'none'}}>Send Email</Link>
</Box>
<Box>
<Link href='/' color  ='inherit'style={{textDecoration:'none'}}>Book Destination</Link>
</Box>
<Box>
<h6 style={{color:'white'}}>
<b>Kibor</b> designs &reg; {new Date().getFullYear()}  
</h6>
</Box>
</Grid>
</Grid>
</Container>
</Box>
  )
}
export default Footer