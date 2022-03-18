import React from "react";
import { useStyles } from "./Style";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState, useEffect } from "react";
import Reviewcomp from "./Reviewcomp";

import { useAuth } from "./firebase"; //New

import FormDialog from "./Dialog";
import { useParams } from "react-router";

const key = "900505d8";
const Details2 = (props) => {
  const { id } = useParams();
  const classes = useStyles();

  const currentUser = useAuth(); //New

  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=sas&apikey=900505d8`)
      .then((response) => setMovieInfo(response.data));
  }, []);

  return (
    <>
      <br />

      <div className={classes.main}></div>

      <br />

      <div className={classes.detailsmaindiv}>
        <Grid container border="null" height="70vh" width="100%" spacing={1}>
          <Grid item md={3}>
            <Box border="null" className={classes.detailimage}>
              <img src={props.image} alt="asd" className={classes.img} />
            </Box>
            <div style={{ marginLeft: "70px" }}>
              {/* <Reviewcomp/>
               */}
              <div style={{ marginTop: "50px", marginLeft: "0px" }}>
                {currentUser !== null ? <Reviewcomp /> : <FormDialog />}
              </div>
            </div>
          </Grid>

          <Grid item md={9} spacing={6}>
            <div className={classes.detailsdiv}>
              <Box border="null">
                <h1
                  style={{
                    color: "red",
                    marginTop: "20px",
                    marginLeft: "50px",
                    fontFamily: "serif",
                    fontSize: "40px",
                  }}
                >
                  {" "}
                  {props.title}
                </h1>
              </Box>

              <Box border="null">
                <h1 style={{ marginLeft: "50px", color: "gold" }}>
                  {" "}
                  ({props.released})
                </h1>
              </Box>

              <br />
              <br />

              <Box border="null">
                <h1 style={{ marginLeft: "50px" }}>
                  <span style={{ color: "red" }}>Genre : </span>
                  {props.genre}
                </h1>
              </Box>

              <Box border="null">
                <h1 style={{ marginLeft: "50px" }}>
                  <span style={{ color: "red" }}>Overview : </span>
                  {props.plot}
                </h1>
              </Box>

              <br />

              <Box border="null">
                <h1 style={{ marginLeft: "50px" }}>
                  <span style={{ color: "red" }}>Casts : </span>
                </h1>
                <h2 style={{ marginLeft: "50px" }}>{props.actors}</h2>
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Details2;
