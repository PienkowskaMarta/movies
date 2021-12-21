import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

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
                  <svg class="heart" viewBox="0 0 32 29.6">
                    <path
                      d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                    />
                  </svg>
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
