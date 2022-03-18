// import axios from "axios";
import { useEffect } from "react";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { moviedetailsreducers } from "./reducers/moviereducers";
import { loadDetails } from "./actions";
// import Details from "./Details";
import Details2 from "./Details2";
// import { Typography } from "@mui/material";
import { useStyles } from "./Style";
// import ImgMediaCard from "./Card";
// import CircularIndeterminate from "./Spinner";
// import Spinner from "./Spinner";
import Ratingdatabase from "./Ratingdatabase";
// import CircularIndeterminate from "./Spinner";

const Test = () => {
  const search = useSelector((state) => state.apiCallReducers);

  const [loading, setLoading] = React.useState(false);

  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  // console.log(id)
  const post = useSelector((state) => state.moviedetailsreducers);

  // const{Title,Genre}=post;

  // const fetchDetails = async() =>{
  //     const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=900505d8`).catch(err =>{
  //         console.log("Err", err);
  //     })

  const url = `https://www.omdbapi.com/?i=${id}&apikey=900505d8`;

  // const urll = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        dispatch(loadDetails(data));
      } catch (err) {
        console.error(err);
        // alert('No Movies Found')
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none" }}>
            {/* <Typography variant="h2"  color ="red">
    NEPFLIX
  </Typography> */}

            <h1
              style={{
                fontFamily: "Bungee Shade, cursive",
                fontSize: "50px",
                color: "#f30205",
              }}
            >
              NEPFLIX
            </h1>
          </NavLink>
          {/* <Typography variant="h3"  color ="red" style={{marginTop : '15px'}}>
    MOVIE DETAILS
  </Typography> */}

          <h1
            style={{
              fontFamily: "Bungee Shade, cursive",
              fontSize: "50px",
              color: "#f30205",
            }}
          >
            MOVIE DETAILS
          </h1>
        </div>

        {/* <CircularIndeterminate/> */}
        <div
          style={{
            backgroundColor: "black",
            borderRadius: "50px",
            marginTop: "30px",
          }}
        >
          <div style={{ backgroundImage: "url(images/bg.jpeg)" }}>
            <Details2
              title={post.Title}
              genre={post.Genre}
              released={post.Released}
              actors={post.Actors}
              image={post.Poster}
              plot={post.Plot}
            />
          </div>
        </div>

        <div>{/* <Spinner/> */}</div>

        <Ratingdatabase />

        <footer className={classes.footer} style={{ marginTop: "41px" }}>
          All Rights Reserved @2021
        </footer>
      </div>
    </>
  );
};

export default Test;
