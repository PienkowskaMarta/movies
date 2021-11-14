import React from "react";

const MovieListHeading = (props) => {
  var cardStyle = {
    marginLeft: "1.5rem",
  };
  return (
    <div style={cardStyle}>
      <h1>{props.heading}</h1>
    </div>
  );
};

export default MovieListHeading;
