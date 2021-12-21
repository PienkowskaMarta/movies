import React, { useState, useEffect, useRef } from "react";
import "./App.css";
//import AppBar from "../src/components/AppBar";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import FavouriteList from "../src/components/FavouriteList";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { makeStyles, useTheme, useMediaQuery } from "@material-ui/core";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      margin: "5rem",
      fontSize: "3.3rem",
    },
  },
  scroll: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "right",
      margin: "1rem 2rem 0 0 ",
    },
  },
  trailer: {
    [theme.breakpoints.down("xs")]: {
      // width: "100%",
      // height: "auto",
      display: "none",
    },
  },
}));

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("movie-app-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const scollToRef = useRef();
  const classes = useStyles();
  const theme = useTheme();
  const mediaStyles = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className="app_background">
      {/* <AppBar /> */}
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={classes.root}>
            <p style={{ fontSize: "3.3rem" }}>HELLO MOVIE FANS!</p>
            {mediaStyles}
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ height: "100vh", backgroundColor: "#ff6d6d" }}
        />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div className={classes.root}>
            <p style={{ fontSize: "3.3rem" }}>WHAT DO YOU WANNA WATCH?</p>
            {mediaStyles}
          </div>
        </ParallaxLayer>
      </Parallax>
      <div
        style={{
          height: "100vh",
          backgroundColor: "#008383",
        }}
      ></div>
      <div ref={scollToRef}></div>
      <div className="searchbox">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <MovieListHeading />
      </div>

      <div className="row">
        <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} />
      </div>

      <div className={classes.trailer}>
        <div>
          <MovieListHeading heading="Our picks" />
        </div>
        <iframe
          className="video"
          width="560"
          height="340"
          title="Dune"
          src="https://www.youtube.com/embed/n9xhJrPXop4"
        ></iframe>
        {mediaStyles}
      </div>

      <div>
        <MovieListHeading heading="Favorites" />
      </div>

      <div className="row">
        <FavouriteList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
        />
      </div>

      <div className={classes.scroll}>
        <ArrowUpwardIcon
          sx={{
            transform: "scale(2.0)",
            marginLeft: "3rem",
            marginBottom: "3rem",
            textAlign: "center",
          }}
          onClick={() =>
            scollToRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
        {mediaStyles}
      </div>
    </div>
  );
};

export default App;
