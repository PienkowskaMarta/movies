import React from "react";

const FavouriteList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.slice(0, 10).map((movie, index) => (
        <div>
          <label className="todo-label" htmlFor="todo-0">
            Watched
          </label>
          <input id="todo-0" type="checkbox" defaultChecked={false} />

          <img src={movie.Poster} alt="movie"></img>
          <div onClick={() => props.handleFavouritesClick(movie)}>
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default FavouriteList;
