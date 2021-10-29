import React from "react";
import { useStyles } from "./Style";
import { Typography, Grid } from "@mui/material";
// import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
// import ImageAvatars from "./Avatar";
import axios from 'axios';
import { useState, useEffect } from 'react';

// import { Box } from "@mui/system";


const key = '900505d8';
const Details = (props)=>{
    const classes = useStyles();


const [movieInfo, setMovieInfo] = useState();
  // const { selectedMovie } = props;

  useEffect(() => {
    axios.get(
      `https://www.omdbapi.com/?i=${props.selectedMovie}&apikey=${key}`
    ).then((response) => setMovieInfo(response.data));
  }, [props.selectedMovie]);

    


    return (
        <>
<br/>
<hr/>
 <div className={classes.main}>
  <div>
  <div className={classes.details}>
 

  <Typography variant="h3" align="center" color ="red"
  style = {{textDecoration : 'underline'}}>
    Movie Details
  </Typography>
  </div></div> 
  </div>


<br/>

<div className = {classes.detailsmaindiv}>

    <Grid  container border = "null" height = "70vh" width = "100%" spacing = {1}>
        <Grid item md={3}>
        <Box border = "null" className={classes.detailimage}>

        <img src = {movieInfo?.Poster} alt = "asd" className ={classes.img}/>
</Box>
        </Grid>

        <Grid item md={9} spacing = {6}>
        <div className = {classes.detailsdiv}>
        <Box border = "null">
<h1 style = {{marginTop : '20px', marginLeft : '50px', fontFamily :"serif", fontSize : '40px'}}> {movieInfo?.Title}</h1>
</Box>

<Box border = "null">
<h1 style = {{marginLeft : '50px'}}> ({movieInfo?.Released})</h1>
</Box>

<br/>
<br/>

<Box border = "null">
<h1 style = {{marginLeft : '50px'}}>Genre : {movieInfo?.Genre}</h1>
</Box>

<Box border = "null">
<h1 style = {{marginLeft : '50px'}}>Overview : 
{movieInfo?.Plot}</h1>
</Box>
<br/>
<br/>

<Box border = "null">
<h1 style = {{marginLeft : '50px'}}>Casts : </h1>
<h2 style = {{marginLeft : '50px'}}>{movieInfo?.Actors}</h2>
{/* <ImageAvatars/> */}

</Box>

</div>
        </Grid>


    </Grid>
    </div>


        </>
    );
}

export default Details;