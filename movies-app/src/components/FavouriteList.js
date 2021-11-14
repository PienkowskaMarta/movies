import React from "react";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const FavouriteList = (props) => {
  //const [value, setValue] = React.useState();

  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {props.movies.map((movie, index) => (
          <div>
            <Card sx={{ maxWidth: 345, margin: "5px" }}>
              <CardMedia
                component="img"
                height="340"
                image={movie.Poster}
                alt="movie"
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  {movie.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie.Year}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie.Type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Typography variant="body2">Rate this film</Typography>
                  <Rating name="customized-10" defaultValue={5} max={10} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <input
                    id={movie.imdbID}
                    type="checkbox"
                    defaultChecked={false}
                  />
                  <label>Watched</label>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => props.handleFavouritesClick(movie)}
                >
                  Remove from favourites
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </Grid>
    </>
  );
};

export default FavouriteList;


