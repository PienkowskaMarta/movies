import React from "react";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";

const FavouriteList = (props) => {
  return (
    <>
      <Grid container direction="row" justifyContent="center">
        {props.movies.map((movie, index) => (
          <div>
            <Card
              style={{
                border: "none",
                boxShadow: "none",
                maxWidth: 345,
                margin: "5px",
              }}
            >
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
                  year of release:{movie.Year}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie.Type}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => props.handleFavouritesClick(movie)}
                >
                  <DeleteIcon sx={{ color: "black" }} />
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
