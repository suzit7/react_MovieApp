import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function ImgMediaCard(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          border: "red",
          borderRadius: "25px",
        }}
      >
        <Card
          sx={{
            maxWidth: 250,
            padding: "30px",
            margin: "10px",
            border: "solid",
            backgroundColor: "black",
            borderRadius: "25px",
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="250"
            image={props.image}
          />
          <CardContent style={{ maxHeight: "70px" }}>
            <div>
              <Typography
                align="center"
                gutterBottom
                variant="subtitle1"
                component="div"
                fontSize="17px"
                color="white"
              >
                {props.title}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <NavLink
              to={`/movie/${props.movie.imdbID}/${props.movie.Title}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                size="small"
                color="error"
                onClick={() => props.onMovieSelect(props.id)}
              >
                WATCH NOW
              </Button>
            </NavLink>

            <Button variant="contained" size="small" color="info">
              ADD TO WISHLIST
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
