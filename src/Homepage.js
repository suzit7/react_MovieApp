import React from "react";
import { useStyles } from "./Style";
import { Button, Typography } from "@mui/material";
import Searchform from "./Searchmovie";
import { NavLink } from "react-router-dom";
import FormDialog from "./Dialog";

const Homepage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wallpaper}>
        <div className={classes.main}>
          <div>
            <div className={classes.header}>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                {/* <Typography variant="h2" align="center" color ="red">
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
              {/* <Button className={classes.buttop} variant = "contained" color = "error">Sign In</Button> */}
              <FormDialog />
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "160px" }}>
            <Typography variant="h3" color="black">
              Unlimited movies, TV shows, and more.
            </Typography>
            <br />
            <Typography variant="h5">
              Watch anywhere. Cancel anytime.
            </Typography>
            <br />
            <Button
              className={classes.wlbutton}
              variant="contained"
              color="info"
            >
              Go To WISHLIST
            </Button>
          </div>
          <Searchform />
          <br />
        </div>

        {/* <NavLink to = "/moviedetails" >Movie Details page</NavLink> */}
      </div>
    </>
  );
};

export default Homepage;
