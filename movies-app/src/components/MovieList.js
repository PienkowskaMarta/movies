import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MovieList = (props) => {
  return (
    <>
      <Grid container direction="row" display="flex" justifyContent="center">
        {props.movies.slice(0, 20).map((movie, index) => (
          <div>
            <Card
              className="container"
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
                className="image"
              />

              <CardContent sx={{ paddingBottom: "0" }} className="overlay">
                <Typography
                  className="text"
                  gutterBottom
                  variant="body1"
                  component="div"
                  sx={{ textAlign: "center", fontSize: "1.5rem" }}
                >
                  {movie.Title}
                </Typography>

                <Button
                  size="large"
                  onClick={() => props.handleFavouritesClick(movie)}
                  sx={{
                    color: "white",
                    marginTop: "5rem",
                    marginLeft: "37%",
                    fontSize: "1.5rem",
                  }}
                >
                  <FavoriteIcon sx={{ color: "#FF6666" }} />
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </Grid>
    </>
  );
};

export default MovieList;
