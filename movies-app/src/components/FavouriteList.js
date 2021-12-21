import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

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
                backgroundColor: "#008383",
              }}
            >
              <CardMedia
                component="img"
                height="340"
                image={movie.Poster}
                alt="movie"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  {movie.Title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textTransform: "uppercase", textAlign: "center" }}
                >
                  release:{movie.Year}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textTransform: "uppercase", textAlign: "center" }}
                >
                  {movie.Type}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => props.handleFavouritesClick(movie)}
                  sx={{ color: "black", margin: "auto" }}
                >
                  <span class="trash">
                    <span></span>
                    <i></i>
                  </span>
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
