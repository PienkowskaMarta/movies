import React, { useState, useEffect, useRef } from "react";
import "./App.css";
//import AppBar from "../src/components/AppBar";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import FavouriteList from "../src/components/FavouriteList";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
//import background from "./images/cover2.jpg";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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
          <p style={{ fontSize: "3.3rem" }}>HELLO MOVIE FANS!</p>
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
          <p style={{ fontSize: "2.3rem" }}>WHAT DO YOU WANNA WATCH?</p>
        </ParallaxLayer>
      </Parallax>
      <div
        style={{
          // backgroundImage: `url(${background})`,
          height: "100vh",
          backgroundColor: "#008383",
          // backgroundRepeat: "no-repeat",
          // WebkitBackgroundSize: "cover",
        }}
      ></div>
      <div ref={scollToRef}></div>
      <div className="searchbox">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <MovieListHeading
        // heading="Movies"
        />
      </div>

      <div className="row">
        <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} />
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
      <ArrowUpwardIcon
        sx={{
          transform: "scale(2.0)",
          marginLeft: "3rem",
          marginBottom: "3rem",
        }}
        onClick={() =>
          scollToRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
    </div>
  );
};

export default App;
