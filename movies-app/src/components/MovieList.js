import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MovieList = (props) => {
  return (
    <>
      <Grid
        container
        direction="row"
        display="flex"
        justifyContent="center"
        sx={{ marginTop: "15rem" }}
      >
        {props.movies.slice(0, 20).map((movie, index) => (
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
                  variant="body1"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  {movie.Title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => props.handleFavouritesClick(movie)}
                  sx={{ color: "black", margin: "auto" }}
                >
                  Add to
                  <FavoriteIcon sx={{ color: "#FF6666" }} />
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
