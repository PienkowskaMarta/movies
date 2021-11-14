import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const MovieList = (props) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {props.movies.slice(0, 10).map((movie, index) => (
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
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => props.handleFavouritesClick(movie)}
                >
                  Add to favourites
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </Grid>
    </>
  );
};

export default MovieList;
