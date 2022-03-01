import React from 'react'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
  } from "@material-ui/core";
import { Link, BrowserRouter as Router , Switch} from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import DrawerComponent from './DrawerComponent';
import { useMediaQuery } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
navlinks: {
marginLeft: theme.spacing(10),
display: "flex",
padding:"0% 18% 0% 0%",
},
logo: {
flexGrow: "1",
cursor: "pointer",
[theme.breakpoints.down('md')]:{
}
},
link: {
textDecoration: "none",
color: "white",
fontSize: "20px",
marginLeft: theme.spacing(10),
"&:hover": {
color: "yellow",
textDecoration:"none"
},
},
}));
function MatHeader() {
const classes = useStyles();
const theme = useTheme();
 const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
 <AppBar position="static" style={{backgroundColor:'#2ecc71',padding:'2% 0% 1% 3%'}}> 
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Ronald Kipchumba 
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/home" className={classes.link}>
              Home
            </Link>
          </div>)}
      </Toolbar>
    </AppBar>

   
  );
}

export default MatHeader