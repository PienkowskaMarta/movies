import React from "react";

const MovieListHeading = (props) => {
  var cardStyle = {
    textAlign: "center",
    marginTop: "16%",
    marginBottom: "5.5rem",
    fontSize: "1.3rem",
    textTransform: "uppercase",
  };
  return (
    <div style={cardStyle}>
      <h1>{props.heading}</h1>
    </div>
  );
};

export default MovieListHeading;
