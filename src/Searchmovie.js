// import { Typography } from "@mui/material";
// import { Typography } from "@mui/material";
// import { ClassNames } from "@emotion/react";
import React from "react";
import { useState } from "react";
// import Card from "./Card";
import { useStyles } from "./Style";

// import ImgMediaCard from "./Card";
import { Button, TextField } from "@mui/material";
// import Details from "./Details";
import ImgMediaCard from "./Card";
import Details from "./Details";



const key = '900505d8';


const Searchform = ()=>{

  const classes = useStyles(); 

const [query,setQuery] = useState('');
const [movies,setMovies]=useState([]);


const [selectedMovie, onMovieSelect]= useState();


    const SearchMovies = async(e)=>{
        console.log('Submitted');
        // alert('submitted');
        e.preventDefault();



    const url = `http://www.omdbapi.com/?s=${query}&apikey=${key}`

    // const urll = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;




try{
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovies(data.Search);
    }
catch(err){
    console.error(err);
}
}

    return(
        <>
    
       
      
        
        <div>       
        {/* style={{display: "flex",justifyContent:"center" ,marginTop: '10px'}} */}
        <form className={classes.form}  onSubmit={SearchMovies}>
            {/* <label>NEPFLIX</label><br/> */}
            <TextField className={classes.input} id="filled-basic" variant="filled" placeholder="Search for movie..." 
            value = {query} onChange = {(e)=>{
                setQuery(e.target.value)
            }}/>
            <br/>
            <Button variant = 'contained' color = 'error' className={classes.button}>Search</Button>
        </form>
        <br/>
        <br/>
        </div>
        <div> 


        <div className={classes.box}>

        {/* {movies.filter(movie=>movie.poster_path).map(movie => ( */}

            {movies.map((movie, index) => (
                <div>
               <ImgMediaCard 
               kry={index}
               movie = {movie}
               onMovieSelect ={onMovieSelect}
                image ={movie.Poster} 
                title ={movie.Title}
                id = {movie.imdbID}
               />
                </div>   

            ))}
            </div>



            
       


    

    


        </div>


        <div>
        {selectedMovie && <Details 
        selectedMovie = {selectedMovie}/>}
        </div>


        <footer className = {classes.footer}>All Rights Reserved @2021</footer>

      

        </>
    );
}

export default Searchform;