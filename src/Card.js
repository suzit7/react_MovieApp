import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';






export default function ImgMediaCard(props) {
  

  

  return (
    <>
  <div>
    
    <Card sx={{ maxWidth: 250 , padding : '30px', margin : '10px', border : 'solid'}} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={props.image}
      />
      <CardContent style = {{maxHeight : '50px'}}>
      <div>
        <Typography align="center" gutterBottom variant='subtitle1' component="div" fontSize = "12px">
          {props.title}
        </Typography>
        </div>
      </CardContent>
      <CardActions>
     
        <Button variant="contained" size= 'small' color='error'
        onClick ={()=> props.onMovieSelect(props.movie.imdbID)}
        >WATCH NOW</Button>
      
        <Button variant='outlined' size="small">ADD TO WISHLIST</Button>
      </CardActions>
    </Card>
    </div>
    </>
  );
}
