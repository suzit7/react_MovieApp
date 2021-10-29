import React from "react";
import { useStyles } from "./Style";
import { Button, Typography } from '@mui/material'
import Searchform from './Searchmovie'
import {NavLink} from 'react-router-dom'


const Homepage = ()=>{

    const classes = useStyles();
    return(
  <>
  <div className={classes.main}>
  <div>
  <div className={classes.header}>
  <NavLink to = "/" style={{textDecoration : 'none'}}>
  <Typography variant="h2" align="center" color ="red">
    NEPFLIX
  </Typography></NavLink>
  <Button className={classes.buttop} variant = "contained" color = "error">Sign In</Button>
  </div>
</div>
  <div style={{textAlign : 'center', marginTop : '160px'}}>
  <Typography variant ="h3" color="black">
  Unlimited movies, TV shows, and more.
  </Typography>
  <br/>
  <Typography variant="h5">
  Watch anywhere. Cancel anytime.
  </Typography>
  <br/>
  <Button className ={classes.wlbutton} variant ="contained" color ="info" >Go To WISHLIST</Button>
  </div>
   <Searchform/>
   <br/>
   
  </div>
  
  {/* <NavLink to = "/moviedetails" >Movie Details page</NavLink> */}

        </>
    );
}

export default Homepage;